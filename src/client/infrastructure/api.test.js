import axios from 'axios';
import { expect as chaiExpect } from 'chai';

import { postProbabilityCalculation } from './api';

jest.mock('axios');

afterEach(() => {
  jest.resetModules();
  jest.restoreAllMocks();
  jest.clearAllMocks();
});

describe('When calling api', () => {
  const APPLICATION_JSON_HEADERS = { headers: { 'Content-Type': 'application/json' } };

  describe('When calling postSurvey', () => {
    it('should be called with the right arguments', () => {
      // Assign
      const expectedRequestPayload = {
        type: 'TEST TYPE',
        probabilities: [{ rate: 1 }, { rate: 2 }, { rate: 3 }],
      };

      // Act
      postProbabilityCalculation('TEST TYPE', [1, 2, 3]);

      // Assert
      expect(axios.post).toHaveBeenCalledTimes(1);
      chaiExpect(axios.post.mock.calls[0][0]).to.equal('https://localhost:44326/api/ProbabilityCalculation/');
      chaiExpect(axios.post.mock.calls[0][1]).to.deep.equal(expectedRequestPayload);
      chaiExpect(axios.post.mock.calls[0][2]).to.deep.equal(APPLICATION_JSON_HEADERS);
    });
  });
});
