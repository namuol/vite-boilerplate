import {describe, expect, it} from 'vitest';

import {double, quadruple, triple} from './main';

describe('Math Functions', () => {
  describe('double', () => {
    it('should double a positive number', () => {
      expect(double(5)).toBe(10);
    });

    it('should double a negative number', () => {
      expect(double(-3)).toBe(-6);
    });

    it('should double zero', () => {
      expect(double(0)).toBe(0);
    });

    it('should double a decimal number', () => {
      expect(double(2.5)).toBe(5);
    });
  });

  describe('triple', () => {
    it('should triple a positive number', () => {
      expect(triple(4)).toBe(12);
    });

    it('should triple a negative number', () => {
      expect(triple(-2)).toBe(-6);
    });

    it('should triple zero', () => {
      expect(triple(0)).toBe(0);
    });

    it('should triple a decimal number', () => {
      expect(triple(1.5)).toBe(4.5);
    });
  });

  describe('quadruple', () => {
    it('should quadruple a positive number', () => {
      expect(quadruple(3)).toBe(12);
    });

    it('should quadruple a negative number', () => {
      expect(quadruple(-1)).toBe(-4);
    });

    it('should quadruple zero', () => {
      expect(quadruple(0)).toBe(0);
    });

    it('should quadruple a decimal number', () => {
      expect(quadruple(0.5)).toBe(2);
    });
  });
});
