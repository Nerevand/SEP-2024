import { Outlet } from "react-router-dom";

import Footer from "@common/Footer";
import Header from "@common/Header";

import "./style.css";

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
