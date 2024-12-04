import { useMemo } from "react";

import { IUser } from "@types";
import { formatUserDetails } from "@helpers/formatUserDetails";

import DetailsItem from "../DetailsItem";

interface IDetailsContentProps {
  user: IUser;
}

const DetailsContent: React.FC<IDetailsContentProps> = ({ user }) => {
  const userDetails = useMemo(() => formatUserDetails(user), []);

  return (
    <section className="flex flex-grow flex-col justify-between">
      <div className="mx-auto max-w-4xl rounded-lg pb-5">
        <h2 className="mb-5 text-center text-2xl font-bold md:mb-8 md:text-3xl lg:text-4xl">
          User Details
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 xl:gap-8">
          {userDetails.map(({ title, details }) => (
            <DetailsItem key={title} title={title} details={details} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailsContent;
