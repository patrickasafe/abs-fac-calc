import React, { forwardRef } from 'react';

interface CustomInputProps {
  id: string;
  label: string;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const NumberInput = forwardRef<HTMLInputElement, CustomInputProps>(
  // eslint-disable-next-line unused-imports/no-unused-vars
  ({ label, value, onChange, className, ...props }, ref) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(event);
    };

    return (
      <>
        <div className='w-125 my-2'>
          <div className='relative h-10 w-full min-w-[72px]'>
            <input
              ref={ref}
              type='text'
              value={value || ''}
              onChange={handleChange}
              placeholder=''
              className='
              rounded-3xl 
              bg-neutral-100 
              shadow-md 
              placeholder:text-center 
              content 
              placeholder-shown:border-secondary-200 
              placeholder-shown:border-t-secondary-200 
              disabled:bg-secondary-50 
              peer 
              h-full 
              w-full 
              border 
              bg-transparent 
              px-3 
              py-2.5 
              outline 
              outline-0 
              transition-all 
              placeholder-shown:border 
              focus:border-2 
              focus:border-t-transparent 
              focus:outline-0 
              disabled:border-0'
              // className='border-primary-200 text-primary-700 placeholder-shown:border-primary-200 '
              {...props}
            />
            <label
              className='
            peer-placeholder-shown:text-secondary-500 
            peer-disabled:peer-placeholder-shown:text-secondary-500 
            pointer-events-none 
            absolute 
            -top-1.5 
            left-0 
            flex 
            h-full 
            w-full 
            select-none 
            !overflow-visible 
            truncate
            text-[11px] 
            font-normal
            leading-tight
            text-secondary-500
            transition-all 
            before:pointer-events-none 
            before:mr-1 
            before:border-box 
            before:h-1.5 
            before:w-2.5 
            after:pointer-events-none 
            after:ml-1
            after:mt-[6.5px] 
            after:box-border 
            after:block 
            after:h-1.5 
            after:w-2.5
            after:flex-grow 
            after:transition-all 
            peer-placeholder-shown:text-sm 
            peer-placeholder-shown:
            peer-placeholder-shown:leading-[3.75] 
            peer-focus:text-[11px] 
            peer-focus:leading-tight 
            peer-focus:text-gray-900 
            peer-disabled:text-transparent 
            peer-disabled:before:border-transparent 
            peer-disabled:after:border-transparent
            '
            >
              {label}
            </label>
          </div>
        </div>
      </>
    );
  },
);

export default NumberInput;
