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
        <TouchableHighlight onPress={this._onPressBackButton}>
          <Text style={styles.title} >
              HAHA
          </Text>
          </TouchableHighlight>
          <Text style={styles.title}  >
            泌尿科
          </Text>

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
    title: {
        fontSize: 18,
        marginBottom: 10,

    }

});
module.exports = DepartmentList;
