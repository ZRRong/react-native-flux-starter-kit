/**
 * React Native Flux Starter Kit
 * (C) 2015 Mingdong Luo (https://github.com/mdluo) | MIT License
 */

import React,{ AppRegistry } from 'react-native';
import App from './src/components/App';
import Login from './src/components/Login';
let {
  Platform,
  StyleSheet,
  Component,
  Text,
  NavigatorIOS,
  TouchableOpacity,
  View,
} = React;
class Root extends App {
  static defaultProps = {
    ...App.defaultProps,
    instructions: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu',
  }
  render() {
      return (
  <NavigatorIOS
               style={styles.navigationContainer}
               initialRoute={{
               title: "Navigator Example",
               component: Login,
           }} />
       );
     }
}
let styles = StyleSheet.create({
    navigationContainer: {
        flex: 1
    }
});

AppRegistry.registerComponent('App', () => Root);
