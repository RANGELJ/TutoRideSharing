import React from 'react';
import {Text} from 'react-native';
import constantColor from '../shared/constantColor';

const labelStyle = {
  fontWeight: 'bold',
  color: constantColor('primary', '800'),
  fontSize: 17,
} as const;

type Props = React.PropsWithChildren;

const Title = ({children}: Props) => <Text style={labelStyle}>{children}</Text>;

export default Title;
