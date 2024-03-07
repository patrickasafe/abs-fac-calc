function validateNumber(
  input: string | number | null | undefined,
  options?: {
    min?: number;
    max?: number;
    allowNull?: boolean;
    allowUndefined?: boolean;
    integerOnly?: boolean;
  }
): boolean {
  // Explicitly check for null and undefined
  if (input === null && options?.allowNull) return true;
  if (input === undefined && options?.allowUndefined) return true;

  // Reject non-numeric input types immediately
  if (typeof input !== 'string' && typeof input !== 'number') {
    return false;
  }

  // Convert to number and check for NaN
  const number = Number(input);
  if (isNaN(number)) return false;

  // Additional check for integer-only validation
  if (options?.integerOnly && !Number.isInteger(number)) return false;

  // Check for minimum and maximum values
  if (options?.min !== undefined && number < options.min) return false;
  if (options?.max !== undefined && number > options.max) return false;

  return true;
}

export default validateNumber;
