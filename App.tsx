import React, {useEffect, useState} from 'react';
import auth, {type FirebaseAuthTypes} from '@react-native-firebase/auth';
import {SafeAreaView, Button, Text} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Animated, {
  useAnimatedProps,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';
import AppConstants from './constants.json';

const AnimatedSafeAreaView = Animated.createAnimatedComponent(SafeAreaView);

enum State {
  APARECIENDO,
  LISTO,
  REMOVIDO,
}

function App(): React.JSX.Element {
  const [state, setState] = useState(State.APARECIENDO);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  const opacity = useSharedValue(0);

  useEffect(() => {
    if (state !== State.LISTO) {
      return;
    }
    GoogleSignin.configure({
      iosClientId: AppConstants.GOOGLE_SERCIVE_IOS_CLIENT_ID,
    });
    return auth().onAuthStateChanged(updatedUser => {
      setUser(updatedUser);
      opacity.value = 0;
    });
  }, [state, opacity]);

  const backgroundStyle = {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  } as const;

  console.log(State[state]);

  const onAnimationEnded = () =>
    setState(current => {
      switch (current) {
        case State.APARECIENDO:
          return State.LISTO;
        case State.LISTO:
          return State.REMOVIDO;
        default:
          return current;
      }
    });

  const cargandoDatosStyle = useAnimatedStyle(() => ({
    opacity: withTiming(
      opacity.value,
      {
        duration: 2000,
      },
      () => {
        runOnJS(onAnimationEnded)();
      },
    ),
  }));

  if (state !== State.REMOVIDO) {
    return (
      <AnimatedSafeAreaView
        style={[backgroundStyle, cargandoDatosStyle]}
        onLayout={() => {
          opacity.value = 1;
        }}>
        <Text>Cargando datos de usuario</Text>
      </AnimatedSafeAreaView>
    );
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <Button
        title={user ? 'Salir' : 'Entrar con google'}
        onPress={() => {
          console.log('here!');
        }}
      />
    </SafeAreaView>
  );
}

export default App;
