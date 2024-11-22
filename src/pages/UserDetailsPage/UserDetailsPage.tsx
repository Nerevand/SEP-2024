import UserDetails from "@components/UserDetails";

const UserDetailsPage = (): JSX.Element => {
  return (
    <section className="flex flex-grow flex-col justify-between">
      <UserDetails />
    </section>
  );
};

export default UserDetailsPage;
