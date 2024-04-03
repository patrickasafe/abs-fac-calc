import { forwardRef, InputHTMLAttributes } from 'react';

interface CustomLabelProps extends InputHTMLAttributes<HTMLLabelElement> {
  // You can add more custom props here if needed
}

const CustomLabel = forwardRef<HTMLLabelElement, CustomLabelProps>(
  (props, ref) => {
    return (
      <label
        ref={ref}
        className='mb-2 block text-sm font-medium text-gray-800'
        {...props} // Spread props last so they can override the defaults if needed
      >
        {props.children} {/* Render children inside label */}
      </label>
    );
  },
);

export default CustomLabel;
