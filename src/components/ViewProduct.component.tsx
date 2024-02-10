/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useLayoutEffect, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Box,
  Flex,
  Group,
  MantineStyleProp,
  Image,
  Text,
  Rating,
  lighten,
  Center,
  Table,
  Tabs,
  Button,
  NumberInput,
  ActionIcon,
} from "@mantine/core";
import PhoneImage from "./../assets/products/0fde3cb34a30e1c40080fa607437adb64caa3545.png";
import AssetI from "./../assets/products/01ad73c0a2d288ce5bd52ddfac2945120df5102b.png";
import AssetII from "./../assets/products/1cff38a3fc45d6416700a92128145a0a7a02d791.png";
import ShoppingIcon from "./../assets/icons/shopping_basket.svg?react";
import Cmflag from "./../assets/icons/flagcm.svg?react";
import VerifiedIcon from "./../assets/icons/verified_user.svg?react";
import LeftArrow from "./../assets/icons/right-icon.svg?react";
import RightArrow from "./../assets/icons/right-icon.svg?react";

import classes from "./../styles/view-product.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { cardProductType } from "../utils/cardProductType";
import { useMediaQuery } from "@mantine/hooks";
//type Props = {};

import "swiper/css";
const boxInterStyle: MantineStyleProp = {
  border: "1px solid #DEE2E7",
  borderRadius: "6px",
};

type previewProps = {
  data: cardProductType | null;
};

