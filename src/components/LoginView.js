"use strict";

import React from "react-native";
import * as SmsActionCreators from '../actions/SmsActionCreators';
import SmsStore from '../stores/SmsStore';
let {
    Component,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    View,
} = React;

import StarterTabBarIOS from "./StarterTabBarIOS";

function getState(props) {
  const user = SmsStore.getSms();
  this.state={
    username: "",
    password: ""
  };
  return { user };
  console.log('getState:');
}
class LoginView extends Component {
  
  constructor(props, context) {
    super(props, context);
    this.requestData = this.requestData.bind(this);
    this.handleStoresChanged = this.handleStoresChanged.bind(this);
    this.state = getState(props);
    this.state = {
            username: "",
            password: ""
        };
    }
    componentWillMount() {
      SmsStore.addChangeListener(this.handleStoresChanged);
      console.log('WillMount:');
    }

    componentWillUnmount() {
      SmsStore.removeChangeListener(this.handleStoresChanged);
    }

    handleStoresChanged() {
      this.setState(getState(this.props));
      console.log('handleStoresChanged:');
    }
    render() {
      let { user } = this.state;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    注册
                </Text>
            <View>
          <TextInput
              placeholder="Username"
              onChange={(event) => this.setState({username: event.nativeEvent.text})}
              style={styles.formInput}
              value={this.state.username} />
          <View style={styles.flowRight}>
            <TextInput
              placeholder='Password'
              onChange={(event) => this.setState({password: event.nativeEvent.text})}
              style={styles.formInput}
              value={this.state.password}
              />
            <TouchableHighlight
             onPress={(this.requestData.bind(this))}
             style={styles.button}
             underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>验证码</Text>
        </TouchableHighlight>
      </View>
      <TouchableHighlight onPress={(this.onSubmitPressed.bind(this))} style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableHighlight>
      </View>
      <Text style={styles.title}>
.              Welcome to React Native!,{this.state.username}
      </Text>
    </View>
        );
    }

    onSubmitPressed() {
        this.props.navigator.push({
            title: "Secure Page",
            component: StarterTabBarIOS,
            passProps: {username: this.state.username, password: this.state.password},
        });
    }
    requestData(props) {
      SmsActionCreators.postMobile(this.state.username);
    }
};

let styles = StyleSheet.create({
  flowRight: {
    flexDirection: 'row',
   alignItems: 'center',
    alignSelf: 'stretch'
},
    container: {
        padding: 30,
        marginTop: 65,
        alignItems: "stretch"
    },
    title: {
        fontSize: 18,
        marginBottom: 10
    },
    formInput: {
        height: 36,
        padding: 10,
        marginRight: 5,
        marginBottom: 5,
        marginTop: 5,
        flex: 1,
        fontSize: 18,
        borderWidth: 1,
        borderColor: "#555555",
        borderRadius: 8,
        color: "#555555"
    },
    button: {
        height: 36,
        flex: 1,
        backgroundColor: "#555555",
        borderColor: "#555555",
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 10,
        justifyContent: "center"
    },
    buttonText: {
        fontSize: 18,
        color: "#ffffff",
        alignSelf: "center"
    },
});

module.exports = LoginView;
