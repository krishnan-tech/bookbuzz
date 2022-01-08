import { Box, Grid, GridItem, Heading, Text, Flex } from "@chakra-ui/react";
import Image from "next/image";
import ReadingBoy from "../images/final.png";
import ProductAddToCart from "./Card";

export const Home = () => {
  return (
    <Box mt={10}>
      <Box
        maxW="75rem"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Heading fontSize="5xl">Books are a uniquely portable magic.</Heading>
          <Text fontSize="xl">
            Paystack helps businesses in Africa get paid by anyone, anywhere in
            the world
          </Text>
        </Box>
        <Box boxSize="600px" mt={15}>
          <Image src={ReadingBoy} alt="Dan Abramov" />
        </Box>
      </Box>
      <Box mt={8}>
        <ProductAddToCart />
      </Box>
    </Box>
  );
};
