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
