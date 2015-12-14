'use strict';

var React = require("react-native");

var {
    Component,
    StyleSheet,
    Text,
    Image,
    TouchableHighlight,
    ToastAndroid,
    View,
} = React;
import {
    Subheader,
    Avatar,
    COLOR
} from 'mrn';

var DepartmentList = React.createClass({

  _onPressBackButton: function() {
    if (this.props.navigator) {
      this.props.navigator.push({
        title: "科室",
        id: 'Department',
      });
    }
  },
  render() {
    console.log('Right.render');
    return (
      <View style={styles.container}>
    <TouchableHighlight onPress={this._onPressBackButton}
      underlayColor='#D3D3D3'>
      <View style={styles.titleIcon}>
        <View style={styles.con}>
  <Avatar src="https://s3.amazonaws.com/uifaces/faces/twitter/ok/128.jpg"/>
          <Text style={styles.title} >
              HAHA
          </Text>
        </View>
      </View>
          </TouchableHighlight>
    <View style={styles.rowSplitLine}>
    </View>
          <View style={styles.Icon}>
            <View style={styles.con}>
            <Avatar src="http://mrn.js.org/user/image/favicon.png"/>
             <Text style={styles.title}  >
            设置
           </Text>
           </View>
           </View>
      <View style={styles.rowSplitLine}>
           </View>
           <View style={styles.Icon}>
             <View style={styles.con}>
             <Avatar src="http://mrn.js.org/user/image/favicon.png"/>
              <Text style={styles.title}  >
             工作汇总
            </Text>
            </View>
            </View>
    </View>

    );
  }

});
var styles = StyleSheet.create({
    container: {
        padding: 30,
        marginTop: 65,
        alignItems: "stretch",
        color:"white"
    },

    actionItem: {
      height: 56,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: 8,
      paddingRight: 8,
    },
    titleIcon:{
      height: 80,
      justifyContent: 'center'
    },
    Icon:{
      height: 50,
      justifyContent: 'center',
      marginTop: 20
    },
    con:{
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center'
    },
    rowSplitLine: {
      height: 1,
      backgroundColor: '#e5e5e5',
      marginLeft: 20,
      marginRight: 20,
    },
    title: {
      fontSize: 12,
      color: 'black',
      marginLeft: 10

    }

});
module.exports = DepartmentList;
