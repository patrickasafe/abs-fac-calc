import stringToNumber from '@/app/calculator/Calculator/stringToNumber';

describe('stringToNumber', () => {
  it('converts a valid string to a number', () => {
    expect(stringToNumber('123')).toBe(123);
    expect(stringToNumber('45.67')).toBe(45.67);
  });

  it('handles strings with leading/trailing whitespace', () => {
    expect(stringToNumber('  123  ')).toBe(123);
    expect(stringToNumber('  45.67  ')).toBe(45.67);
  });

  it('returns null for non-numeric strings', () => {
    expect(stringToNumber('abc')).toBeNull();
    expect(stringToNumber('123abc')).toBeNull();
  });

  it('returns null for empty strings', () => {
    expect(stringToNumber('')).toBeNull();
  });

  it('handles strings representing zero', () => {
    expect(stringToNumber('0')).toBe(0);
    expect(stringToNumber('0.0')).toBe(0);
  });
});
