import React from "react";
import { Box, Text, Flex, Group, MantineStyleProp } from "@mantine/core";
import cardLogo from "./../assets/icons/Truck.svg";
import chartBreakOut from "./../assets/icons/chart-breakout-circle.svg";
import headPhone from "./../assets/icons/headphones.svg";

const props: MantineStyleProp = {
  backgroundColor: "var(--content-color)",
  border: "1px solid #E0E0E0",
  width: "349px",
  padding: "17px 18px",
  borderRadius: "5px",
  boxShadow: "1px 1px 1px 0px rgba(146, 143, 143, 0.25)",
};
//type Props = {};
function CardList() {
  return (
    <Group
      justify="space-between"
      my={42}
      style={{
        width: "100%",
      }}
    >
      <Box style={props}>
        <Flex gap={7} align={"flex-start"}>
          <img src={cardLogo} alt="logo card" />
          <Flex align="flex-start" direction="column">
            <Text fw={"bold"}>Free Shipping</Text>
            <p
              style={{
                margin: 0,
              }}
            >
              Free shipping on all Us order or order above $200
            </p>
          </Flex>
        </Flex>
      </Box>
      <Box style={props}>
        <Flex gap={7} align={"flex-start"}>
          <img src={chartBreakOut} alt="logo card" />
          <Flex align="flex-start" direction="column">
            <Text fw={"bold"}>Stop With Confiance</Text>
            <p
              style={{
                margin: 0,
              }}
            >
              Our Protection covers your purchase from click to delivery
            </p>
          </Flex>
        </Flex>
      </Box>
      <Box style={props}>
        <Flex gap={7} align={"flex-start"}>
          <img src={headPhone} alt="logo card" />
          <Flex align="flex-start" direction="column">
            <Text fw={"bold"}>24/7 Help Center</Text>
            <p
              style={{
                margin: 0,
              }}
            >
              Round-the-clock assistance for a smooth shopping experience
            </p>
          </Flex>
        </Flex>
      </Box>
    </Group>
  );
}

export default CardList;
