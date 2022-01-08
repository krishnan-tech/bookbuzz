import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import styles from "../../css/Home.module.css";
import final from "../../images/final.png";

interface Props {}

export const ReadingBoy = (props: Props) => {
  return (
    <Flex justifyContent={"space-around"}>
      <Box maxW="105rem" border={"3px solid green"} display={{ lg: "flex" }}>
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
              <p style={{ color: "#f2ce00", display: "inline" }}>Books</p> are a{" "}
              <p style={{ color: "#f2ce00", display: "inline" }}>uniquely</p>{" "}
              portable magic.
            </Text>
          </Heading>
          <Box className={styles.circle1}></Box>
          <Box className={styles.circle2}></Box>
          <Box className={styles.circle4}></Box>
          <Text fontSize="xl" mt="2vh">
            Paystack helps businesses in Africa get paid by anyone, anywhere in
            the world
          </Text>
        </Flex>
        <Box display={"block"} ml={"auto"} mr={"auto"} w={"80%"}>
          <Image width="1200px" height="1200px" src={final} alt="Image" />
        </Box>
      </Box>
    </Flex>
  );
};
