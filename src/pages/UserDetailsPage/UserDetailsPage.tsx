//@comment: u don't need to create it inside components folder.It is detailed page and should be here
import UserDetails from "@components/UserDetails";

const UserDetailsPage: React.FC = () => {
  return (
    <section className="flex flex-grow flex-col justify-between">
      <UserDetails />
    </section>
  );
};

export default UserDetailsPage;
