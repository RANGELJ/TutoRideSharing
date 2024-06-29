import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import './src/shared/i18nInit';

AppRegistry.registerComponent(appName, () => App);
