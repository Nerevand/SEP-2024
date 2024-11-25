import React from "react";
import { IDetails, IUserDetails } from "../UserDetails";

const UserDetailsItem: React.FC<IUserDetails> = ({ title, details }) => {
  return (
    <div className="border p-3 shadow-sm sm:p-6">
      <h3 className="mb-2 border-b pb-3 text-xl font-semibold md:mb-4 lg:text-2xl">
        {title}
      </h3>
      <div className="space-y-2 md:space-y-6">
        {details.map(({ label, value }: IDetails) => (
          <div
            className="flex justify-between text-sm md:text-base"
            key={label}
          >
            <span className="mr-5 font-medium">{label}</span>
            <span className="text-right font-normal text-gray-500">
              {value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default UserDetailsItem;
