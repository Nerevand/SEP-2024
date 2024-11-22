import { useState } from "react";

import { useAppDispatch, useAppSelector } from "@hooks/useAppStore";
import { selectSearchUser } from "@features/user/userSelectors";
import { setSearchUser } from "@features/user/userSlice";
import Button from "@components/ui/Button";
import Input from "@components/ui/Input";

const SearchForm = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const searchInput = useAppSelector(selectSearchUser);

  const [inputValue, setInputValue] = useState<string>(searchInput);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setInputValue(event.target.value);
    dispatch(setSearchUser(event.target.value));
  };

  const handleClearInput = (): void => {
    setInputValue("");
    dispatch(setSearchUser(""));
  };

  return (
    <form className="flex w-full gap-5 sm:max-w-md">
      <Input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search by name or username"
      />
      <Button type="reset" onClick={handleClearInput}>
        Clear
      </Button>
    </form>
  );
};

export default SearchForm;
