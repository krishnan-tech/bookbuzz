import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react";

interface Props {}

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
      <Heading fontSize={{ base: '25px', md: '30px', lg: '35px' }}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </Heading>
      <Text fontSize={{ base: '16px', md: '18px', lg: '22px' }}>
        Lorem ipsum magni blanditiis, ipsam consequuntur illo numquam, similique
        minus aliquam aspernatur delectus animi voluptatum!
      </Text>
    </Box>
  );
};

export default Middle;
