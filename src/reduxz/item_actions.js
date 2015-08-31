
export const ADD_ITEM = 'ADD_ITEM'

export function addItem (payload: {id: number; title: string}) {

  return dispatch => {
    setTimeout(() => {
      dispatch({ type: ADD_ITEM, payload })
    }, 100)
  }

}

// Not used, just here for reference:
export function addItemSync (payload) {
  return {
    type: ADD_ITEM,
    payload
  }
}
