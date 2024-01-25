import { useEffect, useState } from 'react';

import { Operation } from '@/app/calculator/CalculatorComponent/converter';
import useLabels from '@/app/calculator/CalculatorComponent/customHooks/useLabels';

const useOperation = () => {
  const [operation, setOperation] = useState<Operation>('ABSORBANCE');
  const labels = useLabels();

  useEffect(() => {
    labels.handleLabels(operation);
  }, [labels, operation]);

  const handleOperation = (operation: Operation) => {
    setOperation(operation);
  };

  return { operation: { operation, handleOperation }, labels };
};

export default useOperation;
