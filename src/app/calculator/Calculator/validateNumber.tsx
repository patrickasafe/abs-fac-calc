function validateNumber(
  input: string,
  options?: { min?: number; max?: number; allowNull?: boolean }
): boolean {
  // Check if input is allowed to be null
  if (options?.allowNull && input === null) {
    return true;
  }

  // Check if input is a number
  const number = parseFloat(input);
  if (isNaN(number)) {
    return false;
  }

  // Check for minimum value
  if (options?.min !== undefined && number < options.min) {
    return false;
  }

  // Check for maximum value
  if (options?.max !== undefined && number > options.max) {
    return false;
  }

  return true;
}

export default validateNumber;
