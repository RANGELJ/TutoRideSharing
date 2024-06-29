import React, {useMemo, useState} from 'react';
import {Linking, Text, TouchableOpacity} from 'react-native';
import TranslatedText from './TranslatedText';

const ButtonCreateGoogAccount = () => {
  const [hasError, setHasError] = useState(false);

  return (
    <TouchableOpacity
      onPress={async () => {
        setHasError(false);
        const createAccountUrl = 'httpss://accounts.google.com/signup';
        const canOpenUrl = await Linking.canOpenURL(createAccountUrl);
        if (canOpenUrl) {
          Linking.openURL(createAccountUrl);
        } else {
          setHasError(true);
        }
      }}>
      <Text
        style={useMemo(
          () => (hasError ? {color: 'red'} : undefined),
          [hasError],
        )}>
        <TranslatedText textKey={hasError ? 'F' : 'G'} />
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonCreateGoogAccount;
