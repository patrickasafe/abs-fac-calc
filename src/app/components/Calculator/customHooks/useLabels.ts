import { Dispatch, SetStateAction, useState } from 'react';

interface LabelOptions {
  [key: string]: string;
}

// A more streamlined `handleLabel` function might not be necessary
// if we adapt its logic directly within the `useLabels` hook.

const useLabels = () => {
  const [firstLabel, setFirstLabel] = useState('Absorbância Utilizada');
  const [secondLabel, setSecondLabel] = useState('Concentação Obtida');
  const [thirdLabel, setThirdLabel] = useState('Concentração Desejada');

  // Enhanced function to update labels based on the provided value and options
  const updateLabel = (
    value: string,
    options: LabelOptions,
    setLabel: Dispatch<SetStateAction<string>>,
  ) => {
    const label = options[value];
    if (label) {
      setLabel(label); // Update the label state, ensuring re-render
    }
  };

  // Optionally, expose a more generic function for external use
  const handleLabel = (
    value: string,
    labelKey: keyof typeof labelsSetters,
    options: LabelOptions,
  ) => {
    const setter = labelsSetters[labelKey];
    if (setter) {
      updateLabel(value, options, setter);
    }
  };

  // Grouping labels and setters for cleaner return structure
  const labels = { firstLabel, secondLabel, thirdLabel };
  const labelsSetters = { setFirstLabel, setSecondLabel, setThirdLabel };

  return { labels, handleLabel };
};

export default useLabels;
