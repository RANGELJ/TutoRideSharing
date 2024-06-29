import React from 'react';
import Animated, {FadeInDown} from 'react-native-reanimated';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Title from '../components/Title';
import fromConstants from '../shared/fromConstants';
import constantColor from '../shared/constantColor';
import ButtonCreateGoogAccount from '../components/ButtonCreateGoogAccount';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    gap: 10,
  },
  titleView: {
    flex: 3,
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionView: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    alignItems: 'center',
    padding: 20,
    gap: 10,
  },
  button: {
    backgroundColor: constantColor('800'),
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {color: 'white'},
});

const ScreenNoUser = () => (
  <Animated.View style={styles.screen} entering={FadeInDown}>
    <View style={styles.titleView}>
      <Title>{`¡Bienvenido a ${fromConstants().APP_NAME}!`}</Title>
      <Text>Inicia sesión con Google para comenzar</Text>
    </View>
    <View style={styles.actionView}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.footer}>
      <Text>¿No tienes una cuenta de Google?</Text>
      <ButtonCreateGoogAccount />
    </View>
  </Animated.View>
);

export default ScreenNoUser;
