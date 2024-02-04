import React from "react";
import { Card, Image, Text, Group, Box, Flex } from "@mantine/core";
import { cardProductType } from "../utils/cardProductType";
import { useMediaQuery } from "@mantine/hooks";
import { Rating } from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import classes from "./../styles/product-card.module.css";
///import classes from "./../styles/product-card.module.css";
import { toogleViewType } from "./ShopList.component";

type Props = {
  product: cardProductType;
  view: toogleViewType;
};

function ProductCard({ product, view }: Props) {
  const breakpoint = useMediaQuery("(max-width:830px)");
  const breakpointII = useMediaQuery("(max-width:615px)");
  const breakpointIII = useMediaQuery("(max-width:450px)");

  const navigate = useNavigate();
  function handleClick(link: string, data: cardProductType) {
    navigate(link, {
      state: { data },
    });
  }
  return (
    <>
      {view == "grid" ? (
        <Card
          className={classes["product-view-grid"]}
          withBorder
          component={Link}
          to={"/Shop/Detail/" + product.name}
          onClick={(e) => {
            e.preventDefault();
            handleClick(`/Shop/Detail/${product.name}`, product);
          }}
        >
          <Card.Section withBorder>
            <Image
              loading="lazy"
              src={product.imgURLs[0]}
              height={breakpoint ? 110 : 180}
              alt={product.name}
              p={13}
              radius={20}
              fit="contain"
            />
          </Card.Section>
          <Flex
            direction={breakpointIII ? "column-reverse" : "column"}
            gap={5}
            pt={breakpointII ? 7 : 0}
          >
            <Text
              size={breakpointIII ? "sm" : "md"}
              fw={"bold"}
              mt={breakpointII ? 0 : 17}
            >
              XAF {product.price}/JOUR
            </Text>
            <Group gap={breakpoint ? 5 : 10} className={classes["ctn-rating"]}>
              <Rating value={product.star} fractions={2} readOnly size={"xs"} />
              <Text c={"orange"}>{product.star}</Text>
              <Box
                w={6}
                h={6}
                style={{ backgroundColor: "#DEE2E7", borderRadius: "50%" }}
              ></Box>
              <Text c={"green"} style={{ whiteSpace: "nowrap" }}>
                {product.shop}
              </Text>
            </Group>
            <Text c={"gray"} size={breakpointIII ? "sm" : undefined}>
              {product.name}
            </Text>
          </Flex>
        </Card>
      ) : (
        <Card withBorder h={breakpoint ? undefined : 230} w={"100%"}>
          <Group justify="flex-start" align="flex-start" wrap="nowrap">
            <Image
              loading="lazy"
              src={product.imgURLs[0]}
              w={breakpoint ? 100 : 150}
              height={"auto"}
              alt={product.name}
              fit="contain"
              //miw={breakpoint ? undefined : 210}
            />
            <Flex
              direction={"column"}
              gap={breakpoint ? 5 : 10}
              className="p-link"
            >
              <Text mt={5} size={breakpointIII ? "sm" : undefined}>
                {product.name}
              </Text>
              <Text size={breakpointIII ? "sm" : "md"} fw={"bold"}>
                XAF {product.price}/JOUR
              </Text>
              <Group wrap="nowrap" className={classes["ctn-rating-list"]}>
                <Rating value={product.star} fractions={2} readOnly />
                <Text c={"orange"}>{product.star}</Text>
                <Box
                  w={6}
                  h={6}
                  style={{ backgroundColor: "#DEE2E7", borderRadius: "50%" }}
                ></Box>
                <Text c={"dark"}>{product.orderNumber} Orders</Text>
                <Box
                  w={6}
                  h={6}
                  style={{ backgroundColor: "#DEE2E7", borderRadius: "50%" }}
                ></Box>
                <Text c={"green"}>{product.shop}</Text>
              </Group>
              <Text
                c={"gray"}
                lineClamp={breakpoint ? 1 : 2}
                className={classes["t-card"]}
              >
                {product.description}
              </Text>
              <Link
                style={{ fontSize: 16, fontWeight: 500 }}
                to={"/Shop/Detail/" + product.name}
                className="Link active"
                onClick={() => {
                  handleClick(`/Shop/Detail/${product.name}`, product);
                }}
              >
                View details
              </Link>
            </Flex>
          </Group>
        </Card>
      )}
    </>
  );
}

export default ProductCard;
