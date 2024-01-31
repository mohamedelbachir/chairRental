import React from "react";
import { Flex, Card, Text, ActionIcon, Group, Stack } from "@mantine/core";
import { Pagination } from "@mantine/core";
import { cardProductType } from "../utils/cardProductType";
import { useToggle } from "@mantine/hooks";
import GridIcon from "../assets/icons/gridIcon.svg?react";
import ListIcon from "../assets/icons/listview.svg?react";
import ProductCard from "./ProductCard.component";
type Props = {
  products: cardProductType[];
};

export type toogleViewType = "grid" | "list";
export default function ShopList({ products }: Props) {
  const [view, toggle] = useToggle<toogleViewType>(["grid", "list"]);
  function handleSwitch(s: toogleViewType) {
    if (s !== view) {
      toggle();
    }
  }
  return (
    <Stack w={"75%"}>
      <Card withBorder h={68} style={{ width: "100%" }} mb={21}>
        <Group justify="space-between">
          <Text>
            {products.length} items in <b>Mobile accessory</b>
          </Text>
          <ActionIcon.Group>
            <ActionIcon
              variant={view === "grid" ? "light" : "default"}
              size="lg"
              aria-label="grid"
              onClick={() => handleSwitch("grid")}
            >
              <GridIcon />
            </ActionIcon>

            <ActionIcon
              variant={view === "list" ? "light" : "default"}
              size="lg"
              aria-label="list"
              onClick={() => handleSwitch("list")}
            >
              <ListIcon />
            </ActionIcon>
          </ActionIcon.Group>
        </Group>
      </Card>
      <Flex
        justify={"space-between"}
        wrap={"wrap"}
        gap={view === "grid" ? 10 : 9}
      >
        {products.map((d, i) => {
          return <ProductCard key={i} product={d} view={view} />;
        })}
      </Flex>
      <Group w={"100%"} justify="flex-end">
        <Pagination total={10} />
      </Group>
    </Stack>
  );
}
