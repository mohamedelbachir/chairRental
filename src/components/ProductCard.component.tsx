import React from "react";
import { Card, Image, Text, Group, Box, Flex } from "@mantine/core";
import { cardProductType } from "../utils/cardProductType";
import { Rating } from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
///import classes from "./../styles/product-card.module.css";
import { toogleViewType } from "./ShopList.component";

type Props = {
  product: cardProductType;
  view: toogleViewType;
};

function ProductCard({ product, view }: Props) {
  const navigate = useNavigate();
  function handleClick(link: string, data: cardProductType) {
    navigate(link, {
      replace: true,
      state: { data },
    });
  }
  return (
    <>
      {view == "grid" ? (
        <Card
          w={"32%"}
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
              src={product.imgURLs[0]}
              height={180}
              alt={product.name}
              p={13}
              radius={20}
              fit="contain"
            />
          </Card.Section>
          <Text size="md" fw={"bold"} mt={17}>
            XAF {product.price}/JOUR
          </Text>
          <Group gap={10}>
            <Rating value={product.star} fractions={2} readOnly />
            <Text c={"orange"}>{product.star}</Text>
            <Box
              w={6}
              h={6}
              style={{ backgroundColor: "#DEE2E7", borderRadius: "50%" }}
            ></Box>
            <Text style={{ color: "green" }}>{product.shop}</Text>
          </Group>
          <Text style={{ color: " rgba(96, 96, 96, 1)" }}>{product.name}</Text>
        </Card>
      ) : (
        <Card withBorder h={230} style={{ width: "100%" }}>
          <Group justify="flex-start" align="flex-start" wrap="nowrap">
            <Image
              src={product.imgURLs[0]}
              w={210}
              h={180}
              alt={product.name}
              fit="contain"
              miw={210}
            />
            <Flex direction={"column"} gap={10} className="p-link">
              <Text mt={5}>{product.name}</Text>
              <Text size="md" fw={"bold"}>
                XAF {product.price}/JOUR
              </Text>
              <Group>
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
                <Text style={{ color: "green" }}>{product.shop}</Text>
              </Group>
              <Text style={{ color: " #505050" }} lineClamp={2}>
                {product.description}
              </Text>
              <Link
                style={{ fontSize: 16, fontWeight: 500 }}
                to={"/Shop/Detail/" + product.name}
                className="Link active"
                onClick={(e) => {
                  e.preventDefault();
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
