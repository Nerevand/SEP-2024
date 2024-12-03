import { ReactNode } from "react";

interface IHeaderProps {
  children: ReactNode;
}

const Header: React.FC<IHeaderProps> = ({ children }) => {
  return (
    <header className="flex w-full justify-end py-6 md:py-8">{children}</header>
  );
};

export default Header;
