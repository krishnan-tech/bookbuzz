import { StarIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Checkbox,
  Flex,
  Heading,
  HStack,
  Image,
  Tag,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { add_to_current_reading_api, get_single_book } from "../../allApi";
import Chat from "../../components/books/Chat";
import Reviews from "../../components/books/Reviews";
import { Container } from "../../components/Container";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

interface Props {}

const raitingInfo = {
  rating: 4.2,
  numReviews: 34,
};

interface RatingProps {
  rating: number;
  numReviews: number;
}

// For calculating rating star
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

export const SingleBook: React.FC<Props> = ({}) => {
  const router = useRouter();
  const { bookId } = router.query;
  const [added, setAdded] = useState(false);
  const [data, setData] = useState(undefined);

  const handleAdded = async (e) => {
    e.preventDefault();

    const addToCurrentReading = bookId;
    const body = {
      addToCurrentReading
    };
    const user = await add_to_current_reading_api(body);

    if (user.error) {
      alert(user.error);
    }

    setAdded(true);
    // setAdded((added) => {
    //   return !added;
    // });
  };

  useEffect(() => {
    async function fetchMyAPI() {
      if (bookId) {
        let response = await get_single_book(bookId);
        setData(response.data);
      }
    }
    fetchMyAPI();
  }, [bookId]);

  if (data) {
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
                width={"100%"}
              >
                <Box>
                  <Heading size={"lg"}>{data.name}</Heading>
                  <Text size={"md"}>by {data.author}</Text>
                </Box>
                <Box mt={"2vh"}>
                  <Text fontSize={"lg"} as={"u"} mb={"0.5vh"}>
                    Book rating
                  </Text>
                  <Rating
                    rating={raitingInfo.rating}
                    numReviews={raitingInfo.numReviews}
                  />
                </Box>
                <Box mt={"2vh"}>
                  <Text fontSize={"lg"} as={"u"} mb={"0.5vh"}>
                    About Book
                  </Text>
                  <Text>{data.description}</Text>
                </Box>
                <Box mt={"2vh"}>
                  <Text fontSize={"lg"} as={"u"}>
                    Tags
                  </Text>
                  <HStack mt={"0.5vh"}>
                    {data.tags &&
                      data.tags.map((tag: string) => <Tag>{tag}</Tag>)}
                  </HStack>
                </Box>
              </Box>
            </Flex>

            {/* Reviews */}
            <Flex
              p={"2vw"}
              m={"1vw 0"}
              boxShadow={"base"}
              flexDirection={{ base: "column", md: "row", sm: "column" }}
            >
              <Chat />
              <Reviews />
            </Flex>
          </Box>
        </Container>
        <Footer />
      </Box>
    );
  }

  return <Box>Loading ...</Box>;
};

export default SingleBook;
