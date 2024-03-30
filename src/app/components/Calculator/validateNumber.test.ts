import validateNumber from './validateNumber';

describe('validateNumber', () => {
  // Test for basic number validation
  it('should validate simple numbers correctly', () => {
    expect(validateNumber(123)).toBeTruthy();
    expect(validateNumber(-123)).toBeTruthy();
    expect(validateNumber(12.3)).toBeTruthy();
    expect(validateNumber(-12.3)).toBeTruthy();
    expect(validateNumber('123')).toBeTruthy();
    expect(validateNumber('12.3')).toBeTruthy();
  });

  // Test for integer only validation
  it('should enforce integer-only validation when specified', () => {
    expect(validateNumber(123, { integerOnly: true })).toBeTruthy();
    expect(validateNumber(12.3, { integerOnly: true })).toBeFalsy();
    expect(validateNumber('123', { integerOnly: true })).toBeTruthy();
    expect(validateNumber('12.3', { integerOnly: true })).toBeFalsy();
  });

  // Test handling of null and undefined
  it('should correctly handle null and undefined based on options', () => {
    expect(validateNumber(null, { allowNull: true })).toBeTruthy();
    expect(validateNumber(undefined, { allowUndefined: true })).toBeTruthy();
    expect(validateNumber(null)).toBeFalsy();
    expect(validateNumber(undefined)).toBeFalsy();
  });

  // Test min and max options
  it('should enforce min and max boundaries', () => {
    expect(validateNumber(10, { min: 5 })).toBeTruthy();
    expect(validateNumber(5, { min: 10 })).toBeFalsy();
    expect(validateNumber(10, { max: 15 })).toBeTruthy();
    expect(validateNumber(20, { max: 15 })).toBeFalsy();
  });

  // Test for non-numeric inputs
  it('should reject non-numeric inputs', () => {
    expect(validateNumber('abc')).toBeFalsy();
    expect(validateNumber('123abc')).toBeFalsy();
    expect(validateNumber({})).toBeFalsy();
    expect(validateNumber([])).toBeFalsy();
  });
});
