import { forwardRef, InputHTMLAttributes } from 'react';

interface CustomLabelProps extends InputHTMLAttributes<HTMLLabelElement> {
  // You can add more custom props here if needed
}

const CustomLabel = forwardRef<HTMLLabelElement, CustomLabelProps>(
  (props, ref) => {
    return (
      <label
        ref={ref}
        // "htmlFor" should be dynamic or removed if not needed as a static value
        // since it associates the label with an input element by id
        className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
        {...props} // Spread props last so they can override the defaults if needed
      >
        {props.children} {/* Render children inside label */}
      </label>
    );
  }
);

export default CustomLabel;
