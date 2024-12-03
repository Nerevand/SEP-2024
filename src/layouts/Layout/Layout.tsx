import { Outlet, useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@hooks/useAppStore";
import { useRouteMatch } from "@hooks/useRouteMatch";
import { ROUTES } from "@constants";
import { selectSearchUser } from "@features/user/userSelectors";
import { setSearchUser } from "@features/user/userSlice";
import Header from "@components/common/Header";
import SearchForm from "@components/SearchForm";
import Button from "@components/ui/Button";

const Layout: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const searchValue = useAppSelector(selectSearchUser);

  const { matchHome, matchDetails, isExcludedRoute } = useRouteMatch();

  const onSearchChange = (searchValue: string) =>
    dispatch(setSearchUser(searchValue));

  const renderHeaderContent = () => {
    if (matchHome) {
      return (
        <SearchForm
          placeholder="Search by name or username"
          value={searchValue}
          onChange={onSearchChange}
        />
      );
    }

    if (matchDetails) {
      return <Button onClick={() => navigate(-1)}>Back</Button>;
    }

    if (isExcludedRoute) {
      return <Button onClick={() => navigate(ROUTES.HOME)}>Home</Button>;
    }

    return null;
  };

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-screen-xl flex-col overflow-hidden px-4 sm:px-6 lg:px-8">
      <Header>{renderHeaderContent()}</Header>
      <main className="flex flex-grow flex-col py-2 sm:py-4 md:py-5">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
