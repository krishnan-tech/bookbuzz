import {
  Box,
  Text,
  Button,
  Center,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { Container } from "../../../components/Container";
import Footer from "../../../components/Footer";
import NavBar from "../../../components/NavBar";

interface Props {}

const DeleteNotePopUp = (props: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Button colorScheme="red" size={"sm"} onClick={onOpen}>
        Delete
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete Note</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Are you sure you want to delete this note ?</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="red">Delete</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

const notes = (props: Props) => {
  const text = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam in
                maiores dolorum corporis at quidem quibusdam totam nemo harum
                adipisci? Lorem ipsum dolor sit amet consectetur adipisicing
                Lorem ipsum dolor, sit amet. Lorem, ipsum. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Delectus, adipisci sit
                deleniti amet voluptatem commodi.`;
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
                {text.length > 280 ? (
                  <Text>{text.slice(0, 280)} ...</Text>
                ) : (
                  <Text>{text}</Text>
                )}
              </Text>
              <Box display={"flex"} flexDirection={"row"}>
                <Button colorScheme="teal" size="sm" m={"0 1vw 0 0"}>
                  Edit
                </Button>
                <Box>
                  <DeleteNotePopUp />
                </Box>
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
