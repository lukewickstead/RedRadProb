import { expect } from 'chai';

import probabilityReducer from './probabilityReducer';
import { putProbabilityCalculatorResult } from '../actions/probabilityActions';

describe('when calling probabilityReducer ', () => {
  describe('to initialise ', () => {
    it('should return the correct initial state', () => {
      expect(probabilityReducer(undefined, {})).deep.equal({
        probabilityType: '',
        probabilityOne: '',
        probabilityTwo: '',
        probabilityResult: '',
      });
    });
  });

  describe('to reduce PUT__PROBABILITY_CALCULATOR__RESULT', () => {
    it('should return the correct state', () => {
      expect(probabilityReducer({ }, putProbabilityCalculatorResult(
        'Test probabilityType',
        'Test probabilityOne',
        'Test probabilityTwo',
        'Test probabilityResult',
      ))).deep.equal({
        probabilityType: 'Test probabilityType',
        probabilityOne: 'Test probabilityOne',
        probabilityTwo: 'Test probabilityTwo',
        probabilityResult: 'Test probabilityResult',
      });
    });
  });
});
