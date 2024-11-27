export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
  phone: string;
  website: string;
  company: ICompany;
}

interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface IUserDetails {
  title: string;
  details: IDetails[];
}
export interface IDetails {
  label: string;
  value: string;
}

export type Row = { id: string | number } & Record<string, string | number>;
export type Column = { label: string; key: string };
export type TableRowClick = (id: number | string) => void;
