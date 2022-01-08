import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Router from "next/router";
import React, { useState } from "react";
import { login_api } from "../allApi";
import NavBar from "../components/NavBar";
import { CheckAuth } from "../utils/checkAuth";

interface loginProps {}

export const login: React.FC<loginProps> = ({}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (event) => {
    event.preventDefault();

    const body = {
      email,
      password,
    };
    const user = (await login_api(body)) as CheckAuth; // as CheckAuth;

    if (user.error) {
      alert(user.error);
    }

    if (user.token) {
      localStorage.setItem("token", user.token);
      localStorage.setItem("userId", user.user._id);
      setEmail("");
      setPassword("");
      // alert("Login successfull!!");
      Router.push("/");
    }
  };

  return (
    <Box>
      <NavBar />
      <Flex
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
        mt={12}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign in to your account</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool <Link color={"blue.400"}>features</Link>{" "}
              ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <Stack spacing={10}>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={submitHandler}
                >
                  Sign in
                </Button>
              </Stack>
              <Stack>
                <Link color={"blue.400"}>Forgot password?</Link>
                <Text>
                  Don't have an account ?{" "}
                  <Link
                    href={"/register"}
                    color={"blue.400"}
                    outline={"none !important"}
                  >
                    Register
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      {/* <Link href="/">Back</Link> */}
    </Box>
  );
};

export default login;
