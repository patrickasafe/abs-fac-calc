import React, { forwardRef, InputHTMLAttributes } from 'react';

// Assuming this import path and Operation type are correct
import { Operation } from '@/app/calculator/Calculator/converter';

interface Option {
  value: Operation;
  label: string;
}

interface CustomRadioButtonsSpecificProps {
  options: Option[];
  onChange: (value: Operation) => void; // Callback to update the selected value in the parent component
}

type CustomRadioButtonsProps = CustomRadioButtonsSpecificProps &
  Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>;

const CustomRadioButtons = forwardRef<
  HTMLInputElement,
  CustomRadioButtonsProps
>(({ options, onChange, ...props }, ref) => {
  // Handler to update the selected value
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.id as Operation); // Update the selected value via the parent component's handler
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
            onChange={handleChange} // Update the selected value on change
            className='form-radio cursor-pointer text-blue-600'
            {...props} // Spreads additional props to each input element
          />
          <label htmlFor={option.value} className='ml-2 cursor-pointer'>
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
});

export default CustomRadioButtons;
