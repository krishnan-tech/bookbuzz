import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import styles from "../../css/Home.module.css";
import final from "../../images/final.png";

interface Props {}

const yellow = { color: "#f2ce00", display: "inline" };

export const ReadingBoy = (props: Props) => {
  return (
    <Flex justifyContent={"space-around"}>
      <Box maxW="105rem" display={{ lg: "flex" }}>
        <Flex
          alignContent={"center"}
          justifyContent={"center"}
          flexDirection={"column"}
          textAlign={"center"}
          margin={"5%"}
          flexGrow={"0"}
          flexShrink={"0"}
          flexBasis={"45%"}
        >
          <Heading fontSize="5xl">
            <Text>
              <Text style={yellow}>Books</Text> are a{" "}
              <Text style={yellow}>uniquely</Text> portable magic.
            </Text>
          </Heading>
          <Box className={styles.circle1}></Box>
          <Box className={styles.circle2}></Box>
          <Box className={styles.circle4}></Box>
          <Text fontSize="xl" mt="2vh">
            That's the things about books. They let you travel without moving your feet.
          </Text>
        </Flex>
        <Box display={"block"} ml={"auto"} mr={"auto"} w={"80%"}>
          <Image width="1200px" height="1200px" src={final} alt="Image" />
        </Box>
      </Box>
    </Flex>
  );
};
