import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Autocomplete, Group, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "../styles/header.module.css";
import Logo from "./../assets/icons/Logoheader.svg";

const links = [
  { link: "/", label: "HOME" },
  { link: "/Shop", label: "SHOP" },
  { link: "/Contact", label: "CONTACT" },
];
function Header() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => (
    <NavLink key={link.label} to={link.link} className={classes.link}>
      {link.label}
    </NavLink>
  ));

  return (
    <header className={classes.header}>
      <div className="inner">
        <Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
          <Link to={"/"} className="brandLink">
            <Group gap={0}>
              <img src={Logo} alt="brandLogo" />
              <h1>
                <span className="brandLabel">ChairRental</span>
                <i>Express</i>
              </h1>
            </Group>
          </Link>
        </Group>
        <Group>
          <Group ml={50} gap={40}>
            {items}
            <Autocomplete
              className={classes.search}
              placeholder="Search"
              visibleFrom="xs"
              radius={"xl"}
            />
          </Group>
        </Group>
      </div>
    </header>
  );
}

export default Header;
