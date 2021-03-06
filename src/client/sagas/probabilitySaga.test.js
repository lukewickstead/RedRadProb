import { expect } from 'chai';
import { push } from 'react-router-redux';
import { put, takeEvery, call } from 'redux-saga/effects';

import { postProbabilityCalculation } from '../infrastructure/api';
import { URL__PROBABILITY_CALCULATOR__RESULT, URL__PROBABILITY_CALCULATOR } from '../constants';
import probabilitySaga, { probabilityCalculatorNextSaga, probabilityCalculatorBackSaga } from './probabilitySaga';

import {
  PUT__PROBABILITY_CALCULATOR__NEXT,
  PUT__PROBABILITY_CALCULATOR__RESULT__BACK,
  probabilityCalculatorNextAction,
  probabilityCalculatorResultBackAction,
  putProbabilityCalculatorResult,
} from '../actions/probabilityActions';

describe('When the user is on the probability calculator page', () => {
  describe('and they have input valid probabilities', () => {
    describe('and they select next', () => {
      it('should call the calculator endpoint and put the result into state', () => {
        const action = probabilityCalculatorNextAction('Either', 0, 1);
        const saga = probabilityCalculatorNextSaga(action);

        expect(saga.next().value).to.deep.equal(call(postProbabilityCalculation, 'Either', [0, 1]));
        expect(saga.next({ data: { rate: 0.5 } }).value).to.be.deep.equal(put(putProbabilityCalculatorResult('Either', 0, 1, 0.5)));
        expect(saga.next().value).to.deep.equal(put(push(URL__PROBABILITY_CALCULATOR__RESULT)));
      });
    });
  });
});

describe('When the user is on the probability results page', () => {
  describe('and they select back', () => {
    it('should navigate to the calculator page', () => {
      const action = probabilityCalculatorResultBackAction();
      const saga = probabilityCalculatorBackSaga(action);

      expect(saga.next().value).to.deep.equal(put(push(URL__PROBABILITY_CALCULATOR)));
    });
  });
});

describe('when calling probabilitySaga', () => {
  it('can watch for all required sagas', () => {
    const saga = probabilitySaga();
    expect(saga.next().value).to.deep.equal(takeEvery(PUT__PROBABILITY_CALCULATOR__NEXT, probabilityCalculatorNextSaga));
    expect(saga.next().value).to.deep.equal(takeEvery(PUT__PROBABILITY_CALCULATOR__RESULT__BACK, probabilityCalculatorBackSaga));
  });
});
