'use strict';

var React = require('react-native');
var {
  AppRegistry,
  PixelRatio,
  StyleSheet,
  Text,
  View,
  Image,
  ToolbarAndroid,
  TouchableHighlight,
  Animated,
  Platform,
  WebView,
} = React;
import {
    Button,
    TYPO,
    COLOR,
    Subheader
} from 'mrn';
var DetailToolbar = require('./DetailToolbar');

var Department = React.createClass({

  getInitialState: function() {
    return({
    });
  },
  componentDidMount: function() {
  },
  onPress: function () {

  },

  render: function() {
      var { primary } =  this.props;
    var toolbar = <DetailToolbar navigator={this.props.navigator} style={styles.toolbar}/>;
    return (
  <View style={styles.container}>
      {toolbar}
      <View style={styles.content}>
          <Button value="NORMAL FLAT" primary={primary} onPress={()=> console.log(this.refs)}/>
          <Button value="DISABLED FLAT" disabled={true} primary={primary}/>
          <Button value="NORMAL RAISED" raised={true} primary={primary}/>
          <Button value="DISABLED RAISED" disabled={true} raised={true} primary={primary}/>
      </View>
       </View>

       );
 }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  content: {
      padding: 16,
  },
  toolbar: {
    backgroundColor: '#00a2ed',
    height: 56,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },


  titleContainer: {
    flex: 1,
    alignSelf: 'flex-end',
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  title: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
  },

  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top:56,
  },
  wrapper: {
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }

});

module.exports = Department;
