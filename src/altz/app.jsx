
import React from 'react'
import ItemActions from 'altz/item_actions'
import ImmutableRenderMixin from 'react-immutable-render-mixin'

class App extends React.Component {

  constructor (props) {

    super(props)
    this.shouldComponentUpdate = ImmutableRenderMixin.shouldComponentUpdate.bind(this)
  }

  onAddItem () {
    const random = Math.random()
    ItemActions.addItem({
      id: random,
      title: `Hello ${random}`
    })
  }

  renderItemList () {
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
        <button onClick={this.onAddItem}>Add Item</button>
        {this.renderItemList()}
      </div>
    )
  }

}

App.propTypes = {
  items: React.PropTypes.array
}

App.defaultProps = {
  items: []
}

export default App

