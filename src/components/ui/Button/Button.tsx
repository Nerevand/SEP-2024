import { ButtonHTMLAttributes, ReactNode } from "react";
import cn from "classnames";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  type?: "submit" | "reset" | "button";
}

//@comment: use React.FC. 

const Button = ({
  children,
  className,
  type = "button",
  ...props
}: IButtonProps): JSX.Element => {
  return (
    <button
      type={type}
      className={cn(
        "rounded bg-black px-6 py-2 text-center text-sm font-medium text-white hover:opacity-80 disabled:opacity-20",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
