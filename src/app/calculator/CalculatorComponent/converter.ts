export type Operation = 'ABSORBANCE' | 'FACTOR';
type NonZeroNumber = number & { __nonZeroNumber: true };

/**
 * Calculates the result of the expression A * B / C.
 *
 * @param {NonZeroNumber} A - The value of A.
 * @param {NonZeroNumber} B - The value of B.
 * @param {NonZeroNumber} C - The value of C (must be non-zero).
 * @returns {number} The result of the expression A * B / C.
 * @throws Will throw an error if C is zero.
 */
export function Calculator(
  A: NonZeroNumber,
  B: NonZeroNumber,
  C: NonZeroNumber
): number {
  if (C === 0) {
    throw new Error('C must be non-zero values.');
  }

  const result = (A * B) / C;
  return result;
}

interface ConverterProps {
  Operation: 'ABSORBANCE' | 'FACTOR'; // Assuming Operation can only be one of these values
  A: NonZeroNumber;
  B: NonZeroNumber;
  C: NonZeroNumber;
}

function Converter({ Operation, A, B, C }: ConverterProps): number {
  let result: number;

  switch (Operation) {
    case 'ABSORBANCE':
      result = Calculator(A, B, C);
      break;
    case 'FACTOR':
      result = Calculator(C, B, A);
      break;
    default:
      throw new Error('Invalid Operation');
  }

  return result;
}

export default Converter;
