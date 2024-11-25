import { InputHTMLAttributes } from "react";
import cn from "classnames";

//@comment: use React.FC. Also for components like this it possible to put refs from parent component. 
// for this case u need to wrap component to forwardRef. U can try to create this component with forwardRef 

const Input = ({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>): JSX.Element => {
  return (
    <input
      {...props}
      className={cn(
        "w-full truncate border-b border-b-gray-200 bg-transparent leading-tight placeholder-gray-500 focus:border-b-black focus:outline-none",
        className,
      )}
    />
  );
};

export default Input;
