import React, { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  Autocomplete,
  Group,
  Burger,
  ActionIcon,
  Text,
  Drawer,
  Stack,
} from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import classes from "../styles/header.module.css";
import Logo from "./../assets/icons/Logoheader.svg?react";
import Profile from "./../assets/icons/account.svg?react";
import Cart from "./../assets/icons/cartOutline.svg?react";

const links = [
  { href: "/", label: "HOME" },
  { href: "/Shop", label: "SHOP" },
  { href: "/Contact", label: "CONTACT" },
];
function Header() {
  const [opened, { toggle, close }] = useDisclosure(false);

  const items = links.map((link) => (
    <NavLink key={link.label} to={link.href} className={classes.linkHeader}>
      {link.label}
    </NavLink>
  ));
  const breakpointI = useMediaQuery("(min-width: 515px)");
  const breakpointII = useMediaQuery("(max-width: 350px)");
  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title={
          <Link to={"/"} className="brandLink">
            <Group gap={0}>
              <Logo height={breakpointI ? 70 : 40} />
              <Text fz={breakpointI ? "1.7em" : "1.3em"}>
                <span className="brandLabel">ChairRental</span>
                <i>Express</i>
              </Text>
            </Group>
          </Link>
        }
      >
        <Stack>
          {items}
          <Autocomplete
            className={classes.search}
            placeholder="Search"
            visibleFrom="xs"
            radius={"xl"}
          />
        </Stack>
      </Drawer>
      <header className={classes.header}>
        <div className="inner">
          <Group gap={breakpointII ? 0 : undefined}>
            <Burger
              opened={opened}
              onClick={toggle}
              size="sm"
              className={classes.navDrawerMobile}
            />
            <Link to={"/"} className="brandLink">
              <Group gap={0}>
                <Logo
                  height={70}
                  style={{ display: breakpointI ? "block" : "none" }}
                />
                <Text fz={breakpointI ? "1.7em" : "1.3em"}>
                  <span className="brandLabel">ChairRental</span>
                  <i>Express</i>
                </Text>
              </Group>
            </Link>
          </Group>
          <Group className={classes.navLinkMobile} wrap="nowrap">
            <ActionIcon
              component={Link}
              to="#"
              size="xl"
              variant="transparent"
              onClick={(event) => event.preventDefault()}
            >
              <Cart />
            </ActionIcon>
            <ActionIcon
              component={Link}
              to="#"
              size="xl"
              variant="transparent"
              onClick={(event) => event.preventDefault()}
            >
              <Profile />
            </ActionIcon>
          </Group>
          <Group gap={40} wrap="nowrap" className={classes.navDesktop}>
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
    </>
  );
}

export default Header;
