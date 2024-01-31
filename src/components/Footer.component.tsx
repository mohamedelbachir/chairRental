import React from "react";
import { Link } from "react-router-dom";
import { Group, Flex, Text, Anchor, Button } from "@mantine/core";
import LangComboBox from "./LangComboBox.component";
import classes from "./../styles/footer.module.css";
import Logo from "./../assets/icons/LogoFooter.svg?react";
import Playstore from "./../assets/icons/getOnPlaystore.svg?react";
import AppStore from "./../assets/icons/getOnAppStore.svg?react";

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
                  <Logo />
                </Link>
                <Text fz={"1.5em"}>
                  <span className="brandLabel">ChairRental</span>
                  <i>Express</i>
                </Text>
              </Group>
              <Text c={"dark"}>Follow us on our social pages vamvam</Text>
              <SocialFooterLink />
            </Flex>
          </div>
          <Flex direction={"column"} gap={10}>
            <Text fw={"bold"}>About</Text>
            <Anchor component={Link} to="/Contact" className={classes.Link}>
              FAQ
            </Anchor>
            <Anchor component={Link} to="#" className={classes.Link}>
              Tems and Conditions
            </Anchor>
            <Anchor component={Link} to="#" className={classes.Link}>
              Privacy Policy
            </Anchor>
          </Flex>
          <Flex direction={"column"} gap={10}>
            <Text fw={"bold"}>Working Together</Text>
            <Anchor component={Link} to="#" className={classes.Link}>
              Create an Account
            </Anchor>
            <Anchor component={Link} to="#" className={classes.Link}>
              Become a Logistics Services Partner
            </Anchor>
            <Anchor component={Link} to="#" className={classes.Link}>
              Contact us
            </Anchor>
          </Flex>
          <Flex direction={"column"} gap={18}>
            <Text fw={"bold"} size="16px">
              Get app
            </Text>
            <Button
              component="a"
              style={{ background: "black" }}
              href="#"
              target="_blank"
            >
              <AppStore />
            </Button>
            <Button
              component="a"
              href="#"
              style={{ background: "black" }}
              target="_blank"
            >
              <Playstore />
            </Button>
          </Flex>
        </div>
      </footer>
      <div className="inner">
        <Group justify="space-between" style={{ width: "100%" }} mb={21}>
          <Text size="xl" className={classes.footerBottom}>
            © 2023 Ecommerce.{" "}
          </Text>
          <LangComboBox />
        </Group>
      </div>
    </>
  );
}
