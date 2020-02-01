import { expect } from 'chai';
import getValidationContainerClassNames from './validationHelper';

describe('when calling getValidationContainerClassNames', () => {
  describe('with valid and not visited', () => {
    it('should return the correct string', () => {
      expect(getValidationContainerClassNames(false, false)).to.equal('validation-container validation-container-not-visited validation-container-valid');
    });
  });

  describe('with invalid and not visited', () => {
    it('should return the correct string', () => {
      expect(getValidationContainerClassNames(true, true)).to.equal('validation-container validation-container-visited validation-container-invalid');
    });
  });
});
