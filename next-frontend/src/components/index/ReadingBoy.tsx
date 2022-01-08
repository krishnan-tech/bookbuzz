import React from "react";
import { Box, Grid, GridItem, Heading, Text, Flex } from "@chakra-ui/react";
import Image from "next/image";
import final from "../../images/final.png";
import ProductAddToCart from "./Card";
import styles from "../../css/Home.module.css";

interface Props {}

export const ReadingBoy = (props: Props) => {
  return (
    <Flex>
      <Box
        maxW="75rem"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Heading fontSize="5xl">Books are a uniquely portable magic.</Heading>
          <Box className={styles.circle1}></Box>
          <Box className={styles.circle2}></Box>
          <Box className={styles.circle4}></Box>
          <Text fontSize="xl">
            Paystack helps businesses in Africa get paid by anyone, anywhere in
            the world
          </Text>
        </Box>
        <Box>
          <Image width="850px" height="850px" src={final} alt="Dan Abramov" />
        </Box>
      </Box>
    </Flex>
  );
};
