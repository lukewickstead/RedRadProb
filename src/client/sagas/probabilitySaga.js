import { call, takeEvery } from 'redux-saga/effects';
import { consoleError } from '../helpers/consoleHelper';

export function* test() {
  yield call(consoleError, 'Hello World');
}

export default function* portfolioDetailsSaga() {
  yield takeEvery('TEST', test);
}
