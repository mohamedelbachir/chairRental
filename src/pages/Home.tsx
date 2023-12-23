import React, { useEffect } from "react";
import { Text } from "@mantine/core";
import classes from "./../styles/home.module.css";

import Form from "../components/Form.component";
import CardList from "../components/CardList.component";
import EventProductList from "../components/EventProductList.component";
import EventCardList from "../components/EventCardList.component";
import Testimonial from "../components/Testimonial.component";
//type Props = {}

function Home() {
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
      <Text size="xl" fw={"bold"} mb={20}>
        Decouvrez des meubles adaptés à vos evenements{" "}
      </Text>
      <EventProductList />
      <Text size="xl" fw={"bold"} my={20}>
        The most ordered
      </Text>
      <EventCardList />
      <Text size="xl" fw={"bold"} my={20}>
        Our customers do the talking for us
      </Text>
      <Testimonial />
    </>
  );
}

export default Home;
