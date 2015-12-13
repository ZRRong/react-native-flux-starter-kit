'use strict';

import React from 'react-native';
import TabFavorites from './TabFavorites';
import TabDownloads from './TabDownloads';
import TabMore from './TabMore';
let {
  AppRegistry,
  Component,
  TabBarIOS,
  StyleSheet,
  Text,
  View,
} = React;

class StarterTabBarIOS extends Component {

  constructor(props) {
    super(props);
    this.state = {selectedTab: 'tabFavorites'};
  }

  setTab(tabId) {
    this.setState({selectedTab: tabId});
  }

  render() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          systemIcon="favorites"
          selected={this.state.selectedTab === 'tabFavorites'}
          onPress={() => this.setTab('tabFavorites')}>
          <TabFavorites/>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          systemIcon="downloads"
          selected={this.state.selectedTab === 'tabDownloads'}
          onPress={() => this.setTab('tabDownloads')}>
          <TabDownloads/>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          systemIcon="more"
          selected={this.state.selectedTab === 'tabMore'}
          onPress={() => this.setTab('tabMore')}>
          <TabMore/>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }

}
module.exports = StarterTabBarIOS;
