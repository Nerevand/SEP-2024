import { Outlet } from "react-router-dom";

import Header from "@components/common/Header";

const Layout = (): JSX.Element => {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-screen-xl flex-col overflow-hidden px-4 sm:px-6 lg:px-8">
      <Header />
      <main className="flex flex-grow flex-col py-2 sm:py-4 md:py-5">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
