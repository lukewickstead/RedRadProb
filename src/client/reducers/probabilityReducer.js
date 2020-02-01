import { PUT__PROBABILITY_CALCULATOR__RESULT } from '../actions/probabilityActions';

export const initialState = {
  probabilityType: '',
  probabilityOne: '',
  probabilityTwo: '',
  probabilityResult: '',
};

export default function probabilityReducer(state = initialState, action) {
  switch (action.type) {
    case PUT__PROBABILITY_CALCULATOR__RESULT:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
}
