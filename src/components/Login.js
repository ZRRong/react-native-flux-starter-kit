import React from 'react-native';
import MainPage from './MainPage'
import * as SmsActionCreators from '../actions/SmsActionCreators';
import SmsStore from '../stores/SmsStore';
let {
  StyleSheet,
  Text,
  PropTypes,
  Component,
  View,
  TextInput,
  ScrollView,
  TouchableHighlight,
} = React;

let tel={
  username:"",
  password:""
};

function getState(props) {
  const user = SmsStore.getSms();
  this.state={
    username: "",
    password: ""
  };
  return { user };
  console.log('getState:');
}


class Login extends Component{
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
    this.requestData = this.requestData.bind(this);

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
    const { instructions } = this.props;
    let { user } = this.state;
    console.log('render:',user);
    return (

  <View style={styles.container}>
    <View style={styles.flowRight}>
      <TouchableHighlight style={styles.button1}
          underlayColor='#99d9f4'>
        <Text style={styles.buttonText1}>注册</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.button1}
          underlayColor='#99d9f4'>
        <Text style={styles.buttonText1}>登录</Text>
      </TouchableHighlight>
    </View>
      <TextInput
          placeholder="Username"
          onChange={(event) => this.setState({username: event.nativeEvent.text})}
          style={styles.formInput}
          value={this.state.username}
          />
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
            <TouchableHighlight onPress={(this.onSubmitPressed.bind(this))} style={styles.button}
                      underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>提交 </Text>
            </TouchableHighlight>
            <Text style={styles.title}>
.              Welcome to React Native!,{this.state.username}
            </Text>
  </View>

    );
  }
   onSubmitPressed(){
    this.props.navigator.push({
      id: 'MainPage',
      name: '主页',
    });
  }
  requestData(props) {
    SmsActionCreators.postMobile(this.state.username);
  }
  }

  let styles = StyleSheet.create({
    flowRight: {
      flexDirection: 'row',
     alignItems: 'center',
      alignSelf: 'stretch'
  },
  container: {
      padding: 30,
      marginTop: 65,
      alignItems: "stretch",
      color:"#FFFFFF"
  },
  title: {
      fontSize: 18,
      alignItems:'center',
      color:"#40E0D0"
  },
  formInput: {
      height: 36,
      padding: 4,
      marginRight: 5,
      flex: 4,
      fontSize: 18,
      borderWidth: 1,
      borderColor: '#48BBEC',
      borderRadius: 8,
      color: '#48BBEC'
  },
  button: {
    height: 36,
    flex: 2,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  button1: {
    height: 26,
    flex: 2,
    flexDirection: 'row',
    backgroundColor: '#00FF00',
    borderColor: '#00FF00',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonText: {
      fontSize: 18,
      color: "#ffffff",
      alignSelf: "center"
  },
  buttonText1: {
      fontSize: 18,
      color: "#ffffff",
      alignSelf: "center"
  }
  });
export default Login;
