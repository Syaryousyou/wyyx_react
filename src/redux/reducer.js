import {combineReducers} from 'redux'
import {
  RECEIVE_NEWITEMS
} from './action-types'
const initNewItems = []
function newItems(state=initNewItems,action) {
  switch (action.type){
    case RECEIVE_NEWITEMS:
      return action.data
    default:
      return state
  }
}
export default combineReducers({
  newItems
})
// export const newItems = (state=initNewItems,action) => {
//   switch (action.type){
//      case RECEIVE_NEWITEMS:
//        return action.data
//     default:
//       return state
//   }
// }