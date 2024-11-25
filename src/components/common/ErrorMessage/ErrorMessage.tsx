import { HTMLProps } from "react";
import cn from "classnames";

//+@comment: for components with Props use React.FC not JSX.Element
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
