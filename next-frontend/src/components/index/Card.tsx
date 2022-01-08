import { Flex, Box, useColorModeValue, Center } from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import book_cover_photo from "../../images/book_cover_photo.jpg";
import Image from "next/image";

const data = {
  isNew: true,
  imageURL: book_cover_photo,
  bookName: "Book Name",
  authorName: "Author Name",
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
};

interface RatingProps {
  rating: number;
  numReviews: number;
}

function Rating({ rating, numReviews }: RatingProps) {
  return (
    <Box d="flex" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                color={i < rating ? "teal.500" : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} />;
          }
          return <BsStar key={i} />;
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && "s"}
      </Box>
    </Box>
  );
}

function ProductAddToCart() {
  return (
    <Flex p={50} w="300px" alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue("white", "gray.800")}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="xl"
        position="relative"
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

          {/* <Flex pt={2} justifyContent="space-between" alignContent="center">
            <Rating rating={data.rating} numReviews={data.numReviews} />
          </Flex> */}
        </Box>
      </Box>
    </Flex>
  );
}

export default ProductAddToCart;
