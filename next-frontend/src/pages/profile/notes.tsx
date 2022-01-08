import { Box, Text, Button, Center } from "@chakra-ui/react";
import React from "react";
import { Container } from "../../components/Container";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

interface Props {}

const notes = (props: Props) => {
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
          {[1, 2, 3, 4, 5, 6].map((index) => (
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
              <Text>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam in
                maiores dolorum corporis at quidem quibusdam totam nemo harum
                adipisci? Lorem ipsum dolor sit amet consectetur adipisicing
                Lorem ipsum dolor, sit amet. Lorem, ipsum.
              </Text>
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
            <Button colorScheme="teal" variant="outline">
              Add New Note
            </Button>
          </Box>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default notes;
