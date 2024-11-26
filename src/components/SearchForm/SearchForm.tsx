import React, { ChangeEvent } from "react";

import Input from "@components/ui/Input";
import Button from "@components/ui/Button";

//+@comment: same as pagination. U create it as component that we can reuse, but connect it only with users
// i mean if i need that component on some another page it will not work there(for example for request with some /cars e.t.c)
// Rewrite it and make it independent from slices, states e.t.c. Only using props

interface ISearchFormProps {
  value: string;
  onChange: (prop: string) => void;
  placeholder?: string;
}

const SearchForm: React.FC<ISearchFormProps> = ({
  value,
  onChange,
  placeholder = "Search",
}) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    onChange(event.target.value);
  };

  const handleClearInput = (): void => {
    onChange("");
  };

  return (
    <form className="flex w-full gap-5 sm:max-w-md">
      <Input
        type="text"
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
      <Button type="reset" onClick={handleClearInput}>
        Clear
      </Button>
    </form>
  );
};

export default SearchForm;
