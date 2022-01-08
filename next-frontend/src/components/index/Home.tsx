import { Box } from "@chakra-ui/react";
import { ReadingBoy } from "./ReadingBoy";
import ProductAddToCart from "./Card";
import { Flex, Spacer } from "@chakra-ui/react";

export const Home = () => {
  return (
    <Box mt={10}>
      <ReadingBoy />
      <Flex>
        <ProductAddToCart />
        <ProductAddToCart />
        <ProductAddToCart />
        <ProductAddToCart />
      </Flex>
      <Flex>
        <ProductAddToCart />
        <ProductAddToCart />
        <ProductAddToCart />
        <ProductAddToCart />
      </Flex>
      <Flex>
        <ProductAddToCart />
        <ProductAddToCart />
        <ProductAddToCart />
        <ProductAddToCart />
      </Flex>
      <Flex>
        <ProductAddToCart />
        <ProductAddToCart />
        <ProductAddToCart />
        <ProductAddToCart />
      </Flex>
      <Flex>
        <ProductAddToCart />
        <ProductAddToCart />
        <ProductAddToCart />
        <ProductAddToCart />
      </Flex>
    </Box>
  );
};
