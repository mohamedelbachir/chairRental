import React from "react";
import { Link } from "react-router-dom";
import { Group, Flex, Text, Anchor, Button, Menu } from "@mantine/core";
import Logo from "./../assets/icons/LogoFooter.svg";
import Playstore from "./../assets/icons/getOnPlayStore.svg";
import AppStore from "./../assets/icons/getOnAppStore.svg";
import Chevron from "./../assets/icons/Chevron.svg";
import FlagUSA from "./../assets/icons/flagen.svg";
import classes from "./../styles/footer.module.css";

import SocialFooterLink from "./SocialFooterLink.component";
//type Props = {};

export default function Footer() {
  return (
    <>
      <footer className={classes.footer}>
        <div className={`inner ${classes.footerContainer}`}>
          <div className={classes.brand}>
            <Flex direction={"column"} align={"flex-start"}>
              <Group gap={0}>
                <Link to={"/"} className="brandLink">
                  <img src={Logo} alt="brandLogo" />
                </Link>
                <Text size="22px" fw={"bold"}>
                  <span className="brandLabel">ChairRental</span>
                  <i>Express</i>
                </Text>
              </Group>
              <Text c={"gray"}>Follow us on our social pages vamvam</Text>
              <SocialFooterLink />
            </Flex>
          </div>
          <Flex direction={"column"} gap={10}>
            <Text fw={"bold"}>About</Text>
            <Anchor href="#" className={classes.Link}>
              FAQ
            </Anchor>
            <Anchor href="#" className={classes.Link}>
              Tems and Conditions
            </Anchor>
            <Anchor href="#" className={classes.Link}>
              Privacy Policy
            </Anchor>
          </Flex>
          <Flex direction={"column"} gap={10}>
            <Text fw={"bold"}>Working Together</Text>
            <Anchor href="#" className={classes.Link}>
              Create an Account
            </Anchor>
            <Anchor href="#" className={classes.Link}>
              Become a Logistics Services Partner
            </Anchor>
            <Anchor href="#" className={classes.Link}>
              Contact us
            </Anchor>
          </Flex>
          <Flex direction={"column"} gap={18}>
            <Text fw={"bold"} size="16px">
              Get app
            </Text>
            <Button component="a" style={{ background: "black" }} href="#">
              <img src={AppStore} alt="AppStore" />
            </Button>
            <Button component="a" href="#" style={{ background: "black" }}>
              <img src={Playstore} alt="Playstore" />
            </Button>
          </Flex>
        </div>
      </footer>
      <div className="inner">
        <Group justify="space-between" style={{ width: "100%" }} mb={21}>
          <Text size="xl" className={classes.footerBottom}>
            © 2023 Derico.{" "}
          </Text>
          <Menu
            trigger="hover"
            transitionProps={{ exitDuration: 0 }}
            withinPortal
            width={100}
          >
            <Menu.Target>
              <Button
                fw={"normal"}
                size="compact-xl"
                variant="transparent"
                className={classes.footerBottom}
                leftSection={<img src={FlagUSA} alt="usa flags" />}
                rightSection={<img src={Chevron} alt="chevron" />}
              >
                English
              </Button>
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
        </Group>
      </div>
    </>
  );
}
