import React, {useMemo, useState} from 'react';
import {Linking, Text, TouchableOpacity} from 'react-native';

const ButtonCreateGoogAccount = () => {
  const [hasError, setHasError] = useState(false);

  return (
    <TouchableOpacity
      onPress={async () => {
        setHasError(false);
        const createAccountUrl = 'https://accounts.google.com/signup';
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
        {hasError ? 'No se pudo abrir el link' : 'Crea una aquí'}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonCreateGoogAccount;
