import React, { ChangeEventHandler } from 'react';

interface DropdownListProps {
  selectedValue?: string; // Make the selectedValue prop optional
  onChange?: (event: ChangeEventHandler<HTMLSelectElement>) => void;
}

const DropdownList: React.FC<DropdownListProps> = ({
  selectedValue,
  onChange,
}) => {
  return (
    <>
      <label
        htmlFor='operation' // Fix: Use htmlFor instead of 'for'
        className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
      >
        Selecione uma operação
      </label>
      <select
        id='operation'
        value={selectedValue}
        onChange={(e) => onChange?.(e)} // Use optional chaining to handle undefined onChange
        className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
      >
        <option value='FACTOR'>Fator</option>
        <option value='ABSORBANCE'>Absorbância</option>
      </select>
    </>
  );
};

export default DropdownList;
