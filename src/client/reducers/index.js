import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import probability from './probabilityReducer';

export default (history) => combineReducers({
  router: connectRouter(history),
  probability,
});
