
export const initialState = {
  test: 0,
};

export default function portfolioDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case 'TEST':
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
}
