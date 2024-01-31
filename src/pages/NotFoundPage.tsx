import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import NotFoundIcon from "./../assets/icons/404.svg?react";
import LeftArrow from "./../assets/icons/ArrowLeft.svg?react";
import HomeIcon from "./../assets/icons/House.svg?react";
import { Center, Title, Stack, Group, Button } from "@mantine/core";
//type Props = {};

function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <Center>
      <Stack>
        <NotFoundIcon />
        <Center>
          <Title>404, Page not found</Title>
        </Center>
        <Center>
          <Group>
            <Button
              radius={"xl"}
              leftSection={<LeftArrow />}
              onClick={(e) => {
                e.preventDefault();
                navigate(-1);
              }}
            >
              Go Back
            </Button>
            <Button
              radius={"xl"}
              variant="outline"
              leftSection={<HomeIcon />}
              component={NavLink}
              to={"/"}
            >
              Go To home
            </Button>
          </Group>
        </Center>
      </Stack>
    </Center>
  );
}

export default NotFoundPage;
