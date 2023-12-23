import React from "react";
import { Group, Menu, Button } from "@mantine/core";
import { ActionIcon } from "@mantine/core";
import { Indicator } from "@mantine/core";
import classes from "./../styles/navbar.module.css";

import Profile from "./../assets/icons/Profile.svg";
import Cart from "./../assets/icons/Cart.svg";
import Chevron from "./../assets/icons/Chevron.svg";
import CmFlag from "./../assets/icons/flagcm.svg";
import MenuIcon from "./../assets/icons/menu.svg";

//type Props = {}
function NavBar() {
  return (
    <nav className={classes.navbar}>
      <div className={classes.navcontent}>
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
              leftSection={<img src={MenuIcon} alt="menu" />}
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
            component="a"
            href="#"
            size="xl"
            variant="transparent"
            styles={{
              root: {
                transform: "none",
              },
            }}
            onClick={(event) => event.preventDefault()}
          >
            <img src={Profile} alt="user" />
          </ActionIcon>
          <Indicator processing color="red" size={15} offset={10} label="8">
            <ActionIcon
              component="a"
              href="#"
              size="xl"
              variant="transparent"
              styles={{
                root: {
                  transform: "none",
                },
              }}
              onClick={(event) => event.preventDefault()}
            >
              <img src={Cart} alt="card" />
            </ActionIcon>
          </Indicator>
          <Menu
            trigger="hover"
            transitionProps={{ exitDuration: 0 }}
            withinPortal
            width={100}
          >
            <Menu.Target>
              <a
                href="/help"
                className={classes.link}
                onClick={(event) => event.preventDefault()}
              >
                <Group gap={"sm"}>
                  <span className={classes.linkLabel}>Help</span>
                  <img src={Chevron} alt="" />
                </Group>
              </a>
            </Menu.Target>
            {/* <Menu.Dropdown>
              <a
                href="#"
                className={classes.link}
                onClick={(event) => event.preventDefault()}
              >
                Help
              </a>
            </Menu.Dropdown> */}
          </Menu>
          <Menu
            trigger="hover"
            transitionProps={{ exitDuration: 0 }}
            withinPortal
            width={100}
          >
            <Menu.Target>
              <a
                href="/help"
                className={classes.link}
                onClick={(event) => event.preventDefault()}
              >
                <Group gap={"sm"}>
                  <span className={classes.linkLabel}>English</span>
                  <img src={Chevron} alt="" />
                </Group>
              </a>
            </Menu.Target>

            {/* <Menu.Dropdown>
              <a
                href="#"
                className={classes.link}
                onClick={(event) => event.preventDefault()}
              >
                Help
              </a>
            </Menu.Dropdown> */}
          </Menu>
          <Group>
            Ship to
            <img src={CmFlag} alt="cmFlags" />
          </Group>
        </Group>
      </div>
    </nav>
  );
}

export default NavBar;
