//+@comment: this API should be in .env file. Because now it is not secure

import { IUser } from "@types";

export const JSONPLACEHOLDER_BASE_URL = import.meta.env
  .VITE_JSONPLACEHOLDER_BASE_URL;

export const INITIAL_USER: IUser = {
  id: 0,
  name: "",
  username: "",
  email: "",
  phone: "",
  website: "",
  company: { name: "", catchPhrase: "", bs: "" },
  address: {
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    geo: {
      lat: "",
      lng: "",
    },
  },
};
