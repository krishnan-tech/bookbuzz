import React, { useEffect, useState } from "react";
import {
  Box,
  Avatar,
  Link,
  Wrap,
  Text,
  WrapItem,
  Button,
} from "@chakra-ui/react";
import { profile_api } from "../../allApi";

interface Props {}

const UserInfo = (props: Props) => {
  const [username, setUsername] = useState();

  useEffect(() => {
    async function fetchMyAPI() {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");
      if (token != null) {
        const body = {
          token,
          userId,
        };
        const user = await profile_api(body);
        setUsername(user.data.username);
      }
    }
    fetchMyAPI();
  }, []);

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
        {username}
      </Text>
      <Text mt={"0.3vh"}>@{username}</Text>
      <Button colorScheme="teal" mt={"1vh"} size="sm">
        <Link href={"/editprofile"}>Edit</Link>
      </Button>
    </Box>
  );
};

export default UserInfo;
