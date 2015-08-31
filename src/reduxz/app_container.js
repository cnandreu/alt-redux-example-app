
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import App from 'reduxz/app'
import * as ItemActions from 'reduxz/item_actions'

function mapStateToProps (state) {
  return {
    items: state.items
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(ItemActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
