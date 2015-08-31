
import { connect } from 'react-redux'
import App from 'reduxz/app'
import * as ItemActions from 'reduxz/item_actions'

function mapStateToProps (state) {
  return {
    items: state.items
  }
}

export default connect(mapStateToProps, ItemActions)(App)
