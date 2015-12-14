'use strict';

import React from 'react-native';
let {
  AsyncStorage,
  Image,
  Component,
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid,
  ToastAndroid,
  BackAndroid,
  TouchableOpacity,
  TouchableHighlight,
  Dimensions,
  Platform,
  ListView,
  TouchableNativeFeedback,
} = React;

import DepartmentList from './DepartmentList';

var Drawer = require('react-native-drawer');
let deviceWidth = Dimensions.get('window').width;
let statusBarSize = Platform.OS == 'ios' ? 10 : 0;
let DRAWER_REF = 'drawer';
let DRAWER_WIDTH_LEFT = 56;
class  MainPage extends Component{
  constructor(props) {
          super(props);
          this.openDrawer = this.openDrawer.bind(this)

      }

    openDrawer() {
      this.refs['DRAWER'].openDrawer()
    }
    _onPressMoreButton(val) {
      // TODO:
      ToastAndroid.show('更多', ToastAndroid.SHORT);
    }
    onSelectDepartment(department) {
      this.refs[DRAWER_REF].closeDrawer();
      this.setState({department: department});
    }

    render() {

      let TouchableElement = TouchableHighlight;
      if (Platform.OS === 'android') {
        TouchableElement = TouchableNativeFeedback;
      }
      let navigationView =(
        <View style={{flex: 1, backgroundColor: 'white'}}>
       <DepartmentList
         navigator={this.props.navigator}
         />
      </View>

     );
      return (
        <DrawerLayoutAndroid
                drawerWidth={300}
                keyboardDismissMode="on-drag"
                ref={'DRAWER'}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => navigationView}>
         <View style={styles.actionsContainer}>
            <TouchableElement onPress={this.openDrawer}>
                    <View style={styles.actionItem}>
                      <Image
                        style={styles.backIcon}
                        source={require('image!ic_menu_white')}
                        resizeMode='contain' />
                        <Text style={styles.title}>
                            首页
                        </Text>
                    </View>
              </TouchableElement>
        <View style={{flex: 1}} />
              <TouchableElement onPress={this._onPressMoreButton}>
                <View style={styles.actionItem}>
                  <Image
                    style={styles.actionIcon}
                    source={require('image!ic_more_white')}
                    resizeMode='contain' />
                </View>
              </TouchableElement>

        </View>
            </DrawerLayoutAndroid>

      );

    }

}

let styles = StyleSheet.create({
  actionsContainer: {
    height: 56,
    paddingTop: statusBarSize,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00a2ed',
  },
  backIcon: {
    width: 32,
    height: 32,
    marginLeft: 8,
    marginRight: 8,
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
      color:"white"
  },
  actionIcon: {
    width: 32,
    height: 32,
  }
});
module.exports = MainPage;
