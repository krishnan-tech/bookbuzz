import { Box, Center, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import book_cover_photo from "../../images/book_cover_photo.jpg";

interface IData {
  _id: string;
  imageURL: string;
  name: string;
  author: string;
}

const ProductAddToCard = ({ data }: { data: IData }) => {
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
          <Link href={`/book/${data._id}`}>
            <Image src={book_cover_photo} alt={`Picture of ${data.name}`} />
          </Link>
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
              {data.name}
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
              {data.author}
            </Box>
          </Center>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductAddToCard;
