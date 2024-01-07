import { useState } from 'react';

import ButtonLink from '@/components/links/ButtonLink';

import Converter, {
  Operation,
} from '@/app/calculator/CalculatorComponent/converter';
import DropdownList from '@/app/calculator/CalculatorComponent/DropdownList';
import NumberInput from '@/app/calculator/CalculatorComponent/NumberInput';
import useLabels from '@/app/calculator/CalculatorComponent/useLabels';

const CalculatorComponent = () => {
  const labels = useLabels();

  const [operation, setOperation] = useState<Operation>('ABSORBANCE');
  const [result, setResult] = useState<number>(0);

  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  const [thirdValue, setThirdValue] = useState(0);

  const inputFields = [
    {
      label: labels.firstLabel,
      value: firstValue,
      stateUpdater: setFirstValue,
    },
    {
      label: labels.secondLabel,
      value: secondValue,
      stateUpdater: setSecondValue,
    },
    {
      label: labels.thirdLabel,
      value: thirdValue,
      stateUpdater: setThirdValue,
    },
  ];

  const handleCalculate = () => {
    const X = Converter({
      Operation: operation,
      A: firstValue,
      B: secondValue,
      C: thirdValue,
    });
    setResult(X);
  };

  return (
    <>
      <DropdownList
        onChange={(value) => {
          setOperation(value);
        }}
      />
      {inputFields.map((field, index) => (
        <NumberInput
          key={index}
          label={field.label}
          value={field.value}
          className='appearance-none'
          onChange={(value) => {
            field.stateUpdater(value);
          }}
        />
      ))}
      <ButtonLink
        className='mt-6'
        href='/calculator'
        variant='light'
        onClick={handleCalculate}
      >
        Calculate
      </ButtonLink>
      <p>Result is: {result}</p>
    </>
  );
};

export default CalculatorComponent;
