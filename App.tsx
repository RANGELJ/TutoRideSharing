import React, {useState} from 'react';
import {type FirebaseAuthTypes} from '@react-native-firebase/auth';
import {SafeAreaView, Text} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import SvgBadge from './src/svg/SvgBadge';
import constantColor from './src/shared/constantColor';

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
      <SvgBadge />
      <Text style={labelStyle}>Cargando tu perfil</Text>
    </AnimatedSafeAreaView>
  );
}

export default App;
