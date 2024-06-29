import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import {getLocales} from 'react-native-localize';

const i18nInit = i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  fallbackLng: 'es',
  lng: getLocales().at(0)?.languageCode,
  interpolation: {
    escapeValue: false,
  },
  resources: {
    es: {translation: require('../translations/es.json')},
    en: {translation: require('../translations/en.json')},
  },
});

export default i18nInit;
