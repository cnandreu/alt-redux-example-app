
import alt from 'altz/alt_instance'
import ItemActions from 'altz/item_actions'
import { Record, List } from 'immutable'

var Item = Record({
  id: null,
  title: ''
}, 'Item')

class ItemStore {

  constructor () {

    this.items = List()

    this.bindListeners({
      handleAddingItem: ItemActions.ADD_ITEM
    })

  }

  handleAddingItem (payload: {id: number; title: string}) {
    this.items = this.items.push(new Item(payload))
  }

}

export default alt.createStore(ItemStore, 'ItemStore')
