import { Box, Button, Flex, Input } from "@chakra-ui/react";
import React from "react";

interface Props {}

const Chat = (props: Props) => {
  return (
    <Box w={"90vw"} p={"2vw"} boxShadow={"2xl"}>
      <Box bg="facebook.200" w="100%" p={4} color="white" rounded="base" mb="4">
        <Flex>
          <Box color="facebook.800">Krishnan</Box>
          <Box color="facebook.800" ml={4}>
            3:30
          </Box>
        </Flex>
        <Box color="blackAlpha.800">message 1</Box>
      </Box>
      <Box bg="facebook.200" w="100%" p={4} color="white" rounded="base" mb="4">
        <Flex>
          <Box color="facebook.800">Parth</Box>
          <Box color="facebook.800" ml={4}>
            3:33
          </Box>
        </Flex>
        <Box color="blackAlpha.800">message 2</Box>
      </Box>

      <Box boxShadow={"2xl"} mt="140px">
        <Input placeholder="Type here..." />
        <Flex
          mt={"10px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Button colorScheme="blue" ml="2" width={"100%"}>
            Send Message
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default Chat;
