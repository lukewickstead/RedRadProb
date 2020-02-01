import { put, takeEvery } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import { URL__PROBABILITY_CALCULATOR__RESULT, URL__PROBABILITY_CALCULATOR } from '../constants';
import { PUT__PROBABILITY_CALCULATOR__NEXT, PUT__PROBABILITY_CALCULATOR__RESULT__BACK, putProbabilityCalculatorResult } from '../actions/probabilityActions';

export function* probabilityCalculatorNextSaga({ data }) {
  const { probabilityType, probabilityOne, probabilityTwo } = data;
  yield put(putProbabilityCalculatorResult(probabilityType, probabilityOne, probabilityTwo, 0.5));
  yield put(push(URL__PROBABILITY_CALCULATOR__RESULT));
}

export function* probabilityCalculatorBackSaga() {
  yield put(push(URL__PROBABILITY_CALCULATOR));
}

export default function* probabilitySaga() {
  yield takeEvery(PUT__PROBABILITY_CALCULATOR__NEXT, probabilityCalculatorNextSaga);
  yield takeEvery(PUT__PROBABILITY_CALCULATOR__RESULT__BACK, probabilityCalculatorBackSaga);
}
