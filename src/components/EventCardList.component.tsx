import React, { useState } from "react";
import { Anchor, Group, Flex } from "@mantine/core";
import EventCard, { CardEventType } from "./EventCard.component";

import { CategorieEvent } from "../utils/CategorieEventType";
import EventImageI from "../assets/eventProducts/image 15.webp";
import EventImageII from "../assets/eventProducts/image 16.webp";
import EventImageIII from "../assets/eventProducts/image 17.webp";
import EventImageIV from "../assets/eventProducts/image 19.webp";
import EventImageV from "../assets/eventProducts/image 18.webp";

import "../styles/eventCardList.css";
const categories: CategorieEvent[] = ["Chair", "Table", "Tent"];

const datas: CardEventType[] = [
  {
    categorie: "Chair",
    imgURL: EventImageI,
    eventName: "Chair for event",
    price: 500,
  },
  {
    categorie: "Table",
    imgURL: EventImageII,
    eventName: "Table for event",
    price: 500,
  },
  {
    categorie: "Tent",
    imgURL: EventImageIII,
    eventName: "Chair for event",
    price: 500,
  },
  {
    categorie: "Chair",
    imgURL: EventImageIV,
    eventName: "Chair for event",
    price: 500,
  },
  {
    categorie: "Tent",
    imgURL: EventImageV,
    eventName: "Tent for event",
    price: 500,
  },
  {
    categorie: "Chair",
    imgURL: EventImageI,
    eventName: "Chair for event",
    price: 500,
  },
];

//type Props = {}
function EventCardList() {
  const [categorie, setCategorie] = useState("all");
  return (
    <>
      <Group justify="center">
        <Anchor
          href="#"
          className={categorie == "all" ? "fselect" : "" + "filterLink"}
        >
          All
        </Anchor>
        {categories.map((c) => (
          <Anchor
            href={"#" + c}
            key={c}
            className={categorie == c ? "fselect" : "" + "filterLink"}
            onClick={(e) => {
              e.preventDefault();
              setCategorie(c);
            }}
          >
            {c}
          </Anchor>
        ))}
      </Group>
      <Flex justify={"space-between"} wrap={"wrap"} gap={20} mt={40}>
        {datas.map((d, i) => {
          return <EventCard key={i} {...d} />;
        })}
      </Flex>
    </>
  );
}

export default EventCardList;
