import React, { Component } from 'react'
import { View, ActivityIndicator } from 'react-native'

export default class Loading extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator size="large" color="#ff4d00" />
      </View >
    )
  }
}