import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Button,
  ButtonGroup,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Container } from "../components/Container";

interface Props {}

const editprofile = (props: Props) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const handleNameChange = (e) => setName(e.target.value);
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name, username, email);
    setName("");
    setUsername("");
    setEmail("");
  };

  return (
    <Box>
      <NavBar />
      <Container
        display={"flex"}
        justifyContent={"center"}
        flexDirection={"row"}
        border={"1px solid black"}
      >
        <Box
          // border={"1px solid red"}
          w={"70vw"}
          h={"80vh"}
          // display={"flex"}
          // justifyContent={"center"}
          // flexDirection={"column"}
        >
          <FormControl onSubmit={submitHandler}>
            <FormLabel htmlFor="name" pt={"8vh"}>
              Name
            </FormLabel>
            <Input
              id="name"
              type="name"
              value={name}
              onChange={handleNameChange}
            />
            <FormLabel htmlFor="email" pt={"4vh"}>
              Email
            </FormLabel>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
            <FormLabel htmlFor="username" pt={"4vh"}>
              Username
            </FormLabel>
            <Input
              id="username"
              type="username"
              value={username}
              onChange={handleUsernameChange}
            />
            <Button
              colorScheme="teal"
              size="sm"
              mt={"4vh"}
              // onSubmit={submitHandler}
              onClick={submitHandler}
            >
              Submit
            </Button>
          </FormControl>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default editprofile;
