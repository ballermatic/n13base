import { ComponentProps, forwardRef } from 'react';
import { FieldError } from './form';

interface InputProps {
  label: string;
  type: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input({ label, type = 'text', ...props }, ref) {
  return (
    <div>
      <label>{label}</label>
      <input type={type} ref={ref} {...props} />
      <FieldError name={props.name} />
    </div>
  );
});
