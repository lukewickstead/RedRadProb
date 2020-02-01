
import { expect } from 'chai';
import { push } from 'react-router-redux';
import { put, takeEvery } from 'redux-saga/effects';
import { probabilityCalculatorNextAction, putProbabilityCalculatorResult, PUT__PROBABILITY_CALCULATOR__NEXT } from '../actions/probabilityActions';
import probabilitySaga, { probabilityCalculatorNextSaga } from './probabilitySaga';
import { URL__PROBABILITY_CALCULATOR__RESULT } from '../constants';

describe('When the user is on the probabilirty calculator page', () => {
  describe('and they have input valid probabiities', () => {
    describe('and they select next', () => {
      it('should call the calculator endpoint and put the result into state', () => {
        const action = probabilityCalculatorNextAction('Either', 0, 1);
        const saga = probabilityCalculatorNextSaga(action);

        expect(saga.next().value).to.be.deep.equal(put(putProbabilityCalculatorResult('Either', 0, 1, 0.5)));
        expect(saga.next().value).to.deep.equal(put(push(URL__PROBABILITY_CALCULATOR__RESULT)));
      });
    });
  });
});

describe('when calling probabilitySaga', () => {
  it('can watch for all required sagas', () => {
    const saga = probabilitySaga();
    expect(saga.next().value).to.deep.equal(takeEvery(PUT__PROBABILITY_CALCULATOR__NEXT, probabilityCalculatorNextSaga));
  });
});
