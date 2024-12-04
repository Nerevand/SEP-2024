import { HTMLProps } from "react";
import cn from "classnames";

const ErrorMessage: React.FC<HTMLProps<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "flex grow flex-col items-center justify-center",
        className,
      )}
      {...props}
    >
      <p>{children}</p>
    </div>
  );
};

export default ErrorMessage;
