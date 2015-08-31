
import React from 'react'
import AltContainer from 'alt/AltContainer'
import App from 'altz/app'
import ItemStore from 'altz/item_store'

export default class AppContainer extends React.Component {

  render () {
    return (

      <AltContainer

        stores = {[ItemStore]}

        inject = {{
          items: () => {
            return ItemStore.getState().items
          }
        }}>

        <App/>

      </AltContainer>
    )
  }

}
