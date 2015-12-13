import React from 'react-native';
let {
  AppRegistry,
  TabBarIOS,
  StyleSheet,
  Component,
  Text,
  View,
} = React;

class TabDownloads extends React.Component {

  render() {
    return (
      <View style={styles.tabContent}>
        <Text style={styles.tabText}>Downloads</Text>
      </View>
    );
  }

}
let styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center'
  },
  tabText: {
    margin: 50,
    fontSize: 40
  }
});
module.exports = TabDownloads;
