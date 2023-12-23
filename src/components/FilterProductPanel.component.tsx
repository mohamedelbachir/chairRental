import React, { useState } from "react";
import {
  Flex,
  Accordion,
  Anchor,
  Text,
  AccordionStylesNames,
  RangeSlider,
  Group,
  NumberInput,
  Menu,
  Button,
  Input,
} from "@mantine/core";
import { Link } from "react-router-dom";
import { cardProductType } from "../utils/cardProductType";
import classes from "./../styles/filterProduct.module.css";
import Chevron from "./../assets/icons/Chevron.svg";

const categories: string[] = ["Chair", "Table", "Tent", "Modern Chair"];
const panelStyles: Partial<Record<AccordionStylesNames, React.CSSProperties>> =
  {
    content: {
      paddingLeft: 0,
    },
  };
export function CategorieFilter() {
  return (
    <Accordion.Item
      value="Categories"
      style={{ borderTop: "1px solid rgba(222, 226, 231, 1)" }}
      pl={0}
    >
      <Accordion.Control pl={0}>
        <Text fw={"bold"}>Categorie</Text>
      </Accordion.Control>
      <Accordion.Panel className="p-link" styles={panelStyles}>
        <Flex direction={"column"} gap={10}>
          {categories.map((s) => (
            <Anchor component={Link} to={"#"} p={0} className="link-global">
              {s}
            </Anchor>
          ))}
          <Anchor
            component={Link}
            to={"#"}
            p={0}
            className="link-global active"
          >
            See All
          </Anchor>
        </Flex>
      </Accordion.Panel>
    </Accordion.Item>
  );
}

export function FilterPrice() {
  return (
    <Accordion.Item value="FilterPrice">
      <Accordion.Control pl={0}>
        <Text fw={"bold"}>Price Range</Text>
      </Accordion.Control>
      <Accordion.Panel p={0} className="p-link" styles={panelStyles}>
        <Flex direction={"column"} gap={10}>
          <RangeSlider
            styles={{
              thumb: { borderWidth: 1 },
              track: {
                backgroundColor: "red",
              },
            }}
            thumbSize={20}
            color="var(--primary-color)"
            minRange={0.2}
            min={0}
            max={10000}
            step={100}
            defaultValue={[0, 1000]}
          />
          <Group gap={6}>
            <NumberInput w={"48%"} label="Min" placeholder="0" hideControls />
            <NumberInput
              w={"48%"}
              label="Max"
              placeholder="10000"
              hideControls
            />
          </Group>
        </Flex>
      </Accordion.Panel>
    </Accordion.Item>
  );
}

export function FilterDistance() {
  return (
    <Accordion.Item value="FilterDistance">
      <Accordion.Control pl={0}>
        <Text fw={"bold"}>Distance Range</Text>
      </Accordion.Control>
      <Accordion.Panel p={0} className="p-link" styles={panelStyles}>
        <Flex direction={"column"} gap={10}>
          <Group gap={6}>
            <NumberInput w={"48%"} label="Min" placeholder="1" hideControls />
            <NumberInput w={"48%"} label="Max" placeholder="200" hideControls />
          </Group>
        </Flex>
      </Accordion.Panel>
    </Accordion.Item>
  );
}

export function FilterTown() {
  return (
    <Accordion.Item value="FilterTown">
      <Accordion.Control pl={0}>
        <Text fw={"bold"}>Ville</Text>
      </Accordion.Control>
      <Accordion.Panel
        p={0}
        className="p-link"
        styles={{
          content: {
            paddingLeft: 0,
          },
        }}
      >
        <Menu
          trigger="hover"
          transitionProps={{ exitDuration: 0 }}
          withinPortal
          width={100}
        >
          <Menu.Target>
            <Input
              component="button"
              pointer
              rightSection={<img src={Chevron} alt="chevron" />}
            >
              Button input
            </Input>
          </Menu.Target>
          {/* <Menu.Dropdown>
              <a
                href="#"
                className={classes.link}
                onClick={(event) => event.preventDefault()}
              >
                Help
              </a>
            </Menu.Dropdown> */}
        </Menu>
      </Accordion.Panel>
    </Accordion.Item>
  );
}

type Props = {
  datas: cardProductType[];
};
function FilterProductPanel({ datas }: Props) {
  const [openedAccordion, setOpenendAccordion] = useState<string[]>([]);
  return (
    <Flex
      direction={"column"}
      justify={"flex-start"}
      className={classes.containerFilter}
    >
      <div className={classes.FilterElement}>
        <Accordion
          multiple
          value={openedAccordion}
          onChange={setOpenendAccordion}
        >
          <CategorieFilter />
          <FilterPrice />
          <FilterDistance />
          <FilterTown />
        </Accordion>
        <Button
          c={"var(--primary-color)"}
          fw={"normal"}
          variant="transparent"
          className="b-button"
          fz={"md"}
          mt={10}
          mr={15}
        >
          Apply
        </Button>
      </div>
    </Flex>
  );
}

export default FilterProductPanel;
