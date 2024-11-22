import { useLocation, useNavigate } from "react-router-dom";

import Button from "@components/ui/Button";
import SearchForm from "@components/SearchForm";

const Header = (): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <header className="flex w-full justify-end py-6 md:py-8">
      {location.pathname === "/" ? (
        <SearchForm />
      ) : (
        <Button onClick={() => navigate("/")}>Back</Button>
      )}
    </header>
  );
};

export default Header;
