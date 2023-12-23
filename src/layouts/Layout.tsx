import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header.component";
import NavBar from "../components/NavBar.component";
import Footer from "../components/Footer.component";
import classes from "./../styles/layout.module.css";
import "./../styles/common.css";
//type Props = {};
function Layout() {
  return (
    <div>
      <Header />
      <NavBar />
      <main className={classes.container}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
