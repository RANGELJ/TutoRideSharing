import React from 'react';
import Animated, {FadeInDown} from 'react-native-reanimated';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Title from '../components/Title';
import fromConstants from '../shared/fromConstants';
import constantColor from '../shared/constantColor';
import ButtonCreateGoogAccount from '../components/ButtonCreateGoogAccount';
import TranslatedText from '../components/TranslatedText';

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
      <Title>
        <TranslatedText
          textKey="B"
          interpolatedValues={{appname: fromConstants().APP_NAME}}
        />
      </Title>
      <Text>
        <TranslatedText textKey="C" />
      </Text>
    </View>
    <View style={styles.actionView}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          <TranslatedText textKey="D" />
        </Text>
      </TouchableOpacity>
    </View>
    <View style={styles.footer}>
      <Text>
        <TranslatedText textKey="E" />
      </Text>
      <ButtonCreateGoogAccount />
    </View>
  </Animated.View>
);

export default ScreenNoUser;
