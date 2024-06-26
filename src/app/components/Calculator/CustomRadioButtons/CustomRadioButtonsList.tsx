import React, { ChangeEventHandler } from 'react';

// Assuming Operation is an enum or a type with specific operation values
import { Operation } from '@/app/components/Calculator/converter';
import CustomLabel from '@/app/components/Calculator/CustomRadioButtons/CustomLabel';
import CustomRadioButtons from '@/app/components/Calculator/CustomRadioButtons/CustomRadioButtons';

interface CustomRadioButtonsProps {
  selectedValue?: Operation;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  options: { value: Operation; label: string }[]; // Add an options prop for dynamic dropdown options
}

const RadioButtonsList: React.FC<CustomRadioButtonsProps> = ({
  selectedValue,
  onChange,
  options,
}) => {
  return (
    <>
      <CustomLabel>Selecione uma operação</CustomLabel>
      <CustomRadioButtons
        options={options}
        value={selectedValue}
        // @ts-expect-error onchange type error
        onChange={onChange}
      />
    </>
  );
};

export default RadioButtonsList;
