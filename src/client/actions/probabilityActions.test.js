import { expect } from 'chai';

import {
  PUT__PROBABILITY_CALCULATOR__NEXT,
  PUT__PROBABILITY_CALCULATOR__RESULT,
  probabilityCalculatorNextAction,
  putProbabilityCalculatorResult,
} from './probabilityActions';

describe('when calling probabilityCalculatorNextAction', () => {
  it('should return the correct action type and value', () => {
    expect(probabilityCalculatorNextAction('Either', 0, 1))
      .to.deep.equal({
        type: PUT__PROBABILITY_CALCULATOR__NEXT,
        data: {
          probabilityType: 'Either',
          probabilityOne: 0,
          probabilityTwo: 1,
        },
      });
  });
});

describe('when calling probabilityCalculatorNextAction', () => {
  it('should return the correct action type and value', () => {
    expect(putProbabilityCalculatorResult('Either', 0, 1, 0.5))
      .to.deep.equal({
        type: PUT__PROBABILITY_CALCULATOR__RESULT,
        data: {
          probabilityType: 'Either',
          probabilityOne: 0,
          probabilityTwo: 1,
          probabilityResult: 0.5,
        },
      });
  });
});
