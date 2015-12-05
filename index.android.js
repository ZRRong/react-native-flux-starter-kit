/**
 * React Native Flux Starter Kit
 * (C) 2015 Mingdong Luo (https://github.com/mdluo) | MIT License
 */

import { AppRegistry } from 'react-native';
import App from './src/components/App';

class Root extends App {
  static defaultProps = {
    ...App.defaultProps,
    instructions: 'Shake or press menu button for dev menu',
  }
}

AppRegistry.registerComponent('App', () => Root);
