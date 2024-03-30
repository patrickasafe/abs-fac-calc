import { useState } from 'react';

import Converter, { Operation } from '@/app/components/Calculator/converter';

const useCalculatorState = (operation: Operation) => {
  const [calculatorState, setCalculatorState] = useState([0, 0, 0, 0]);

  // Function to update the first 3 numbers of the calculator state
  const updateCalculatorStateWithArray = (numbersArray: number[]) => {
    // First, check if the input is an array of 3 numbers
    if (Array.isArray(numbersArray) && numbersArray.length === 3) {
      // Use the Converter function with the provided numbers to get a result

      const conversionResult = Converter({
        Operation: operation,
        A: numbersArray[0],
        B: numbersArray[1],
        C: numbersArray[2],
      });

      // Assuming Converter function returns an array of 3 new values to update the state
      // Now, update the first 3 numbers of the calculator state with the conversionResult
      setCalculatorState((prevState) => {
        // It's not clear from your description what exactly the Converter function returns
        // and how you want to update the state with it. Assuming you want to replace the first
        // three numbers with the result of the conversion.
        const newState = [...prevState];
        newState[0] = numbersArray[0]; // Update the first number with the result
        newState[1] = numbersArray[1]; // Update the second number with the result
        newState[2] = numbersArray[2]; // Update the third number with the result
        newState[3] = conversionResult;
        return newState;
      });
    } else {
      throw new Error('Input must be an array of 3 numbers.');
    }
  };

  return {
    calculatorState,
    setCalculatorState,
    updateCalculatorStateWithArray,
  };
};

export default useCalculatorState;
