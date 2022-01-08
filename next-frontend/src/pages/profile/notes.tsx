import { Box, Text, Button, Center } from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { get_note_api, get_single_book } from "../../allApi";
import { Container } from "../../components/Container";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

interface Props {}

const notes = (props: Props) => {
  const [allNotes, setAllNotes] = useState([]);

  useEffect(() => {
    async function fetchMyAPI() {
      let get_all_notes = await get_note_api();

      // get_all_notes.data.map(async (val, i) => {
      //   let _id = await get_single_book(val.bookId);
      //   val.book_data = _id.data;
      // });

      setAllNotes(get_all_notes.data);
    }

    fetchMyAPI();
  }, []);

  return (
    <Box>
      <NavBar />
      <Container>
        <Box
          m={"1vw 4vh"}
          // border={"1px solid red"}
          display={"flex"}
          justifyContent={"center"}
          flexWrap={"wrap"}
        >
          {allNotes.map((index) => (
            <Box
              key={index}
              border={"1px solid black"}
              width={"20vw"}
              height={"40vh"}
              m={"1vw"}
              p={"1vw"}
              minW={"35vh"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-around"}
              boxShadow="lg"
            >
              <Center fontSize="4xl">Title</Center>
              <Text>{index.note}</Text>
              <Box>
                <Button colorScheme="teal" size="sm" m={"0 1vw 0 0"}>
                  Edit
                </Button>
                <Button colorScheme="red" size="sm">
                  Delete
                </Button>
              </Box>
            </Box>
          ))}
          <Box
            border={"1px solid black"}
            width={"20vw"}
            height={"40vh"}
            m={"1vw"}
            p={"1vw"}
            minW={"35vh"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-around"}
            boxShadow="lg"
          >
            {allNotes.length != 0 ? (
              <Link href={`/profile/notes/${allNotes[0].bookId}`}>
                <Button colorScheme="teal" variant="outline">
                  Add New Note
                </Button>
              </Link>
            ) : (
              <Link href={`/books`}>
                <Button colorScheme="teal" variant="outline">
                  Add New Note
                </Button>
              </Link>
            )}
          </Box>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default notes;
