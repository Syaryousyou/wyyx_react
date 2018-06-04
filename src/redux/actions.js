import {RECEIVE_NEWITEMS} from './action-types'
import {reqNewItems} from '../api/index'

const receiveNewItems = (newItems) => ({type:RECEIVE_NEWITEMS,data:newItems})

export function getNewItems() {
  return async dispatch => {
    const result = await reqNewItems()
    // const result = response.data
    console.log(result)
    if (result.code===0) {
      dispatch(receiveNewItems(result.data))
    }
  }
}