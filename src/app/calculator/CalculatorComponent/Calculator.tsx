import { useState } from 'react';

import ButtonLink from '@/components/links/ButtonLink';

import Converter from '@/app/calculator/CalculatorComponent/converter';
import useOperation from '@/app/calculator/CalculatorComponent/customHooks/useOperation';
import useValues from '@/app/calculator/CalculatorComponent/customHooks/useValues';
import DropdownList from '@/app/calculator/CalculatorComponent/DropdownList';
import NumberInput from '@/app/calculator/CalculatorComponent/NumberInput';

const CalculatorComponent = () => {
  const { labels, operation } = useOperation();
  const values = useValues();

  const [result, setResult] = useState<number>(0);

  const inputFields = [
    {
      label: labels.firstLabel,
      value: values.firstValue,
      stateUpdater: values.setFirstValue,
    },
    {
      label: labels.secondLabel,
      value: values.secondValue,
      stateUpdater: values.setSecondValue,
    },
    {
      label: labels.thirdLabel,
      value: values.thirdValue,
      stateUpdater: values.setThirdValue,
    },
  ];

  const handleCalculate = () => {
    const X = Converter({
      Operation: operation.operation,
      A: values.firstValue,
      B: values.secondValue,
      C: values.thirdValue,
    });
    setResult(X);
  };

  return (
    <>
      <DropdownList onChange={operation.handleOperation} />
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
