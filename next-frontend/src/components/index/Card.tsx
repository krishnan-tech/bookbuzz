import { Box, Center, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";
import book_cover_photo from "../../images/book_cover_photo.jpg";

const data = {
  isNew: true,
  imageURL: book_cover_photo,
  bookName: "Book Name",
  authorName: "Author Name",
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
};

const ProductAddToCart = () => {
  return (
    <Box
      float={"left"}
      w={["70vw", "40vw", "20vw"]}
      border={"3px solid green"}
      display={"flex"}
      justifyContent={"center"}
    >
      <Box
        bg={useColorModeValue("white", "gray.800")}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="xl"
        margin={"2vh 3vh 2vh 3vh"}
        border={"2px solid orange"}
      >
        <Box p={5} pb={3}>
          <Image src={data.imageURL} alt={`Picture of ${data.bookName}`} />
        </Box>

        <Box p={4} pt={0}>
          <Center>
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {data.bookName}
            </Box>
          </Center>

          <Center>
            <Box
              fontSize="md"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {data.authorName}
            </Box>
          </Center>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductAddToCart;
