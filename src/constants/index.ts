import { IUser, Routes } from "@types";

export const JSONPLACEHOLDER_BASE_URL = import.meta.env
  .VITE_JSONPLACEHOLDER_BASE_URL;

export const ROUTES: Routes = {
  HOME: "/",
  DETAILS: "/user/:userId",
  ERROR: "*",
};

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
