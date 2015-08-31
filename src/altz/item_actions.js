
import alt from 'altz/alt_instance'

class ItemActions {

  addItem (item) {

    setTimeout(() => {
      this.dispatch(item)
    }, 100)

  }

}

export default alt.createActions(ItemActions)
