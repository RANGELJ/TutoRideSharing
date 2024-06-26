import constants from '../../constants.json';

export type Constants = {
  GOOGLE_SERCIVE_IOS_CLIENT_ID: string;
  THEME: {
    colors: {
      primary: {
        '800': string;
      };
    };
  };
};

const fromConstants = () => constants as Constants;

export default fromConstants;
