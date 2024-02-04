import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { CategorieEvent } from "../utils/CategorieEventType";
import { Card, Image, Text, Center, Button, Group } from "@mantine/core";
import RightIcon from "./../assets/icons/Right.svg?react";
import classes from "./../styles/card.module.css";

import "swiper/css";
export type CardEventType = {
  categorie: CategorieEvent;
  eventName: string;
  price: number;
  imgURL: string;
};

function EventCard({ categorie, eventName, price, imgURL }: CardEventType) {
  return (
    <Card className={classes["card-element"]} withBorder>
      <Card.Section>
        <Image
          loading="lazy"
          src={imgURL}
          height={208}
          alt={eventName}
          p={13}
          radius={20}
        />
      </Card.Section>
      <Text size="xs">{categorie}</Text>
      <Text>{eventName}</Text>
      <Text>XAF {price}/jour</Text>
    </Card>
  );
}
export default EventCard;
type EventCardBoxType = {
  categorie: CategorieEvent;
  datas: CardEventType[];
};
export function EventCardBox({ categorie, datas }: EventCardBoxType) {
  const [data, setData] = useState<CardEventType[]>([]);
  useEffect(() => {
    const list: CardEventType[] = datas.filter((d) => {
      return d.categorie === categorie;
    });
    setData(list);
  }, [datas]);

  return (
    <>
      {data.length > 0 ? (
        <Card
          title={categorie as string}
          my={10}
          styles={{
            root: {
              paddingLeft: 0,
              paddingRight: 0,
              paddingBottom: 0,
            },
          }}
        >
          <Card.Section withBorder>
            <Text size="md" pl={30} py={10} fw={"bold"}>
              {categorie}
            </Text>
          </Card.Section>
          <Swiper
            spaceBetween={0}
            slidesPerView={2}
            style={{
              width: "100%",
              borderBottom: "1px solid var(--mantine-color-gray-3)",
            }}
            //modules={[Autoplay]}
          >
            {data.map((d, i) => (
              <SwiperSlide
                key={i}
                style={{
                  borderRight: "1px solid var(--mantine-color-gray-3)",
                }}
              >
                <Card radius={0}>
                  <Card.Section>
                    <Image
                      loading="lazy"
                      src={d.imgURL}
                      height={150}
                      alt={d.eventName}
                      p={5}
                      fit="cover"
                    />
                  </Card.Section>
                  <Center>
                    <Text>{d.eventName}</Text>
                  </Center>
                  <Center>
                    <Text c={"gray"}>XAF {d.price}/jour</Text>
                  </Center>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
          <Group>
            <Button
              variant="subtle"
              size="md"
              rightSection={
                <RightIcon fill="var(--primary-color)" width={10} />
              }
            >
              Voir Plus
            </Button>
          </Group>
        </Card>
      ) : (
        <></>
      )}
    </>
  );
}
