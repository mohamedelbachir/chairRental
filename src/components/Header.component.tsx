import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Autocomplete, Group, Burger, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "../styles/header.module.css";
import Logo from "./../assets/icons/Logoheader.svg?react";

const links = [
  { href: "/", label: "HOME" },
  { href: "/Shop", label: "SHOP" },
  { href: "/Contact", label: "CONTACT" },
];
function Header() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => (
    <NavLink key={link.label} to={link.href} className={classes.linkHeader}>
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
              <Logo height={70} />
              <Text fz={"1.7em"}>
                <span className="brandLabel">ChairRental</span>
                <i>Express</i>
              </Text>
            </Group>
          </Link>
        </Group>
        <Group gap={40} wrap="nowrap">
          {items}
          <Autocomplete
            className={classes.search}
            placeholder="Search"
            visibleFrom="xs"
            radius={"xl"}
          />
        </Group>
      </div>
    </header>
  );
}

export default Header;
