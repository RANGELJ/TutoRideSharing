import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import Button from '../components/Button';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Animated, {FadeInDown, FadeOutUp} from 'react-native-reanimated';
import {StyleSheet, Text, View} from 'react-native';
import Title from '../components/Title';
import fromConstants from '../shared/fromConstants';
import ButtonCreateGoogAccount from '../components/ButtonCreateGoogAccount';
import TranslatedText from '../components/TranslatedText';
import constantColor from '../shared/constantColor';

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
    gap: 5,
  },
  errorText: {
    color: constantColor('error', '700'),
    fontWeight: 'bold',
  },
  footer: {
    alignItems: 'center',
    padding: 20,
    gap: 10,
  },
});

const ScreenNoUser = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessageTextCode, setErrormessageTextCode] = useState<
    undefined | 'H' | 'I'
  >();

  const loginWithGoogle = async () => {
    GoogleSignin.configure({
      iosClientId: fromConstants().GOOGLE_SERCIVE_IOS_CLIENT_ID,
    });
    await GoogleSignin.hasPlayServices({
      showPlayServicesUpdateDialog: true,
    });
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    await auth().signInWithCredential(googleCredential);
  };

  return (
    <Animated.View
      style={styles.screen}
      entering={FadeInDown}
      exiting={FadeOutUp}>
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
        <Button
          title={<TranslatedText textKey="D" />}
          disabled={isProcessing}
          onPress={() => {
            setErrormessageTextCode(undefined);
            setIsProcessing(true);
            loginWithGoogle()
              .catch(error => {
                setErrormessageTextCode(() => {
                  if (error instanceof Error) {
                    if (
                      error.message.includes(
                        'The user canceled the sign in request',
                      )
                    ) {
                      return 'H';
                    }
                  }
                  return 'I';
                });
              })
              .finally(() => setIsProcessing(false));
          }}
        />
        {errorMessageTextCode && (
          <Animated.Text
            entering={FadeInDown}
            exiting={FadeOutUp}
            style={styles.errorText}>
            <TranslatedText textKey={errorMessageTextCode} />
          </Animated.Text>
        )}
      </View>
      <View style={styles.footer}>
        <Text>
          <TranslatedText textKey="E" />
        </Text>
        <ButtonCreateGoogAccount />
      </View>
    </Animated.View>
  );
};

export default ScreenNoUser;
