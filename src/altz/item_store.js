
import alt from 'altz/alt_instance'
import ItemActions from 'altz/item_actions'
import Immutable from 'immutable'

var Item = Immutable.Record({
  id: null,
  title: ''
})

class ItemStore {

  constructor () {

    this.items = Immutable.List()

    this.bindListeners({
      handleAddingItem: ItemActions.ADD_ITEM
    })

  }

  handleAddingItem (payload:{id:number; title:string}) {

    const {title, id} = payload

    this.items = this.items.push(new Item({
      id,
      title
    }))

  }

}

export default alt.createStore(ItemStore, 'ItemStore')
