/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Flex, Text, ActionIcon } from "@mantine/core";

import "swiper/css";
import classes from "./../styles/eventcard.module.css";
import slide1 from "./../assets/slides/slide1.webp";
import slide2 from "./../assets/slides/slide2.webp";
import rightArrow from "./../assets/icons/Right.svg";

import { EventCard } from "../utils/EventType";

const DATA: EventCard[] = [
  { src: slide1, title: "Tent for even" },
  { src: slide2, title: "Chair for wedding" },
  { src: slide2, title: "Hello world" },
];
export function EventProductCard({ src, title }: EventCard) {
  return (
    <Flex direction={"column"}>
      <img src={src} alt={title} className={classes.eventImage} />
      <Text>{title}</Text>
    </Flex>
  );
}

//type Props = {}
export default function EvenProductList() {
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(1);
  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };
  const handleSlideChange = (swiper: any) => {
    const currentSlideNumber = swiper.activeIndex + 1;
    setActiveIndex(() => {
      return currentSlideNumber;
    });
  };

  return (
    <>
      <Swiper
        ref={swiperRef}
        spaceBetween={20}
        slidesPerView={2}
        className={classes.sliderCtn}
        onSlideChange={handleSlideChange}
      >
        {DATA.map((d, i) => (
          <SwiperSlide key={i}>
            <EventProductCard src={d.src} title={d.title} />
          </SwiperSlide>
        ))}
        <ActionIcon
          component="button"
          size="xl"
          variant="white"
          radius={"xl"}
          styles={{
            root: {
              transform: "none",
              display: `${activeIndex === DATA.length - 1 ? "none" : ""}`,
            },
          }}
          className={classes.btr}
          onClick={() => handleNext()}
        >
          <img src={rightArrow} alt="user" />
        </ActionIcon>
        <ActionIcon
          component="button"
          size="xl"
          variant="white"
          radius={"xl"}
          styles={{
            root: {
              transform: "none",
              display: `${activeIndex === 1 ? "none" : ""}`,
            },
          }}
          className={classes.btl}
          onClick={() => handlePrev()}
        >
          <img src={rightArrow} alt="user" />
        </ActionIcon>
      </Swiper>
    </>
  );
}
