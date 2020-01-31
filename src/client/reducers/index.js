import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import probabilityReducer from './probabilityReducer';

export default (history) => combineReducers({
  router: connectRouter(history),
  probabilityReducer,
});
