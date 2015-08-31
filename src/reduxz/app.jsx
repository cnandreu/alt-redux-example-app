
import React, { Component, PropTypes } from 'react'
import ImmutableRenderMixin from 'react-immutable-render-mixin'
import { List } from 'immutable'

class App extends Component {

  constructor (props) {
    super(props)
    this.shouldComponentUpdate = ImmutableRenderMixin.shouldComponentUpdate
  }

  addItem () {
    const random = Math.random()
    this.props.addItem({
      id: random,
      title: `Hello ${random}`
    })
  }

  renderItems () {
    return this.props.items.map(item => {
      return (
          <div key={item.get('id', 'no id')}>
            {item.get('title', 'no title')}
          </div>
        )
    })
  }

  render () {
    return (
      <div>
        <button onClick={this.addItem.bind(this)}>Add Item</button>
        {this.renderItems()}
      </div>
    )
  }
}

App.propTypes = {
  items: PropTypes.object,
  addItem: PropTypes.func
}

App.defaultProps = {
  items: List(),
  addItem () {}
}

export default App
