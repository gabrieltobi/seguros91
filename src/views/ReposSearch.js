import React, { Component } from 'react'
import { View, ActivityIndicator, FlatList } from 'react-native'

import { get } from '../utils/fetch-utils'
import Repository from '../components/Repository'
import Loading from '../components/Loading'

export default class ReposSearch extends Component {
  static navigationOptions = {
    title: 'Repositórios'
  }

  state = {
    username: 'gabrieltobi',
    firstLoad: true,
    refreshing: false,
    repos: []
  }

  currentRequest = null

  componentDidMount() {
    this.fetchRepos()
  }

  componentWillUnmount() {
    // Prevent memory leaks
    this.clearRequest()
  }

  clearRequest = () => {
    if (this.currentRequest) {
      this.currentRequest.abort()
    }
  }

  fetchRepos = async () => {
    this.clearRequest()

    if (!this.state.firstLoad) {
      this.setState({ refreshing: true })
    }

    // Left in state to be future proof
    const request = get(`https://api.github.com/users/${this.state.username}/repos`)
    this.currentRequest = request

    const repos = await request
    this.setState({
      repos,
      firstLoad: false,
      refreshing: false
    })
  }

  onRepositoryPress = (repository) => {
    const { navigation } = this.props
    navigation.navigate('RepoDetail', { repository })
  }

  render() {
    if (this.state.firstLoad) {
      return <Loading />
    }

    return (
      <View>
        <FlatList
          data={this.state.repos}
          renderItem={({ item }) => <Repository repository={item} onPress={this.onRepositoryPress} />}
          keyExtractor={({ id }) => `${id}`}
          refreshing={this.state.refreshing}
          onRefresh={this.fetchRepos}
        />
      </View>
    )
  }
}
