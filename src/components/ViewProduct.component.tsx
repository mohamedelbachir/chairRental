import React, { useState, useRef, useLayoutEffect } from "react";
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
} from "@mantine/core";
import PhoneImage from "./../assets/products/0fde3cb34a30e1c40080fa607437adb64caa3545.png";
import AssetI from "./../assets/products/01ad73c0a2d288ce5bd52ddfac2945120df5102b.png";
import AssetII from "./../assets/products/1cff38a3fc45d6416700a92128145a0a7a02d791.png";
import shoppingIcon from "./../assets/icons/shopping_basket.svg";
import cmflags from "./../assets/icons/flagcm.svg";
import verifiedIcon from "./../assets/icons/verified_user.svg";
//import AssetIII from "./../assets/products/260c7a4b2c0a4a3071479d3ea04dbef308c19301.png";
//import AssetIV from "./../assets/products/825df217dcf3ae6a903f7046fc417d331089432b.png";

import classes from "./../styles/view-product.module.css";
import { useLocation } from "react-router-dom";
import { cardProductType } from "../utils/cardProductType";
//type Props = {};

const boxStyle: MantineStyleProp = {
  backgroundColor: "white",
  border: "1px solid #DEE2E7",
  padding: "20px",
  borderRadius: "6px",
};

const boxInterStyle: MantineStyleProp = {
  border: "1px solid #DEE2E7",
  borderRadius: "6px",
};

type previewProps = {
  data: cardProductType | null;
};
export function PreviewImage({ data }: previewProps) {
  const imgURLs = data ? data.imgURLs : [PhoneImage, AssetI, AssetII];
  const [slideIndex, setSlideIndex] = useState(0);
  useLayoutEffect(() => {
    showSlides(slideIndex);
  }, []);

  // Next/previous controls
  function plusSlides(n: number) {
    setSlideIndex((index) => {
      return index + n;
    });
    showSlides(slideIndex);
  }

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
  }
  return (
    <>
      <Flex direction={"column"} w={"40%"} gap={26}>
        <Box h={380} w={"100%"} style={boxInterStyle}>
          <Image
            src={imgURLs[slideIndex]}
            w={"100%"}
            h={"100%"}
            alt={"Image Preview"}
            fit="contain"
            miw={210}
          />
        </Box>
        <Group align="center" justify="center" gap={9}>
          {imgURLs.map((src, index) => (
            <Box
              h={47}
              w={70.29}
              style={{
                ...boxInterStyle,
                borderColor: `${
                  slideIndex === index ? "var(--primary-color)" : "#DEE2E7"
                }`,
              }}
              className={classes.thumb}
              onClick={() => currentSlide(index)}
              p={5}
            >
              <Image
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
    <Flex direction={"column"} gap={12}>
      <Text fw={"bold"} size="1.3em">
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
        <img src={shoppingIcon} alt="icon shop" />
        <Text c={"gray"}>{data ? data.orderNumber : 134} Orders</Text>
      </Group>
      <Box p={20} bg={lighten("#FF9017", 0.7)}>
        <Center>
          <Text fw={"bold"} size="1.3em" lts={2}>
            XAF {data ? data.price : 5000}/Jour
          </Text>
        </Center>
      </Box>
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
              <Table.Td c={"#8B96A5"}>{d.label} : </Table.Td>
              <Table.Td c={"#505050"}>{d.value}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Flex>
  );
}

export function QuantityProduct() {
  return (
    <Flex direction={"column"} gap={5} style={boxStyle} w={"30%"}>
      <Group>
        <img src={cmflags} alt="cm" />
        <Text c={"#8B96A5"}>Cameroon, Douala</Text>
      </Group>
      <Group>
        <img src={verifiedIcon} alt="verified" />
        <Text c={"#8B96A5"}>Cameroon shipping</Text>
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
        styles={{
          root: {
            width: "187px",
            textAlign: "center",
          },
        }}
        color="var(--primary-color)"
        fw={"normal"}
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
  return (
    <Flex
      direction={"column"}
      gap={20}
      className={classes.viewProductContainer}
    >
      <Group style={boxStyle} align="flex-start" wrap="nowrap">
        <PreviewImage data={data} />
        <DetailProduct data={data} />
        <QuantityProduct />
      </Group>
      <Box w={"100%"} style={boxStyle}>
        <Tabs defaultValue="description">
          <Tabs.List>
            <Tabs.Tab
              value="description"
              color="var(--primary-color)"
              styles={{
                tab: {
                  color: "var(--primary-color)",
                },
              }}
            >
              Description
            </Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="description" pt="xs">
            {data ? (
              <Text>{data.description}</Text>
            ) : (
              <Text>
                {" "}
                t nesciunt eaque sed ut. Natus suscipit consequuntur ea nisi.
              </Text>
            )}
          </Tabs.Panel>
        </Tabs>
      </Box>
    </Flex>
  );
}
