import { call, put, takeEvery } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import { PUT__PROBABILITY_CALCULATOR__NEXT, PUT__PROBABILITY_CALCULATOR__RESULT__BACK, putProbabilityCalculatorResult } from '../actions/probabilityActions';
import { URL__PROBABILITY_CALCULATOR__RESULT, URL__PROBABILITY_CALCULATOR } from '../constants';
import { postProbabilityCalculation } from '../infrastructure/api';

export function* probabilityCalculatorNextSaga({ data }) {
  const { probabilityType, probabilityOne, probabilityTwo } = data;

  const result = yield call(postProbabilityCalculation, probabilityType, [probabilityOne, probabilityTwo]);
  yield put(putProbabilityCalculatorResult(probabilityType, probabilityOne, probabilityTwo, result.data.rate));
  yield put(push(URL__PROBABILITY_CALCULATOR__RESULT));
}

export function* probabilityCalculatorBackSaga() {
  yield put(push(URL__PROBABILITY_CALCULATOR));
}

export default function* probabilitySaga() {
  yield takeEvery(PUT__PROBABILITY_CALCULATOR__NEXT, probabilityCalculatorNextSaga);
  yield takeEvery(PUT__PROBABILITY_CALCULATOR__RESULT__BACK, probabilityCalculatorBackSaga);
}
