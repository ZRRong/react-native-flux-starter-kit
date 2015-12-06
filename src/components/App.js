/**
 * React Native Flux Starter Kit
 * (C) 2015 Mingdong Luo (https://github.com/mdluo) | MIT License
 */

import React, { Component, PropTypes } from 'react-native';

import * as UserActionCreators from '../actions/Github/UserActionCreators';
import UserStore from '../stores/Github/UserStore';

let {
  Platform,
  StyleSheet,
  Text,
  View,
} = React;

function requestData(props) {
  UserActionCreators.requestUser('mdluo');
}

function getState(props) {
  const user = UserStore.getUser();
  return { platform: Platform.OS, user };
}

class App extends Component {

  static propTypes = {
    instructions: PropTypes.string,
  }

  static defaultProps = {
    ...Component.defaultProps,
    instructions: 'Usage instructions not provided.',
  }

  constructor(props, context) {
    super(props, context);
    this.handleStoresChanged = this.handleStoresChanged.bind(this);
    this.state = getState(props);
  }

  componentWillMount() {
    UserStore.addChangeListener(this.handleStoresChanged);
    requestData();
  }

  componentWillUnmount() {
    UserStore.removeChangeListener(this.handleStoresChanged);
  }

  handleStoresChanged() {
    this.setState(getState(this.props));
  }

  render() {
    const { instructions } = this.props;
    let { platform, user } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native! {user.login}
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.{platform}.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default App;
