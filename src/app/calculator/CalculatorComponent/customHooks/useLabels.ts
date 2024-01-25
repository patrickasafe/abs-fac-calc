import { useState } from 'react';

const useLabels = () => {
  const [firstLabel, setFirstLabel] = useState('Absorbância Utilizada');
  const secondLabel = 'Concentração Obtida';
  const thirdLabel = 'Concentração Desejada';

  // const [secondLabel, setSecondLabel] = useState('Concentração Obtida');
  // const [thirdLabel, setThirdLabel] = useState('Concentração Desejada');

  const handleFirstLabel = (value: string) => {
    const operation = ['ABSORBANCE', 'FACTOR'];

    if (value === operation[0]) {
      setFirstLabel('Fator');
    }
    if (value === operation[1]) {
      setFirstLabel('Absorbância');
    }
  };

  const labels = {
    handleFirstLabel,
    firstLabel,
    secondLabel,
    thirdLabel,
  };

  return labels;
};

export default useLabels;
