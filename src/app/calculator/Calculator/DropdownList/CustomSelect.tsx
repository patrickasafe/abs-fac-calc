import { forwardRef, SelectHTMLAttributes } from 'react';

import { Operation } from '@/app/calculator/Calculator/converter';

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: Option[];
  selectedValue?: Operation | undefined;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CustomSelect = forwardRef<HTMLSelectElement, CustomSelectProps>(
  ({ options, selectedValue, onChange, ...props }, ref) => {
    const handleSelect = (e) => {
      onChange(e.target.value);
    };

    return (
      <select
        ref={ref}
        id='operationSelector'
        value={selectedValue}
        onChange={handleSelect}
        className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
        aria-label='Selecione uma operação'
        {...props} // Allows for additional props (like `name`, `disabled`, etc.) to be passed to the select element
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  }
);

export default CustomSelect;
