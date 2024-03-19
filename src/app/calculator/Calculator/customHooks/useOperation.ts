import { useEffect, useState } from 'react';

import { Operation } from '@/app/calculator/Calculator/converter';
import useLabels from '@/app/calculator/Calculator/customHooks/useLabels';

const useOperation = () => {
  const [operation, setOperation] = useState<Operation>('ABSORBANCE');
  const { labels, handleLabel } = useLabels();

  useEffect(() => {
    const updateFirstLabel = (operation: Operation) => {
      const labelMap: { [key: string]: string } = {
        ABSORBANCE: 'Absorbância utilizada',
        FACTOR: 'Fator utilizado',
      };

      // Adjusted to match the expected parameters based on the suggested `useLabels` adjustments
      handleLabel(operation, 'setFirstLabel', labelMap);
    };

    updateFirstLabel(operation);
  }, [operation, handleLabel]); // `labels` dependency is replaced with `handleLabel`

  const handleOperation = (newOperation: Operation) => {
    setOperation(newOperation);
  };

  return { operationControl: { operation, handleOperation }, labels };
};

export default useOperation;
