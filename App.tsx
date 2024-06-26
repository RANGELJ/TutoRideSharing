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

const safeAreaStyleBase = {
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
} as const;

const AnimatedSafeAreaView = Animated.createAnimatedComponent(SafeAreaView);

function App(): React.JSX.Element {
  const [loadingFirebaseAuth] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  const opacity = useSharedValue(0);
  const translateY = useSharedValue(50);

  const safeAreaAnimatedStyle = useAnimatedStyle(() => ({
    opacity: withSpring(opacity.value),
    transform: [{translateY: withSpring(translateY.value)}],
  }));

  opacity.value = 1;
  translateY.value = 0;

  return (
    <AnimatedSafeAreaView style={[safeAreaStyleBase, safeAreaAnimatedStyle]}>
      <Text
        style={{
          fontWeight: 'bold',
        }}>
        Cargando tu perfil
      </Text>
    </AnimatedSafeAreaView>
  );
}

export default App;
