import React, {useEffect, useMemo, useState} from 'react';
import auth, {type FirebaseAuthTypes} from '@react-native-firebase/auth';
import {SafeAreaView, Text} from 'react-native';
import Animated, {
  LightSpeedInRight,
  LightSpeedOutLeft,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import SvgBadge from './src/svg/SvgBadge';
import constantColor from './src/shared/constantColor';
import waitMilliseconds from './src/shared/waitMilliseconds';

const safeAreaStyleBase = {
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 10,
} as const;

const labelStyle = {
  fontWeight: 'bold',
  color: constantColor('800'),
  fontSize: 17,
} as const;

const AnimatedSafeAreaView = Animated.createAnimatedComponent(SafeAreaView);

const exitingAnimation = LightSpeedOutLeft.delay(1000);

function App(): React.JSX.Element {
  const [isAnimatingEnter, setIsAnimatingEnter] = useState(true);
  const [loadingFirebaseAuth, setIsLoadingFirebaseAuth] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    if (isAnimatingEnter) {
      return;
    }
    return auth().onAuthStateChanged(currentUser => {
      setUser(currentUser);
      setIsLoadingFirebaseAuth(false);
    });
  }, [isAnimatingEnter]);

  const enteringAnimation = useMemo(
    () =>
      LightSpeedInRight.withCallback(() => {
        runOnJS(setIsAnimatingEnter)(false);
      }),
    [],
  );

  if (!loadingFirebaseAuth) {
    return (
      <AnimatedSafeAreaView
        key="afterEnter"
        style={safeAreaStyleBase}
        entering={LightSpeedInRight}>
        <Text>After animation</Text>
      </AnimatedSafeAreaView>
    );
  }

  return (
    <AnimatedSafeAreaView
      style={safeAreaStyleBase}
      entering={enteringAnimation}
      exiting={exitingAnimation}>
      <SvgBadge />
      <Text style={labelStyle}>Cargando tu perfil</Text>
    </AnimatedSafeAreaView>
  );
}

export default App;
