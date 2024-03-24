import React, { ChangeEventHandler } from 'react';

// Assuming Operation is an enum or a type with specific operation values
import { Operation } from '@/app/calculator/Calculator/converter';
import CustomLabel from '@/app/calculator/Calculator/DropdownList/CustomLabel';
import CustomRadioButtons from '@/app/calculator/Calculator/DropdownList/CustomSelect';

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
        selectedValue={selectedValue}
        options={options}
        value={selectedValue}
        onChange={onChange}
      />
    </>
  );
};

export default RadioButtonsList;
