import constants from '../../constants.json';

export type Constants = {
  GOOGLE_SERCIVE_IOS_CLIENT_ID: string;
  APP_NAME: string;
  THEME: {
    colors: {
      primary: {
        '50': string;
        '300': string;
        '400': string;
        '800': string;
      };
      error: {
        '700': string;
        '900': string;
      };
    };
  };
};

const fromConstants = () => constants as Constants;

export default fromConstants;
