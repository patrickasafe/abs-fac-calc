import stringToNumber from './stringToNumber'; // Adjust the import path as necessary

describe('stringToNumber', () => {
  test('converts a valid integer string to a number', () => {
    expect(stringToNumber('123')).toBe(123);
  });

  test('converts a valid floating-point string to a number', () => {
    expect(stringToNumber('123.45')).toBe(123.45);
  });

  test('returns null for a non-numeric string', () => {
    expect(stringToNumber('abc')).toBeNull();
  });

  test('returns null for an empty string', () => {
    expect(stringToNumber('')).toBeNull();
  });

  test('ignores leading and trailing spaces', () => {
    expect(stringToNumber('  123.45  ')).toBe(123.45);
  });

  test('returns null for a string with numbers and letters mixed', () => {
    expect(stringToNumber('123abc')).toBeNull();
  });

  test('handles strings with only a decimal point', () => {
    expect(stringToNumber('.')).toBeNull();
  });

  test('converts a string with a leading decimal point', () => {
    expect(stringToNumber('.123')).toBe(0.123);
  });

  test('converts a string with a trailing decimal point', () => {
    expect(stringToNumber('123.')).toBe(123);
  });

  // Additional edge cases could include:
  // - Strings representing negative numbers
  // - Strings with scientific notation
  // - Strings with non-standard numeric formats (e.g., "1,234.56" or "1 234,56")
});
