import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Flex, Text, ActionIcon, Box } from "@mantine/core";

import "swiper/css";
import classes from "./../styles/eventcard.module.css";
import user from "./../assets/users/customer call.webp";
import rightArrow from "./../assets/icons/Right.svg";
type testimonial = { src: string; msg: string };
const DATA: testimonial[] = [
  {
    src: user,
    msg: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le ",
  },
  {
    src: user,
    msg: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le ",
  },
];
//type Props = {};

function Testimonial() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
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
  const handleSlideChange = (swiper: Sp) => {
    const currentSlideNumber = swiper.activeIndex + 1;
    setActiveIndex((_) => {
      return currentSlideNumber;
    });
  };

  return (
    <>
      <Box
        style={{
          backgroundColor: "var(--content-color)",
          border: "1.5px solid rgba(224, 224, 224, 1)",
          width: `100%`,
          height: "445px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Swiper
          ref={swiperRef}
          spaceBetween={20}
          slidesPerView={1}
          className={classes.sliderProfile}
          onSlideChange={handleSlideChange}
        >
          {DATA.map((d, i) => (
            <SwiperSlide key={i}>
              <Flex justify={"space-around"} align={"center"}>
                <img src={d.src} alt={d.msg} className={classes.userProfile} />
                <Text className={classes.msg}>{d.msg}</Text>
              </Flex>
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
      </Box>
    </>
  );
}

export default Testimonial;
