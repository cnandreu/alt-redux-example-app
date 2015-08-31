
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import AppContainer from 'reduxz/app_container'
import configureStore from 'reduxz/configure_store'

const store = configureStore()

export default class Root extends Component {

  render () {
    return (
      <Provider store={store}>
        {() => <AppContainer />}
      </Provider>
    )
  }

}
