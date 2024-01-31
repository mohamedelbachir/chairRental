import React from "react";
import { CategorieEvent } from "../utils/CategorieEventType";
import { Card, Image, Text } from "@mantine/core";
export type CardEventType = {
  categorie: CategorieEvent;
  eventName: string;
  price: number;
  imgURL: string;
};

function EventCard({ categorie, eventName, price, imgURL }: CardEventType) {
  return (
    <Card w={"32%"} withBorder>
      <Card.Section>
        <Image src={imgURL} height={208} alt={eventName} p={13} radius={20} />
      </Card.Section>
      <Text size="xs">{categorie}</Text>
      <Text>{eventName}</Text>
      <Text>XAF {price}/jour</Text>
    </Card>
  );
}

export default EventCard;
