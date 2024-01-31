import React from "react";
import { Box, Text, Flex, Group, MantineStyleProp } from "@mantine/core";
import classes from "./../styles/cardlist.module.css";

import CardLogo from "./../assets/icons/Truck.svg?react";
import ChartBreakOut from "./../assets/icons/chart-breakout-circle.svg?react";
import HeadPhone from "./../assets/icons/headphones.svg?react";

const boxBg: MantineStyleProp = {
  backgroundColor: "var(--content-color)",
  border: "1px solid #E0E0E0",
  width: "32%",
  padding: "17px 18px",
  borderRadius: "5px",
  boxShadow: "1px 1px 1px 0px rgba(146, 143, 143, 0.25)",
};
type cardProps = {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
};

function CardElement({ Icon, title, description }: cardProps) {
  return (
    <Box style={boxBg}>
      <Flex gap={7} align={"flex-start"}>
        <Icon />
        <Flex align="flex-start" direction="column">
          <Text fw={"bold"}>{title}</Text>
          <p className={classes.description}>{description}</p>
        </Flex>
      </Flex>
    </Box>
  );
}

//type Props = {};
function CardList() {
  return (
    <Group justify="space-between" my={42} w={"100%"}>
      <CardElement
        Icon={() => <CardLogo width={50} />}
        title="Free Shipping"
        description="Free shipping on all Us order or order above $200"
      />
      <CardElement
        Icon={() => <ChartBreakOut width={50} />}
        title="Stop With Confiance"
        description=" Our Protection covers your purchase from click to delivery"
      />
      <CardElement
        Icon={() => <HeadPhone width={50} />}
        title="24/7 Help Center"
        description="Round-the-clock assistance for a smooth shopping experience"
      />
    </Group>
  );
}

export default CardList;
