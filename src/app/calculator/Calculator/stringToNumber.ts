function stringToNumber(input: string): number | null {
  const number = parseFloat(input);

  // Check if the parsed value is a valid number
  if (isNaN(number)) {
    return null; // or throw an error, based on your requirements
  }

  return number;
}

// Example usage
// const result = stringToNumber("123.45");
// if (result !== null) {
//   console.log("Converted number:", result);
// } else {
//   console.error("Invalid input. Cannot convert to number.");
// }

export default stringToNumber;
