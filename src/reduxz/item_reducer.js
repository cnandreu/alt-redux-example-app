
import { ADD_ITEM } from 'reduxz/item_actions'
import {Record, List} from 'immutable'

var Item = Record({
  id: null,
  title: ''
}, 'Item')

const initialItems = List()

export default function itemReducer (items = initialItems, {type, payload}) {

  switch (type) {

    case ADD_ITEM:
      return items.push(new Item(payload))

    default:
      return items
  }

}
