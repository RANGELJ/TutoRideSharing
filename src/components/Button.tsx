import React from 'react';
import constantColor from '../shared/constantColor';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
  },
  textEnabled: {color: 'white'},
  textDisabled: {color: constantColor('primary', '300')},
  enabledButton: {
    backgroundColor: constantColor('primary', '800'),
  },
  disableButton: {
    backgroundColor: constantColor('primary', '50'),
  },
});

type Props = {
  title: JSX.Element;
  disabled: boolean;
  onPress: () => void;
};

const Button = ({title, disabled, onPress}: Props) => (
  <TouchableOpacity
    style={[
      styles.button,
      disabled ? styles.disableButton : styles.enabledButton,
    ]}
    disabled={disabled}
    onPress={onPress}>
    <Text style={disabled ? styles.textDisabled : styles.textEnabled}>
      {title}
    </Text>
  </TouchableOpacity>
);

export default Button;
