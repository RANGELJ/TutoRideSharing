import React, {useEffect, useState} from 'react';
import auth, {type FirebaseAuthTypes} from '@react-native-firebase/auth';
import {SafeAreaView, Text} from 'react-native';
import LoadingAuth from './src/components/LoadingAuth';

const safeAreaStyleBase = {
  flex: 1,
} as const;

function App(): React.JSX.Element {
  const [isAnimatingEnter, setIsAnimatingEnter] = useState(true);
  const [authAnimationIsDisapearing, setAuthAnimationIsDisapearing] =
    useState(false);
  const [authIsReady, setAuthIsReady] = useState(false);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    if (isAnimatingEnter) {
      return;
    }
    return auth().onAuthStateChanged(currentUser => {
      setUser(currentUser);
      setAuthAnimationIsDisapearing(true);
    });
  }, [isAnimatingEnter]);

  return (
    <SafeAreaView style={safeAreaStyleBase}>
      {(() => {
        if (!authAnimationIsDisapearing) {
          return (
            <LoadingAuth
              onReady={() => {
                setIsAnimatingEnter(false);
              }}
              onDisapeared={() => {
                setAuthIsReady(true);
              }}
            />
          );
        }
        if (!authIsReady) {
          return null;
        }
        return <Text>Resto de la aplicacion</Text>;
      })()}
    </SafeAreaView>
  );
}

export default App;
