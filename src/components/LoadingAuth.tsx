import {Text, View} from 'react-native';
import Animated, {BounceIn, BounceOut, runOnJS} from 'react-native-reanimated';
import constantColor from '../shared/constantColor';
import SvgBadge from '../svg/SvgBadge';
import React, {useMemo} from 'react';

const frameStyle = {
  width: '100%',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
} as const;

const iconFrameStyle = {
  justifyContent: 'center',
  alignItems: 'center',
} as const;

const labelStyle = {
  fontWeight: 'bold',
  color: constantColor('800'),
  fontSize: 17,
} as const;

type Props = {
  onReady: () => void;
  onDisapeared: () => void;
};

const LoadingAuth = ({onReady, onDisapeared}: Props) => {
  const enteringAnimation = useMemo(
    () =>
      BounceIn.withCallback(() => {
        runOnJS(onReady)();
      }),
    [onReady],
  );

  const exitingAnimation = useMemo(
    () =>
      BounceOut.delay(2000).withCallback(() => {
        runOnJS(onDisapeared)();
      }),
    [onDisapeared],
  );

  return (
    <View style={frameStyle}>
      <Animated.View
        style={iconFrameStyle}
        entering={enteringAnimation}
        exiting={exitingAnimation}>
        <SvgBadge />
        <Text style={labelStyle}>Cargando tu perfil</Text>
      </Animated.View>
    </View>
  );
};

export default LoadingAuth;
