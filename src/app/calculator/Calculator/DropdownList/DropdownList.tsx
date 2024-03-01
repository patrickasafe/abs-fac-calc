import React, { ChangeEventHandler } from 'react';

// Assuming Operation is an enum or a type with specific operation values
import { Operation } from '@/app/calculator/Calculator/converter';
import CustomLabel from '@/app/calculator/Calculator/DropdownList/CustomLabel';
import CustomSelect from '@/app/calculator/Calculator/DropdownList/CustomSelect';

interface DropdownListProps {
  selectedValue?: Operation;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  options: { value: Operation; label: string }[]; // Add an options prop for dynamic dropdown options
}

const DropdownList: React.FC<DropdownListProps> = ({
  selectedValue,
  onChange,
  options,
}) => {
  return (
    <>
      <CustomLabel>Selecione uma operação</CustomLabel>
      <CustomSelect
        selectedValue={selectedValue}
        options={options}
        value={selectedValue}
        onChange={(e) => onChange?.(e)}
      />
    </>
  );
};

export default DropdownList;
