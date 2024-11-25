import { IUser, IUserDetails } from "@types";

export const formatUserDetails = (user: IUser): IUserDetails[] => {
  const {
    name,
    username,
    email,
    phone,
    website,
    company: { name: companyName },
    address: { street, suite, city, zipcode },
  } = user;

  //+@comment: for cases like that, where u create some blocks u can use some helper and put all logic in that helper.
  // +also do it after all IF's and add memoization
  return [
    {
      title: "Personal Info",
      details: [
        { label: "Name:", value: name },
        { label: "Username:", value: username },
      ],
    },
    {
      title: "Contact Info",
      details: [
        { label: "Email:", value: email },
        { label: "Phone:", value: phone },
      ],
    },
    {
      title: "Work place",
      details: [
        { label: "Company:", value: companyName },
        { label: "Website:", value: website },
      ],
    },
    {
      title: "Address",
      details: [
        {
          label: "Address:",
          value: `${street}, ${suite}, ${city}, ${zipcode}`,
        },
      ],
    },
  ];
};