export function PreviewImage({ data }: previewProps) {
  const navigate = useNavigate();
  const imgURLs = data ? data.imgURLs : [PhoneImage, AssetI, AssetII];
  const [slideIndex, setSlideIndex] = useState(0);
  const breakpointIII = useMediaQuery("(max-width:530px)");

  useLayoutEffect(() => {
    showSlides(slideIndex);
  }, []);

  const swiperRef = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setActiveIndex] = useState(1);
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
    const currentSlideNumber = swiper.activeIndex;
    setSlideIndex(currentSlideNumber);
    setActiveIndex(() => {
      return currentSlideNumber;
    });
  };
  // Thumbnail image controls
  function currentSlide(n: number) {
    setSlideIndex(n);
    showSlides(slideIndex);
  }

  function showSlides(n: number) {
    if (n > imgURLs.length) {
      setSlideIndex(0);
    }
    if (n < 0) {
      setSlideIndex(imgURLs.length - 1);
    }
    if (swiperRef.current) {
      //swiperRef.current.swiper.slideTo(2);
    }
  }

  useEffect(() => {
    swiperRef.current.swiper.slideTo(slideIndex);
  }, [slideIndex]);

  return (
    <>
      <Flex
        className={classes["product-preview"]}
        direction={"column"}
        gap={26}
      >
        <Box
          w={"100%"}
          style={breakpointIII ? undefined : boxInterStyle}
          className={classes["product-preview-img-ctn"]}
        >
          <Swiper
            ref={swiperRef}
            spaceBetween={0}
            onSlideChange={handleSlideChange}
            className={classes["product-preview-list"]}
            //modules={[Autoplay]}
          >
            {imgURLs.map((d, i) => (
              <SwiperSlide key={i}>
                <Image
                  loading="lazy"
                  src={d}
                  w={"100%"}
                  h={"100%"}
                  alt={"Image Preview"}
                  fit="contain"
                  //mx={"auto"}
                />
              </SwiperSlide>
            ))}
            {breakpointIII && (
              <Box>
                <ActionIcon
                  component="button"
                  size="md"
                  variant="white"
                  radius={"lg"}
                  className={classes.btnBack}
                  onClick={() => navigate(-1)}
                >
                  <RightArrow width={13} />
                </ActionIcon>
                <ActionIcon.Group className={classes["btn-wrapper"]}>
                  <ActionIcon
                    component="button"
                    size="md"
                    variant="white"
                    radius={"xl"}
                    className={classes.btr}
                    onClick={() => handlePrev()}
                  >
                    <RightArrow width={13} />
                  </ActionIcon>
                  <ActionIcon
                    component="button"
                    size="md"
                    variant="white"
                    radius={"xl"}
                    className={classes.btl}
                    onClick={() => handleNext()}
                  >
                    <LeftArrow width={13} />
                  </ActionIcon>
                </ActionIcon.Group>
              </Box>
            )}
          </Swiper>
        </Box>
        <Group
          align="center"
          justify="center"
          gap={9}
          className={classes["thumbmails-ctn"]}
          wrap="nowrap"
          w={"100%"}
        >
          {imgURLs.map((src, index) => (
            <Box
              h={47}
              style={{
                ...boxInterStyle,
                borderColor: `${
                  slideIndex === index ? "var(--primary-color)" : "#DEE2E7"
                }`,
              }}
              className={classes.thumb}
              onClick={() => currentSlide(index)}
              p={5}
              key={index}
            >
              <Image
                loading="lazy"
                src={src}
                w={"100%"}
                h={"100%"}
                alt={"Image Preview"}
                fit="contain"
              />
            </Box>
          ))}
        </Group>
      </Flex>
    </>
  );
}
type PropsDetailsProduct = {
  data: cardProductType | null;
};
export function DetailProduct({ data }: PropsDetailsProduct) {
  const breakpoint = useMediaQuery("(max-width:530px)");

  const dataTable = [
    { label: "Price", value: "Negotiable" },
    { label: "Type", value: "Classic shoe" },
    { label: "Classic", value: "Negotiable" },
    { label: "Material", value: "Plastic material" },
    { label: "Design", value: "Modern nice" },
    {
      label: "Customization",
      value: "Customized logo and design custom packages",
    },
    { label: "Protection", value: "Refund Policy" },
    { label: "Warranty", value: "2 years full warranty " },
  ];
  return (
    <Flex direction={"column"} gap={12} className={classes["product-info"]}>
      <Text className={classes["product-name"]} fw={"bold"}>
        {data
          ? data.name
          : "Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle"}
      </Text>
      <Group gap={5}>
        <Rating value={data ? data.star : 4} fractions={2} readOnly />
        <Text c={"orange"}>{data ? data.star : 4}</Text>
        <Box
          w={6}
          h={6}
          style={{ backgroundColor: "#DEE2E7", borderRadius: "50%" }}
        ></Box>
        <ShoppingIcon />
        <Text c={"gray"}>{data ? data.orderNumber : 134} Orders</Text>
      </Group>
      <Box p={breakpoint ? 10 : 20} bg={lighten("#FF9017", 0.7)}>
        <Center>
          <Text fw={"bold"} size={breakpoint ? "md" : "1.3em"} lts={1}>
            XAF {data ? data.price : 5000}/Jour
          </Text>
        </Center>
      </Box>
      {breakpoint && (
        <>
          <Text size="sm" c={"gray"}>
            {data?.description}
          </Text>
          <Flex direction={"column"} gap={5}>
            <Text>Quantity</Text>
            <Button.Group w={"100%"}>
              <Button variant="default" w={"35%"}>
                <Text size="lg" fw={"bold"}>
                  -
                </Text>
              </Button>
              <NumberInput
                defaultValue={1}
                radius={"xs"}
                hideControls
                w={"30%"}
                ta={"center"}
                styles={{
                  input: {
                    textAlign: "center",
                  },
                }}
              />
              <Button variant="default" w={"35%"}>
                <Text size="lg" fw={"bold"} c="var(--primary-color)">
                  +
                </Text>
              </Button>
            </Button.Group>
            <Text>Number of Days</Text>
            <Button.Group w={"100%"}>
              <Button variant="default" w={"35%"}>
                <Text size="lg" fw={"bold"}>
                  -
                </Text>
              </Button>
              <NumberInput
                defaultValue={1}
                radius={"xs"}
                hideControls
                w={"30%"}
                styles={{
                  input: {
                    textAlign: "center",
                  },
                }}
              />
              <Button variant="default" w={"35%"}>
                <Text size="lg" fw={"bold"} c="var(--primary-color)">
                  +
                </Text>
              </Button>
            </Button.Group>
            <Button
              type="submit"
              w={"100%"}
              display={"block"}
              radius={"lg"}
              mt="7"
              fz={"lg"}
            >
              Add to cart
            </Button>
          </Flex>
        </>
      )}
      <Table>
        <Table.Tbody>
          {dataTable.map((d, i) => (
            <Table.Tr
              key={d.label}
              styles={{
                tr: {
                  borderWidth: `${i % 3 === 0 ? "1" : "0"}`,
                },
              }}
            >
              <Table.Td c={"#8B96A5"} style={{ whiteSpace: "nowrap" }}>
                {d.label} :{" "}
              </Table.Td>
              <Table.Td c={"#505050"}>{d.value}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Flex>
  );
}

export function QuantityProduct() {
  const breakpoint = useMediaQuery("(max-width:800px)");
  return (
    <Flex
      className={classes["wrapper-ctn"] + " " + classes["product-quantity"]}
      direction={"column"}
      gap={5}
    >
      <Group wrap="nowrap">
        <Cmflag />
        <Text c={"#8B96A5"} size={breakpoint ? "sm" : undefined}>
          Cameroon, Douala
        </Text>
      </Group>
      <Group wrap="nowrap">
        <VerifiedIcon />
        <Text c={"#8B96A5"} size={breakpoint ? "sm" : undefined}>
          Cameroon shipping
        </Text>
      </Group>
      <Text>Quantity</Text>
      <Button.Group w={"100%"}>
        <Button variant="default" w={"35%"}>
          <Text size="lg" fw={"bold"}>
            -
          </Text>
        </Button>
        <NumberInput
          defaultValue={1}
          radius={"xs"}
          hideControls
          w={"30%"}
          ta={"center"}
          styles={{
            input: {
              textAlign: "center",
            },
          }}
        />
        <Button variant="default" w={"35%"}>
          <Text size="lg" fw={"bold"} c="var(--primary-color)">
            +
          </Text>
        </Button>
      </Button.Group>
      <Text>Number of Days</Text>
      <Button.Group w={"100%"}>
        <Button variant="default" w={"35%"}>
          <Text size="lg" fw={"bold"}>
            -
          </Text>
        </Button>
        <NumberInput
          defaultValue={1}
          radius={"xs"}
          hideControls
          w={"30%"}
          styles={{
            input: {
              textAlign: "center",
            },
          }}
        />
        <Button variant="default" w={"35%"}>
          <Text size="lg" fw={"bold"} c="var(--primary-color)">
            +
          </Text>
        </Button>
      </Button.Group>
      <Button
        type="submit"
        w={"100%"}
        display={"block"}
        radius={"lg"}
        mt="7"
        fz={"lg"}
      >
        Add to cart
      </Button>
    </Flex>
  );
}
export default function ViewProductComponent() {
  const location = useLocation();
  const { data }: { data: cardProductType | null } = location.state ?? {
    data: null,
  };
  const breakpoint = useMediaQuery("(max-width:800px)");
  const breakpointII = useMediaQuery("(max-width:530px)");
  return (
    <Flex
      direction={"column"}
      gap={20}
      className={classes.viewProductContainer}
    >
      <div className={classes.wrapper + " container-with-padding "}>
        {" "}
        <Group
          className={classes["wrap-info-product"]}
          align="flex-start"
          gap={breakpoint ? 5 : undefined}
        >
          <PreviewImage data={data} />
          <DetailProduct data={data} />
          <QuantityProduct />
        </Group>
      </div>

      <div className="container-with-padding ">
        {!breakpointII && (
          <Box w={"100%"} className={classes["wrapper-ctn"]}>
            <Tabs defaultValue="description">
              <Tabs.List>
                <Tabs.Tab value="description">Description</Tabs.Tab>
              </Tabs.List>
              <Tabs.Panel value="description" pt="xs">
                {data ? (
                  <Text>{data.description}</Text>
                ) : (
                  <Text>
                    {" "}
                    t nesciunt eaque sed ut. Natus suscipit consequuntur ea
                    nisi.
                  </Text>
                )}
              </Tabs.Panel>
            </Tabs>
          </Box>
        )}
      </div>
    </Flex>
  );
}
