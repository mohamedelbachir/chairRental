import React, { useEffect, useState } from "react";
import { Group, Box } from "@mantine/core";
import { ActionIcon, Autocomplete } from "@mantine/core";
import SearchIcon from "./../assets/icons/search.svg?react";
import FilterIcon from "./../assets/icons/filter-icon.svg?react";
import { useMediaQuery } from "@mantine/hooks";
import classes from "./../styles/navbar.module.css";
import NavBarMenu from "./NavBarMenu.component";
import { useLocation } from "react-router-dom";

//type Props = {}

function NavBar() {
  const [canDisplay, setCanDisplay] = useState<
    { link: string; name: string }[]
  >([]);
  const breakpoint = useMediaQuery("(max-width:400px)");
  const location = useLocation();
  const whiteListSearch = [
    { link: "/", name: "home" },
    { link: "/Shop", name: "shop" },
  ];
  useEffect(() => {
    const L = whiteListSearch.filter((l) => {
      return location.pathname === l.link;
    });
    setCanDisplay(L);
  }, [location.pathname]);
  return (
    <>
      <NavBarMenu />
      {canDisplay.length > 0 && (
        <Box className={classes.navBarSearch}>
          <Group
            align="center"
            h={"100%"}
            w={"100%"}
            hiddenFrom="xs"
            gap={0}
            justify="space-between"
          >
            <Autocomplete
              placeholder="Search"
              radius={"xl"}
              w={breakpoint ? "85%" : "90%"}
              leftSection={<SearchIcon />}
            />
            <ActionIcon variant="default" radius={"lg"} size={"lg"}>
              <FilterIcon fill="var(--primary-color)" />
            </ActionIcon>
          </Group>
        </Box>
      )}
    </>
  );
}

export default NavBar;
