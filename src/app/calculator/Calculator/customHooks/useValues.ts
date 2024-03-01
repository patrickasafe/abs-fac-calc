import { useState } from 'react';

const useCalculatorState = () => {
  const [calculatorState, setCalculatorState] = useState([0, 0, 0]);

  const [result, setResult] = useState(0);

  // Function to update individual calculator values
  const updateCalculatorValue = (valueIndex: number, value: number) => {
    setCalculatorState((prevState) => {
      const newState = [...prevState];

      newState[valueIndex] = value;
      return newState;
    });
  };

  return {
    calculatorState,
    setCalculatorState,
    result,
    setResult,
    updateCalculatorValue, // Optional: Added for convenience in updating single values
  };
};

export default useCalculatorState;
