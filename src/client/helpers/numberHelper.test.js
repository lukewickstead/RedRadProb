import { expect } from 'chai';

import isNumber from './numberHelper';

describe('when determining if an input is a valid number with precisions', () => {
  describe('with empty string', () => {
    it('should return true', () => {
      const result = isNumber('');
      expect(result).to.equal(false);
    });
  });

  describe('with 0', () => {
    it('should return true', () => {
      const result = isNumber('0');
      expect(result).to.equal(true);
    });
  });

  describe('with 0.5', () => {
    it('should return true', () => {
      const result = isNumber('0.5');
      expect(result).to.equal(true);
    });
  });

  describe('with 1', () => {
    it('should return true', () => {
      const result = isNumber('1');
      expect(result).to.equal(true);
    });
  });

  describe('with 0.0.1', () => {
    it('should return false', () => {
      const result = isNumber('0.0.1');
      expect(result).to.equal(false);
    });
  });
});
