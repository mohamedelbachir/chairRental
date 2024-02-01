import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Group, Menu, Button, Box } from "@mantine/core";
import { ActionIcon, Autocomplete } from "@mantine/core";
import { Indicator } from "@mantine/core";
import LangComboBox from "./LangComboBox.component";
import classes from "./../styles/navbar.module.css";
import classeHeader from "./../styles/header.module.css";

import Profile from "./../assets/icons/Profile.svg?react";
import Cart from "./../assets/icons/Cart.svg?react";
import CmFlag from "./../assets/icons/flagcm.svg?react";
import MenuIcon from "./../assets/icons/menu.svg?react";
import SearchIcon from "./../assets/icons/search.svg?react";

//type Props = {}

function NavBar() {
  return (
    <nav className={classes.navbar}>
      <Box className={classes.navcontent} visibleFrom="xs">
        <Menu
          width={200}
          position="bottom-start"
          offset={15}
          arrowPosition="center"
        >
          <Menu.Target>
            <Button
              variant="transparent"
              color="var(--secondary-color)"
              className="defaultBtn"
              size="compact-md"
              fw={"normal"}
              pl={0}
              leftSection={<MenuIcon />}
            >
              All category
            </Button>
          </Menu.Target>
          {/* <Menu.Dropdown>
            <Menu.Label>Application</Menu.Label>
            <Menu.Item>Settings</Menu.Item>
            <Menu.Item>Messages</Menu.Item>
            <Menu.Item>Gallery</Menu.Item>
            <Menu.Item>Search</Menu.Item>

            <Menu.Divider />

            <Menu.Label>Danger zone</Menu.Label>
            <Menu.Item>Transfer my data</Menu.Item>
            <Menu.Item color="red">Delete my account</Menu.Item>
          </Menu.Dropdown> */}
        </Menu>
        <Group justify="space-between">
          <ActionIcon
            component={Link}
            to="#"
            size="xl"
            variant="transparent"
            className={classes.iconMobileHide}
            onClick={(event) => event.preventDefault()}
          >
            <Profile />
          </ActionIcon>
          <Indicator
            size={15}
            offset={10}
            label="8"
            className={classes.iconMobileHide}
          >
            <ActionIcon
              component={Link}
              to="#"
              size="xl"
              variant="transparent"
              onClick={(event) => event.preventDefault()}
            >
              <Cart />
            </ActionIcon>
          </Indicator>
          <NavLink to="/contact" className={classeHeader.linkHeader}>
            <span className={classes.linkLabel}>Help</span>
          </NavLink>
          <LangComboBox />
          <Group>
            Ship to
            <CmFlag />
          </Group>
        </Group>
      </Box>
      <Group align="center" h={"100%"} w={"100%"}>
        <Autocomplete
          placeholder="Search"
          hiddenFrom="xs"
          radius={"xl"}
          w={"100%"}
          leftSection={<SearchIcon />}
          p={"var(--min-padding-space)"}
        />
      </Group>
    </nav>
  );
}

export default NavBar;
