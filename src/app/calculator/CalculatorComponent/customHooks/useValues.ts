import { useState } from 'react';

const useValues = () => {
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  const [thirdValue, setThirdValue] = useState(0);

  const values = {
    firstValue,
    secondValue,
    thirdValue,
    setFirstValue,
    setSecondValue,
    setThirdValue,
  };

  return values;
};

export default useValues;
