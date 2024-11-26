import { useLocation, useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@hooks/useAppStore";
import { selectSearchUser } from "@features/user/userSelectors";
import { setSearchUser } from "@features/user/userSlice";
import Button from "@components/ui/Button";
import SearchForm from "@components/SearchForm";

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const searchValue = useAppSelector(selectSearchUser);

  const onSearchChange = (searchValue: string) =>
    dispatch(setSearchUser(searchValue));

  return (
    <header className="flex w-full justify-end py-6 md:py-8">
      {location.pathname === "/" ? (
        <SearchForm
          placeholder="Search by name or username"
          value={searchValue}
          onChange={onSearchChange}
        />
      ) : (
        <Button onClick={() => navigate(-1)}>Back</Button>
      )}
    </header>
  );
};

export default Header;
