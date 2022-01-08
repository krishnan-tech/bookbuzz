import React, { useEffect, useState } from "react";
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
import { get_book_details_api } from "../allApi";

interface Props {}

const data = {
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

const books = (props: Props) => {
  const [added, setAdded] = useState(false);
  const [bookName, setBookName] = useState("BookName");
  const [bookDescription, setBookDescription] = useState("");
  const [author, setAuthor] = useState("Author");
  const [rating, setRating] = useState("");
  const [tags, setTags] = useState(["life", "insparation", "study"]);

  const handleAdded = (e) => {
    e.preventDefault();
    setAdded((added) => {
      return !added;
    });
  };

  useEffect(() => {
    let user = null;
    let bookId = null;

    async function fetchMyAPI() {
      const body = {
        bookId,
      };
      user = await get_book_details_api(body);
      console.log(user);
      setBookName(user.data.name);
      // setBookDescription(user.data.description);
      setAuthor(user.data.author);
      user.data.review.forEach((tag) =>
        setTags((previousState) => [...previousState, tag])
      );
    }
    fetchMyAPI();
  }, []);

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
                <Heading size={"lg"}>{bookName}</Heading>
                <Text size={"md"}>by {author}</Text>
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
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ducimus expedita nulla omnis hic cumque. Amet et laboriosam aliquid maiores aut atque reprehenderit dicta aliquam adipisci voluptatum doloremque hic ex unde suscipit itaque, eveniet alias harum blanditiis? Impedit facilis exercitationem maiores. Minus eaque delectus ad quia sint esse sapiente minima, cumque dolore ut voluptates, porro aperiam dicta dignissimos facere quam molestiae officia accusamus ipsa, sed nemo. Repudiandae esse, at libero sint tempora eligendi quasi eos assumenda cupiditate optio maiores inventore exercitationem facere autem molestiae quaerat? Inventore unde soluta ex nemo voluptatum velit ipsam, sunt tenetur ut quo officia sed iure odit minus, reiciendis libero ea deserunt consectetur nisi provident sit, quibusdam quia enim error. Vero, quis. Eaque aliquam quo iure a odio veritatis temporibus excepturi dicta nulla soluta assumenda labore placeat eveniet voluptatibus quisquam aspernatur fuga, ullam doloribus sed cumque.</Text>
              </Box>
              <Box mt={"2vh"}>
                <Text fontSize={"lg"} as={"u"}>
                  Tags
                </Text>
                <HStack mt={"0.5vh"}>
                  {tags.map((tag) => (
                    <Tag>{tag}</Tag>
                  ))}
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
};

export default books;
