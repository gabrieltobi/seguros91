import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { ListItem, Icon } from 'react-native-elements'

export default class Repository extends Component {
  onPress = () => {
    const { repository, onPress } = this.props

    if (onPress) {
      onPress(repository)
    }
  }

  render() {
    const { repository } = this.props

    return (
      <ListItem
        titleStyle={styles.titleStyle}
        containerStyle={styles.containerStyle}
        subtitleStyle={styles.subtitleStyle}
        bottomDivider
        chevron
        title={repository.name}
        subtitle={repository.description}
        leftIcon={<Icon name='logo-github' type='ionicon' />}
        onPress={this.onPress}
      />
    )
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#EDEDED',
  },
  titleStyle: {
    fontWeight: 'bold',
    color: '#666666',
    fontSize: 18
  },
  subtitleStyle: {
    color: '#999999'
  }
})