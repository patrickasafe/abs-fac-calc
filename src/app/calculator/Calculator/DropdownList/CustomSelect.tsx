import React, { ChangeEvent, forwardRef, InputHTMLAttributes } from 'react';

import { Operation } from '@/app/calculator/Calculator/converter';

interface Option {
  value: string;
  label: string;
}

// Introduce a new interface for your component's specific props
interface CustomRadioButtonsSpecificProps {
  options: Option[];
  selectedValue?: Operation;
  onValueChange: (value: Operation) => void; // Renamed to avoid conflict
}

// Combine the two sets of props into one type
type CustomRadioButtonsProps = CustomRadioButtonsSpecificProps &
  Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>;

const CustomRadioButtons = forwardRef<
  HTMLInputElement,
  CustomRadioButtonsProps
>(({ options, selectedValue, onValueChange, ...props }, ref) => {
  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    onValueChange(e.target.value);
  };

  return (
    <div className='w-72'>
      {options.map((option) => (
        <div key={option.value} className='mb-4 flex items-center'>
          <input
            ref={ref}
            id={option.value}
            type='radio'
            name='operation'
            value={option.value}
            checked={selectedValue === option.value}
            onChange={handleRadioChange}
            className='h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600'
            {...props} // Spreads additional props to each input element
          />
          <label htmlFor={option.value} className='ml-2'>
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
});

export default CustomRadioButtons;
