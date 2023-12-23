import React from "react";
import { TextInput, Button, Box, Text, NumberInput } from "@mantine/core";
import calendar from "./../assets/icons/calendar.svg";
//type Props = {};

function Form() {
  return (
    <Box
      w={445}
      style={{
        backgroundColor: "var(--content-color)",
        padding: "30px",
        borderRadius: "20px",
        position: "sticky",
        top: "calc(var(--header-height) + 65px)",
        marginBottom: "10px",
        userSelect: "none",
      }}
    >
      <form>
        <Text fw={"bold"}>Quick Order</Text>
        <TextInput
          label="First which piece of furniture do you want today"
          placeholder="ex: I need chairs for a crusade"
          size="sm"
          radius={"md"}
        />
        <NumberInput
          label="what quantity"
          placeholder="ex: 200"
          hideControls
          mt="7"
          size="sm"
          radius={"md"}
        />
        <TextInput
          type="date"
          label="For which period "
          placeholder="ex: 01-03/01/2023"
          mt="7"
          size="sm"
          rightSection={<img src={calendar} alt="calendar" />}
          radius={"md"}
        />
        <TextInput
          type="tel"
          label="Your Phone Number "
          placeholder="ex: +237 697 00 00 00"
          radius={"md"}
          mt="7"
          size="sm"
        />
        <Button
          type="submit"
          mx="auto"
          display={"block"}
          styles={{
            root: {
              width: "187px",
              textAlign: "center",
            },
          }}
          color="var(--primary-color)"
          fw={"normal"}
          radius={"md"}
          mt="7"
          fz={"lg"}
        >
          order
        </Button>
      </form>
    </Box>
  );
}

export default Form;
