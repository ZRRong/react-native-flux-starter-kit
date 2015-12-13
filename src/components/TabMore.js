import React from 'react-native';
let {
  AppRegistry,
  TabBarIOS,
  StyleSheet,
  Component,
  Text,
  View,
} = React;

class TabMore extends Component {

  render() {
    return (
      <View style={styles.tabContent}>
        <Text style={styles.tabText}>More</Text>
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
module.exports = TabMore;
