import validateNumber from './validateNumber'; // Adjust the import path as necessary

describe('validateNumber', () => {
  test('should return false for non-numeric strings', () => {
    expect(validateNumber('abc')).toBeFalsy();
  });

  test('should return true for numeric strings within range', () => {
    expect(validateNumber('10', { min: 1, max: 20 })).toBeTruthy();
  });

  test('should return false for numeric strings outside range', () => {
    expect(validateNumber('30', { min: 1, max: 20 })).toBeFalsy();
  });

  test('should return true for numbers within range', () => {
    expect(validateNumber(15, { min: 10, max: 20 })).toBeTruthy();
  });

  test('should return false for numbers outside range', () => {
    expect(validateNumber(25, { min: 10, max: 20 })).toBeFalsy();
  });

  test('should handle null values correctly', () => {
    expect(validateNumber(null)).toBeFalsy();
    expect(validateNumber(null, { allowNull: true })).toBeTruthy();
  });

  test('should handle undefined values correctly', () => {
    expect(validateNumber(undefined)).toBeFalsy();
    expect(validateNumber(undefined, { allowUndefined: true })).toBeTruthy();
  });

  test('should return false for non-integer numbers when integerOnly is true', () => {
    expect(validateNumber(10.5, { integerOnly: true })).toBeFalsy();
    expect(validateNumber('10.5', { integerOnly: true })).toBeFalsy();
  });

  test('should return true for integers when integerOnly is true', () => {
    expect(validateNumber(10, { integerOnly: true })).toBeTruthy();
    expect(validateNumber('10', { integerOnly: true })).toBeTruthy();
  });

  test('should return false for objects, arrays, and boolean values', () => {
    expect(validateNumber({}, { allowNull: true })).toBeFalsy();
    expect(validateNumber([], { allowNull: true })).toBeFalsy();
    expect(validateNumber(true, { allowNull: true })).toBeFalsy();
  });

  test('should alert with a specific message for NaN values', () => {
    // Mocking global.alert function
    global.alert = jest.fn();

    validateNumber('abc');
    expect(global.alert).toHaveBeenCalledWith(
      'Por favor, insira um número válido',
    );
  });
});
