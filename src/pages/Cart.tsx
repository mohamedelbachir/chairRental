import { Group, Stack, Divider, Button } from "@mantine/core";
import ProductCart, {
  CartProductProps,
} from "../components/ProductCart.component";
import image from "./../assets/products/01ad73c0a2d288ce5bd52ddfac2945120df5102b.png";
import ArrowLeft from "./../assets/icons/ArrowLeft.svg?react";
import React from "react";
import { Link } from "react-router-dom";
import LINK from "../utils/LinkApp";
const data: CartProductProps[] = [
  {
    id: 1,
    description: "lol",
    img: image,
    name: "T-shirts with multiple colors, for men and lady",
    numberDays: 1,
    price: 500,
    quantity: 3,
  },
  {
    id: 2,
    description:
      "Size: medium, Color: blue, Material: Plastic Seller: Artel Market",
    img: image,
    name: "T-shirts with multiple colors, for men and lady",
    numberDays: 1,
    price: 500,
    quantity: 3,
  },
];
function Cart() {
  return (
    <>
      <Stack>
        {data.map((d, i) => (
          <Stack key={i}>
            <ProductCart {...d} />
            <Divider />
          </Stack>
        ))}
      </Stack>
      <Group justify="space-between" mt={"lg"}>
        <Button
          leftSection={<ArrowLeft />}
          radius={"xl"}
          component={Link}
          to={LINK.SHOP.path}
        >
          Back to shop
        </Button>
        <Button radius={"xl"} variant="outline">
          Remove all
        </Button>
      </Group>
    </>
  );
}

export default Cart;
