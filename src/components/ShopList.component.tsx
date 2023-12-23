import React from "react";
import { Flex, Card, Text, ActionIcon, Group } from "@mantine/core";
import { cardProductType } from "../utils/cardProductType";
import { useToggle } from "@mantine/hooks";
import classes from "./../styles/shopList.module.css";
import gridIcon from "../assets/icons/gridIcon.svg";
import listIcon from "../assets/icons/listview.svg";
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
    <div className={classes.productWrapper}>
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
              <img src={gridIcon} alt="icon" />
            </ActionIcon>

            <ActionIcon
              variant={view === "list" ? "light" : "default"}
              size="lg"
              aria-label="list"
              onClick={() => handleSwitch("list")}
            >
              <img src={listIcon} alt="icon" />
            </ActionIcon>
          </ActionIcon.Group>
        </Group>
      </Card>
      <Flex
        justify={"space-between"}
        wrap={"wrap"}
        gap={view === "grid" ? 20 : 9}
      >
        {products.map((d, i) => {
          return <ProductCard key={i} product={d} view={view} />;
        })}
      </Flex>
    </div>
  );
}
