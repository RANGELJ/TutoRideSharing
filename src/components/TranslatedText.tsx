import React from 'react';
import {useTranslation} from 'react-i18next';

type Props = {
  interpolatedValues?: Record<string, string>;
  textKey: string;
};

const TranslatedText = ({interpolatedValues, textKey}: Props) => {
  const {t} = useTranslation();

  return <>{t(textKey, interpolatedValues)}</>;
};

export default TranslatedText;
