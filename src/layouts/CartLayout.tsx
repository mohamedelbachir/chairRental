import { Group, Card, Stack, Divider, Text, Button, Box } from "@mantine/core";
import { Outlet, useLocation } from "react-router-dom";
import { CartProductProps } from "../components/ProductCart.component";
import image from "./../assets/products/01ad73c0a2d288ce5bd52ddfac2945120df5102b.png";
import TruckIcon from "./../assets/icons/truck-icon.svg?react";
import SecureIcon from "./../assets/icons/lock-icon.svg?react";
import MessageIcon from "./../assets/icons/message-icon.svg?react";
import React from "react";
import classes from "./../styles/product-cart.module.css";
import { Link } from "react-router-dom";
import LINK from "../utils/LinkApp";
type cardProps = {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
};

function CardElement({ Icon, title, description }: cardProps) {
  return (
    <Group>
      <Box className={classes.icon}>
        <Icon />
      </Box>
      <Stack gap={0}>
        <Text size="sm">{title}</Text>
        <Text c={"gray"} size="sm">
          {description}
        </Text>
      </Stack>
    </Group>
  );
}
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
function CartLayout() {
  const location = useLocation();
  return (
    <div className="w-full container-with-padding ">
      <Group className={classes["product-cart-wrapper"] + " top-element"}>
        <Card withBorder className={classes["product-cart-list"]}>
          <Outlet />
        </Card>
        <Card withBorder className={classes["product-cart-checkout"]}>
          <Group w={"100%"} justify="space-between" gap={0}>
            <Text c={"dark"}>Subtotal:</Text>
            <Text> XAF1403.97</Text>
          </Group>
          <Group justify="space-between" gap={0}>
            <Text c={"dark"}>Discount:</Text>
            <Text c={"red"}>XAF60.00</Text>
          </Group>
          <Group justify="space-between" gap={0}>
            <Text c={"dark"}>Tax:</Text>
            <Text c={"green"}>+ XAF14.00</Text>
          </Group>
          <Group py={5} justify="space-between" gap={0}>
            <Text fw={"bold"}>Total :</Text>
            <Text>XAF135700.97</Text>
          </Group>
          <Divider pt={5} />
          <Text py={5}> </Text>
          <Button
            bg={"green"}
            radius={"xl"}
            component={Link}
            to={LINK.CART.CHECKOUT.path}
          >
            {location.pathname === LINK.CART.path
              ? `Checkout (${data.length} Items)`
              : `Place Order`}
          </Button>
        </Card>
      </Group>
      <Group gap={"lg"} mt={"lg"}>
        <CardElement
          Icon={() => <SecureIcon />}
          title="Secure payment"
          description="Have you ever finally just "
        />
        <CardElement
          Icon={() => <MessageIcon />}
          title="Customer support"
          description="Have you ever finally just "
        />
        <CardElement
          Icon={() => <TruckIcon />}
          title="swift and reliable delivery"
          description="Have you ever finally just "
        />
      </Group>
    </div>
  );
}

export default CartLayout;
