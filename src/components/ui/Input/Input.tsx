import React, { forwardRef, InputHTMLAttributes } from "react";
import cn from "classnames";

//+@comment: use React.FC. Also for components like this it possible to put refs from parent component.
// for this case u need to wrap component to forwardRef. U can try to create this component with forwardRef

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input: React.FC<IInputProps> = forwardRef<HTMLInputElement, IInputProps>(
  ({ label, className, ...props }, ref) => {
    return (
      <div className="flex w-full">
        {label && <label>{label}</label>}
        <input
          ref={ref}
          className={cn(
            "w-full truncate border-b border-b-gray-200 bg-transparent leading-tight placeholder-gray-500 focus:border-b-black focus:outline-none",
            className,
          )}
          {...props}
        />
      </div>
    );
  },
);

export default Input;
