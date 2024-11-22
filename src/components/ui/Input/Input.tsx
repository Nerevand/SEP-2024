import { InputHTMLAttributes } from "react";
import cn from "classnames";

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
