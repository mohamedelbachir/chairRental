import React from "react";
import {
  Box,
  Flex,
  Group,
  Text,
  Rating,
  lighten,
  Center,
  Table,
  Button,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import ShoppingIcon from "./../assets/icons/shopping_basket.svg?react";
import classes from "./../styles/view-product.module.css";
import { cartProductType } from "../utils/cartProductType";
import AddButton from "./AddButton.component";
type PropsDetailsProduct = {
  data: cartProductType | null;
};

function DetailProduct({ data }: PropsDetailsProduct) {
  const breakpoint = useMediaQuery("(max-width:530px)");

  const dataTable = [
    { label: "unitPrice", value: "Negotiable" },
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
            XAF {data ? data.unitPrice : 5000}/Jour
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
            <AddButton number={1} />
            <Text>Number of Days</Text>
            <AddButton number={0} />
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
export default DetailProduct;
