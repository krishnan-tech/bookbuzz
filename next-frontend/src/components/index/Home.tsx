import { Box } from "@chakra-ui/react";
import ProductAddToCart from "./Card";
import Middle from "./Middle";
import { ReadingBoy } from "./ReadingBoy";

export const Home = () => {
  return (
    <Box>
      <ReadingBoy />
      <Middle />
      <Box
        border={"3px solid yellow"}
        overflow={"hidden"}
        display={"flex"}
        justifyContent={"space-around"}
        flexDirection={"row"}
        flexWrap={"wrap"}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(() => (
          <Box mb="20px">
            <ProductAddToCart />
          </Box>
        ))}
      </Box>
    </Box>
  );
};
