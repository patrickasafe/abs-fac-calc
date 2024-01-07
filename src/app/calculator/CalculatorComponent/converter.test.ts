import Converter, {
  Calculator,
} from '@/app/calculator/CalculatorComponent/converter';

describe('Calculator', () => {
  test('Calculates A * B / C correctly', () => {
    const result = Calculator(10, 5, 2);
    expect(result).toBe(25);
  });

  test('Throws an error if C is zero', () => {
    expect(() => Calculator(10, 5, 0)).toThrowError(
      'C must be non-zero values.'
    );
  });
});

describe('Converter', () => {
  test('Converts using ABSORBANCE operation', () => {
    const result = Converter({ Operation: 'ABSORBANCE', A: 10, B: 5, C: 2 });
    expect(result).toBe(25);
  });

  test('Converts using FACTOR operation', () => {
    const result = Converter({ Operation: 'FACTOR', A: 10, B: 5, C: 2 });
    expect(result).toBe(1);
  });

  test('Throws an error for invalid operation', () => {
    expect(() =>
      Converter({ Operation: 'INVALID', A: 2, B: 5, C: 10 })
    ).toThrowError('Invalid Operation');
  });
});
