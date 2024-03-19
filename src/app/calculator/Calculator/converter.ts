export type Operation = 'ABSORBANCE' | 'FACTOR';

/**
 * Calculates the result of the expression A * B / C.
 *
 * @param {number} A - The value of A.
 * @param {number} B - The value of B.
 * @param {number} C - The value of C (must be non-).
 * @returns {number} The result of the expression A * B / C.
 * @throws Will throw an error if C is zero.
 */
export function Calculator(A: number, B: number, C: number): number {
  if (C === 0) {
    throw new Error('C must be non-zero values.');
  }

  const result = (A * B) / C;
  return result;
}

interface ConverterProps {
  Operation: Operation; // Assuming Operation can only be one of these values
  A: number;
  B: number;
  C: number;
}

function Converter({ Operation, A, B, C }: ConverterProps): number {
  let result: number;

  switch (Operation) {
    case 'ABSORBANCE':
      result = Calculator(A, B, C);
      break;
    case 'FACTOR':
      result = Calculator(A, C, B);
      break;
    default:
      throw new Error('Invalid Operation');
  }

  return result;
}

export default Converter;
