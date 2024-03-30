function stringToNumber(input: string): number | null {
  // Trim the input to remove leading/trailing spaces
  input = input.trim();

  // Early return for empty strings or if the input has any invalid characters
  if (
    input === '' ||
    !/^[-+]?(\d+|\d+\.\d*|\.\d+)([eE][-+]?\d+)?$/.test(input)
  ) {
    return null;
  }

  const number = parseFloat(input);

  // The regex ensures it's a valid number, so no need to check isNaN again
  return number;
}

export default stringToNumber;
