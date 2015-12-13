/**
 * React Native Flux Starter Kit
 * (C) 2015 Mingdong Luo (https://github.com/mdluo) | MIT License
 */

import React,{ AppRegistry } from 'react-native';
import App from './src/components/App';
import Login from './src/components/Login';
import MainPage from './src/components/MainPage';
import Department from './src/components/Department';

let {
  Platform,
  StyleSheet,
  Component,
  Text,
  Navigator,
  TouchableOpacity,
  View,
} = React;

class Root extends App {
  static defaultProps = {
    ...App.defaultProps,
    instructions: 'Shake or press menu button for dev menu',
  }
  render() {
    return (
      <Navigator
          initialRoute={{id: 'Login', name: 'Index'}}
          renderScene={this.renderScene.bind(this)}
          configureScene={(route) => {
            if (route.sceneConfig) {
              return route.sceneConfig;
            }
            return Navigator.SceneConfigs.FloatFromRight;
          }} />
    );
  }
    renderScene(route, navigator) {
      var routeId = route.id;
      if (routeId === 'App') {
        return (
          <App
            navigator={navigator} />
        );
      }
      if (routeId === 'Login') {
        return (
          <Login
            navigator={navigator} />
        );
      }
      if (routeId === 'Department') {
        return (
          <Department
            navigator={navigator} />
        );
      }
      if (routeId === 'DepartmentList') {
        return (
          <DepartmentList
            navigator={navigator} />
        );
      }
      if (routeId === 'MainPage') {
        return (
          <MainPage
              navigator={navigator} />
        );
      }

    }

}

AppRegistry.registerComponent('App', () => Root);
