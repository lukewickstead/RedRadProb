import { all, fork } from 'redux-saga/effects';

import probabilitySaga from './probabilitySaga';

export default function* watchMany() {
  yield all([
    fork(probabilitySaga),
  ]);
}
