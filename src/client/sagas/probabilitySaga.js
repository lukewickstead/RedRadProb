import { put, takeEvery } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import { PUT__PROBABILITY_CALCULATOR__NEXT, putProbabilityCalculatorResult } from '../actions/probabilityActions';
import { URL__PROBABILITY_CALCULATOR__RESULT } from '../constants';

export function* probabilityCalculatorNextSaga({ data }) {
  const { probabilityType, probabilityOne, probabilityTwo } = data;
  yield put(putProbabilityCalculatorResult(probabilityType, probabilityOne, probabilityTwo, 0.5));
  yield put(push(URL__PROBABILITY_CALCULATOR__RESULT));
}

export default function* probabilitySaga() {
  yield takeEvery(PUT__PROBABILITY_CALCULATOR__NEXT, probabilityCalculatorNextSaga);
}
