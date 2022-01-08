import React from "react";
import { Box, Avatar, Link, Wrap, Text, WrapItem, Button } from "@chakra-ui/react";

interface Props {}

const UserInfo = (props: Props) => {
  return (
    <Box
      border={"2px solid pink"}
      display={"flex"}
      justifyContent={"center"}
      flexDirection={"column"}
      alignItems={"center"}
      p={"4vh 0"}
    >
      <Wrap>
        <WrapItem>
          <Avatar
            boxShadow="2xl"
            rounded="65%"
            bg="white"
            size="2xl"
            name="Segun Adebayo"
            src="https://bit.ly/sage-adebayo"
          />{" "}
        </WrapItem>
      </Wrap>
      <Text mt={"1vh"} fontSize={"3.5vh"}>
        Umang Dobariya
      </Text>
      <Text mt={"0.3vh"}>@username</Text>
      <Button colorScheme="teal" mt={"1vh"} size="sm">
        <Link href={"/editprofile"}>
          Edit
        </Link>
      </Button>
    </Box>
  );
};

export default UserInfo;
