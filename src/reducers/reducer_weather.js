import {FETCH_WEATHER} from '../actions/index'

// state is going to be array s othat we can store data of multiple cities
// it is convinient for us to do so inorder to dispaly them on the dashboard at once
export default function(state = [], action) {

  switch (action.type) {

    // we need to mutate the state in-place, we add new city search to the state
    // we return the updated state
    case FETCH_WEATHER:
      return [action.payload.data, ...state];
      // above is similar to below
      //return state.concat([action.payload.data]);

  }
  return state;
}
