
const ADD_MEAL = 'ADD_MEAL'

export const addMeal = (photo) => {
  return {
    type: ADD_MEAL,
    payload: photo
  }
}
/** REDUCER **/

const initialState = {
  meals: []
}


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_MEAL:
    return {
      ...state,
      meals: [
        ...state.meals,
        action.payload
      ],
    }
    default:
      return state
  }
}