import React, { useEffect } from "react";
import { Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import classes from "./../styles/home.module.css";

import Form from "../components/Form.component";
import CardList from "../components/CardList.component";
import EventProductList from "../components/EventProductList.component";
import EventCardList from "../components/EventCardList.component";
import Testimonial from "../components/Testimonial.component";
//type Props = {}

function Home() {
  const breakpoint = useMediaQuery("(max-width: 725px)");
  const breakpointI = useMediaQuery("(max-width: 475px)");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  return (
    <>
      <section className={classes.hero}>
        <Form />
      </section>
      <CardList />
      <Text
        size={breakpoint ? "md" : "xl"}
        fw={"bold"}
        mb={breakpointI ? 10 : 20}
      >
        Decouvrez des meubles adaptés à vos evenements{" "}
      </Text>
      <EventProductList />
      <Text
        size={breakpoint ? "md" : "xl"}
        fw={"bold"}
        my={breakpointI ? 10 : 20}
      >
        The most ordered
      </Text>
      <EventCardList />
      <Text
        size={breakpoint ? "md" : "xl"}
        fw={"bold"}
        my={breakpointI ? 10 : 20}
      >
        Our customers do the talking for us
      </Text>
      <Testimonial />
    </>
  );
}

export default Home;
