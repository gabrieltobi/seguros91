import React, { Component } from 'react'
import { WebView } from 'react-native-webview'

import Loading from '../components/Loading'

export default class RepoDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('repository')['name']
    }
  }

  state = {
    loading: true
  }

  onWebviewLoad = () => {
    this.setState({ loading: false })
  }

  render() {
    const { navigation: { state: { params: { repository } } } } = this.props

    return (
      <React.Fragment>
        <WebView
          onLoad={this.onWebviewLoad}
          source={{ uri: repository.html_url }}
        />

        {
          this.state.loading &&
          <Loading />
        }

      </React.Fragment>
    )
  }
}
