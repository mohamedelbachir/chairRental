import React from "react";
import { Button, NumberInput, Text } from "@mantine/core";
type Props = {
  number: number;
};
function AddButton({ number }: Props) {
  return (
    <Button.Group w={"100%"}>
      <Button
        variant="default"
        size="sm"
        w={"33%"}
        rightSection={
          <Text size="1.3em" fw={"bold"} pr={"md"}>
            -
          </Text>
        }
      />
      <NumberInput
        defaultValue={number}
        radius={"xs"}
        hideControls
        size="sm"
        w={"33%"}
        styles={{
          input: {
            textAlign: "center",
          },
        }}
      />
      <Button
        variant="default"
        size="sm"
        w={"33%"}
        rightSection={
          <Text size="1.3em" fw={"bold"} pr={"md"} c={"var(--primary-color)"}>
            +
          </Text>
        }
      />
    </Button.Group>
  );
}

export default AddButton;
/**
 * <Button.Group >
        <Button variant="default" w={"35%"}>
          <Text size="lg" fw={"bold"}>
            -
          </Text>
        </Button>
        <NumberInput
          defaultValue={1}
          radius={"xs"}
          hideControls
          
          styles={{
            input: {
              textAlign: "center",
            },
          }}
        />
        <Button variant="default" >
          <Text size="lg" fw={"bold"} c="var(--primary-color)">
            +
          </Text>
        </Button>
      </Button.Group>
 */
