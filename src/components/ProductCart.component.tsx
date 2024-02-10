import { Group, Image, Stack, Text, Button, Box } from "@mantine/core";
import AddButton from "./AddButton.component";
import classes from "./../styles/product-cart.module.css";
import React from "react";
export type CartProductProps = {
  id: number;
  img: string;
  name: string;
  description: string;
  numberDays: number;
  quantity: number;
  price: number;
};
function ProductCart({ ...product }: CartProductProps) {
  return (
    <Group align="flex-start" className={classes["product-cart-ctn"]}>
      <Image
        fit="contain"
        src={product.img}
        className={classes["product-cart-img"]}
      />
      <Stack
        justify="space-between"
        gap={5}
        className={classes["product-cart-info"]}
      >
        <Text size="sm" fw={"bold"} lineClamp={2}>
          {product.name}
        </Text>
        <Text size="sm" c={"gray"} lineClamp={1}>
          {product.description}
        </Text>
        <Group wrap="nowrap" gap={3} justify="space-between">
          <Box className={classes["product-cart-detail-mobile"]}>
            <Text c={"dark"} size="sm">
              Number of Days
            </Text>
            <AddButton number={product.numberDays} />
          </Box>
          <Box className={classes["product-cart-detail-mobile"]} mr={10}>
            <Text size="sm" c={"dark"}>
              Quantity
            </Text>
            <AddButton number={product.quantity} />
          </Box>
        </Group>
        <Group justify="space-between">
          <Box className={classes["product-cart-detail-mobile"]}>
            <Text c={"dark"} size="sm">
              Price
            </Text>
            <Text>XAF {product.price}</Text>
          </Box>
          <Button c={"red"} variant="default" w={"fit-content"} mr={10}>
            remove
          </Button>
        </Group>
      </Stack>
      <Box className={classes["product-cart-detail"]}>
        <Text c={"dark"}>Number of Days</Text>
        <AddButton number={product.numberDays} />
      </Box>
      <Box className={classes["product-cart-detail"]}>
        <Text c={"dark"}>Quantity</Text>
        <AddButton number={product.quantity} />
      </Box>
      <Box className={classes["product-cart-detail"]}>
        <Text c={"dark"}>Price</Text>
        <Text>XAF {product.price}</Text>
      </Box>
    </Group>
  );
}

export default ProductCart;
