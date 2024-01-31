import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { Breadcrumbs, Box } from "@mantine/core";
import "./../styles/shopLayout.css";
//type Props = {};

export default function ShopLayout() {
  const location = useLocation();
  const { pathname } = window.location;
  const pathBreak = pathname.split("/");
  pathBreak[0] = "/";
  pathBreak.pop();
  const items = [
    { title: "Home", href: "/" },
    { title: "Shop", href: "/Shop" },
    { title: "Detail", href: "/Shop/Detail" },
  ];
  if (!location.pathname.includes("Detail")) {
    items.pop();
  }
  const links = items.map((item, index) => (
    <NavLink
      to={
        !items[index].title.includes("Detail") ? item?.href : location.pathname
      }
      key={index}
      className={"Link "}
      end
    >
      {item?.title}
    </NavLink>
  ));
  return (
    <>
      <Box>
        <Breadcrumbs separator=">" my="20px" className="breakCumpLink">
          {links}
        </Breadcrumbs>
      </Box>
      <Outlet />
    </>
  );
}
