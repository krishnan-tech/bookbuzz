import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react";

interface Props {}

const light_yellow = { color: "#f2ce00", display: "inline" };

const Middle = (props: Props) => {
  return (
    <Box
      border={"2px solid red"}
      display={"flex"}
      h={"fit-content"}
      minH={"20vh"}
      flexDirection={"column"}
      justifyContent={"space-evenly"}
      textAlign={"center"}
      m={"5vh 0"}
      p={"0 10%"}
    >
      <Heading
        fontSize={{ base: "25px", md: "30px", lg: "35px" }}
        style={light_yellow}
      >
        I offten feel sorry for people who don't read good books.
      </Heading>
      <Text fontSize={{ base: "16px", md: "18px", lg: "22px" }}>
        I don't like the idea of a book being a test or being used for a test.
        The way - in my opinion - to make good readers is to let kids choose
        their own books and not test them.
      </Text>
    </Box>
  );
};

export default Middle;
