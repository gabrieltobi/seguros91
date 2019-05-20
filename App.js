import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import { View, StatusBar } from 'react-native'

import ReposSearch from './src/views/ReposSearch'
import RepoDetail from './src/views/RepoDetail'

const stackNavigatorConfig = {
  initialRouteName: ReposSearch.name,
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: '#ff4d00' },
    headerTintColor: '#fff'
  }
}

const MainNavigator = createStackNavigator({
  ReposSearch: { screen: ReposSearch },
  RepoDetail: { screen: RepoDetail }
}, stackNavigatorConfig)

const AppContainer = createAppContainer(MainNavigator)

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <StatusBar backgroundColor="#e44c00" barStyle="light-content" />
        <AppContainer />
      </React.Fragment>
    )
  }
}
