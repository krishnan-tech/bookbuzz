import { Box, Button, Text, Textarea } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import React from "react";
import NavBar from "../../../components/NavBar";
import { Container } from "../../../components/Container";
import Footer from "../../../components/Footer";
import { get_note_api, set_note_api } from "../../../allApi";

interface Props {}

const note = (props: Props) => {
  let [note, setNote] = useState("");
  const router = useRouter();
  const { bookId } = router.query;

  useEffect(() => {
    async function fetchMyAPI() {
      if (bookId) {
        const token = localStorage.getItem("token");

        if (token != null) {
          const user = await get_note_api();
          let temp = user.data;
          for (let i = 0; i < temp.length; i++) {
            if (temp[i].bookId === bookId) {
              setNote(temp[i].note);
              break;
            }
          }
        }
      }
    }
    fetchMyAPI();
  }, [bookId]);

  const submitHandler = async (event) => {
    event.preventDefault();

    const body = {
      bookId,
      note,
    };
    const user = await set_note_api(body);

    if (user.error) {
      alert(user.error);
    }

    console.log(user);
  };

  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setNote(inputValue);
  };

  return (
    <Box>
      <NavBar />
      <Container
        minHeight={"75vh"}
        display={"flex"}
        justifyContent={"center"}
        flexDirection={"column"}
      >
        <Box boxShadow={"xl"} padding={"10vh 10vw"}>
          <Text mb={"2vh"} pl={"2vh"}>
            Your Note:
          </Text>
          <Text mb={"4vh"} shadow={"base"} padding={"2vh"} minHeight={"8vh"}>
            {note}
          </Text>
          <Textarea
            value={note}
            onChange={handleInputChange}
            placeholder="Write your notes here."
            // size="sm"
            height={"auto"}
            mb={"4vh"}
          />
          <Button colorScheme="teal" size="md" onClick={submitHandler}>
            Save
          </Button>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default note;
