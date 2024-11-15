import { Outlet } from "react-router-dom";

import Footer from "@components/Footer/Footer";
import Header from "@components/Header/Header";

import "./Layout.css";

const Layout = () => {
  return (
    <div className="container">
      <Header />
      <main style={{ gridArea: "main" }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
