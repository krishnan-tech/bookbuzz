import React, { useState } from "react";
import {
  Box,
  Text,
  Flex,
  Center,
  Heading,
  HStack,
  Checkbox,
  Tag,
  Image,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { StarIcon } from "@chakra-ui/icons";
import { Container } from "../components/Container";
import NavBar from "../components/NavBar";
import Reviews from "../components/books/Reviews";
import Footer from "../components/Footer";
import Chat from "../components/books/Chat";

interface Props {}

const data = {
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
                style={{ marginLeft: "1" }}
                color={i < rating ? "teal.500" : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} />;
        })}
      <Box as="span" ml="2" color="gray.500" fontSize="sm">
        {numReviews} review{numReviews > 1 && "s"}
      </Box>
    </Box>
  );
}

const books = (props: Props) => {
  const [added, setAdded] = useState(false);

  const handleAdded = (e) => {
    e.preventDefault();
    // console.log(added);
    setAdded((added) => {
      return !added;
    });
    // console.log(added);
  };

  return (
    <Box>
      <NavBar />
      <Container>
        <Box m={"3vh 0"}>
          {/* Books info */}
          <Flex
            direction={{ base: "column", md: "row", sm: "row" }}
            justifyContent={"center"}
          >
            <Box
              textAlign={"center"}
              minW={"25vw"}
              p={"2vh 0"}
              mr={"1vw"}
              boxShadow={"base"}
            >
              <Center mb={"2vh"}>
                <Image
                  boxShadow={"lg"}
                  boxSize={{ base: "50vw", md: "15vw", sm: "20vw" }}
                  objectFit="cover"
                  src="https://bit.ly/dan-abramov"
                  alt="Dan Abramov"
                />
              </Center>
              <Checkbox
                defaultIsChecked={added}
                m={"1vh 0"}
                onChange={handleAdded}
              >
                Add to Your Bucket
              </Checkbox>
              <Text mb={"0.5vh"} fontSize={"lg"}>
                Your rating
              </Text>
              <Center>
                <HStack>
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </HStack>
              </Center>
            </Box>
            <Box
              padding={"1vh 2vw"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-around"}
              boxShadow={"base"}
            >
              <Box>
                <Heading size={"lg"}>Dark Whispers</Heading>
                <Text size={"md"}>by Helen Harper</Text>
              </Box>
              <Box mt={"2vh"}>
                <Text fontSize={"lg"} as={"u"} mb={"0.5vh"}>
                  Book rating
                </Text>
                <Rating rating={data.rating} numReviews={data.numReviews} />
              </Box>
              <Box mt={"2vh"}>
                <Text fontSize={"lg"} as={"u"} mb={"0.5vh"}>
                  About Book
                </Text>
                <Text>
                  The Supernatural Summit is about to start at the DeVane Hotel
                  in London. Vampires and werewolves, ghouls and gremlins, and
                  pixies and druids have all come together to find better ways
                  to get along with the human community and address the strict
                  laws which govern their existence. It's a real opportunity to
                  change the world for the better and I'm proud to be a part of
                  it.
                </Text>
              </Box>
              <Box mt={"2vh"}>
                <Text fontSize={"lg"} as={"u"}>
                  Tags
                </Text>
                <HStack mt={"0.5vh"}>
                  <Tag>Life</Tag>
                  <Tag>Biography</Tag>
                  <Tag>Insparation</Tag>
                </HStack>
              </Box>
            </Box>
          </Flex>

          {/* Reviews */}
          <Flex
            p={"2vw"}
            m={"1vw 0"}
            boxShadow={"base"}
            // display={"flex"}
            // flexWrap={"wrap"}
            flexDirection={{base: "column", md: "row", sm: "column"}}
          >
            <Chat />
            <Reviews />
          </Flex>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default books;
