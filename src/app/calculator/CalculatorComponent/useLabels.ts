import { useState } from 'react';

const useLabels = () => {
  const [firstLabel, setFirstLabel] = useState('Absorbância Utilizada');
  const [secondLabel, setSecondLabel] = useState('Concentração Obtida');
  const [thirdLabel, setThirdLabel] = useState('Concentração Desejada');

  const handleLabels = (value: string) => {
    const labels = ['ABSORBANCE', 'FACTOR'];

    if (value === labels[0]) {
      setFirstLabel('Fator');
    }
    if (value === labels[1]) {
      setFirstLabel('Absorbância');
    }
  };

  return {
    handleLabels,
    firstLabel,
    setFirstLabel,
    secondLabel,
    setSecondLabel,
    thirdLabel,
    setThirdLabel,
  };
};

export default useLabels;
