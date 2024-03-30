import { useState } from 'react';

import ButtonLink from '@/components/links/ButtonLink';

import useOperation from '@/app/calculator/Calculator/customHooks/useOperation';
import useCalculatorState from '@/app/calculator/Calculator/customHooks/useValues';
import NumberInput from '@/app/calculator/Calculator/NumberInput';
import validateNumber from '@/app/calculator/Calculator/validateNumber';

import RadioButtonsList from './CustomRadioButtons/CustomRadioButtonsList';

const Calculator = () => {
  const { labels, operationControl } = useOperation();
  const { updateCalculatorStateWithArray, calculatorState } =
    useCalculatorState(operationControl.operation);

  const [inputsValue, setInputsValue] = useState({
    firstInput: '',
    secondInput: '',
    thirdInput: '',
  });

  const inputsProps = [
    {
      label: labels.firstLabel,
      value: inputsValue.firstInput,
      id: 'firstInput',
    },
    {
      label: labels.secondLabel,
      value: inputsValue.secondInput,
      id: 'secondInput',
    },
    {
      label: labels.thirdLabel,
      value: inputsValue.thirdInput,
      id: 'thirdInput',
    },
  ];

  const handleCalculate = () => {
    // Try to validate and parse all inputs upfront.
    const parsedInputs = [];
    for (let i = 0; i < inputsProps.length; i++) {
      const input = inputsProps[i];
      if (input.value.includes(',')) {
        input.value = input.value.replaceAll('.', ',');
        alert(input.value);
      }
      if (!validateNumber(input.value)) {
        alert(`Verificar valor de ${input.label}`);
        return; // Exit the function early on validation failure.
      }
      // Parse and store the validated and parsed number.
      parsedInputs.push(parseFloat(input.value));
    }

    // Assuming the first three inputs are what you need to update in the calculator state
    // and your state management setup can handle an array of three numbers:
    if (parsedInputs.length >= 3) {
      // Extract the first three items from parsedInputs
      const numbersToUpdate = parsedInputs.slice(0, 3);
      // Update calculator state with the array of numbers
      updateCalculatorStateWithArray(numbersToUpdate);
    } else {
      throw new Error('Not enough inputs to update calculator state.');
    }
  };
  // @ts-expect-error event type error
  const handleInputChange = (e) => {
    setInputsValue((prevstate) => ({
      ...prevstate,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <>
      <RadioButtonsList
        // @ts-expect-error onchange type error
        onChange={operationControl.handleOperation}
        options={[
          { value: 'ABSORBANCE', label: 'Absorbância' },
          { value: 'FACTOR', label: 'Fator' },
        ]}
      />
      {inputsProps.map((props) => (
        <NumberInput
          key={props.id}
          id={props.id}
          label={props.label}
          value={props.value}
          className='appearance-none'
          onChange={handleInputChange}
        />
      ))}
      <ButtonLink
        className='mt-6'
        href='/calculator'
        variant='light'
        onClick={(e) => {
          e.preventDefault(); // Prevent default anchor action
          handleCalculate();
        }}
      >
        Calcular
      </ButtonLink>
      <p>O resultado é: {calculatorState[3]}</p>
    </>
  );
};

export default Calculator;
