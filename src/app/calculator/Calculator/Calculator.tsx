import ButtonLink from '@/components/links/ButtonLink';

import Converter from '@/app/calculator/Calculator/converter';
import useOperation from '@/app/calculator/Calculator/customHooks/useOperation';
import useCalculatorState from '@/app/calculator/Calculator/customHooks/useValues';
import NumberInput from '@/app/calculator/Calculator/NumberInput';
import stringToNumber from '@/app/calculator/Calculator/stringToNumber';
import validateNumber from '@/app/calculator/Calculator/validateNumber';

import DropdownList from './DropdownList/DropdownList';

const Calculator = () => {
  const { labels, operationControl } = useOperation();
  const { calculatorState, updateCalculatorValue, setResult, result } =
    useCalculatorState();

  const inputFields = [
    { label: labels.firstLabel, value: calculatorState[0], index: 0 },
    { label: labels.secondLabel, value: calculatorState[1], index: 1 },
    { label: labels.thirdLabel, value: calculatorState[2], index: 2 },
  ];

  const handleCalculate = () => {
    const X = Converter({
      Operation: operationControl.operation,
      A: calculatorState[0],
      B: calculatorState[1],
      C: calculatorState[2],
    });
    setResult(X);
  };

  return (
    <>
      <DropdownList
        onChange={(e) => operationControl.handleOperation(e)}
        options={[
          // { value: undefined, label: "Selecione uma opção"},
          { value: 'ABSORBANCE', label: 'Absorbância' },
          { value: 'FACTOR', label: 'Fator' },
        ]}
      />
      {inputFields.map((field, index) => (
        <NumberInput
          key={index}
          label={field.label}
          value={field.value}
          className='appearance-none'
          onChange={(e) => {
            const numberValue = stringToNumber(e);
            if (
              numberValue !== null &&
              validateNumber(numberValue, { allowUndefined: true })
            ) {
              updateCalculatorValue(field.index, numberValue);
            } else {
              // Optionally handle invalid input
            }
          }}
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
        Calculate
      </ButtonLink>
      <p>Result is: {result}</p>
    </>
  );
};

export default Calculator;
