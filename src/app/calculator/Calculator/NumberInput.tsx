import React, {
  ChangeEventHandler,
  forwardRef,
  InputHTMLAttributes,
} from 'react';

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value?: number; // Make the value prop optional since it's not always provided
  onChange?: ChangeEventHandler<HTMLInputElement>; // Add a type for the onChange prop
}

const NumberInput = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ label, value, onChange, className, ...props }, ref) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = parseFloat(event.target.value);
      if (!isNaN(newValue) && onChange !== undefined) {
        onChange(newValue);
      }
    };

    return (
      <div className='w-72'>
        <div className='relative h-10 w-full min-w-[72px]'>
          <label className="peer-placeholder-shown:text-blue-gray-500 peer-disabled:peer-placeholder-shown:text-blue-gray-500 before:content[' '] after:content[' '] before:border-blue-gray-200 after:border-blue-gray-200 pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:!border-gray-900 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent">
            {label}
          </label>

          <input
            ref={ref}
            type='number'
            value={value || ''}
            onChange={handleChange}
            className={`rounded-md border  p-2 ${className || ''}`}
            {...props}
          />
        </div>
      </div>
    );
  }
);

export default NumberInput;
