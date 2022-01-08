import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  Center,
  Stack,
  useColorModeValue,
  SimpleGrid,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  HStack,
  Button,
} from "@chakra-ui/react";
import Profile from "./Profile";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { get_read_pages, profile_api, set_book_page_api } from "../../allApi";
Chart.register(CategoryScale);

const TOP = (props: any) => {
  return (
    <Box
      boxShadow="lg"
      border={"1px solid gray"}
      width={{ base: "100%", md: "16vw" }}
      height={"7vh"}
      textAlign={"center"}
      display={"flex"}
      flexWrap={"wrap"}
      flexDirection={"column"}
      justifyContent={"center"}
      rounded="md"
    >
      {props.children}
    </Box>
  );
};

interface Props {}

const Graph = (props: Props) => {
  const [no_of_days, set_no_of_days] = useState(0);
  const [no_of_max_days, set_no_of_max_days] = useState(0);
  const [no_of_friends, set_no_of_friends] = useState(0);
  const [isLogin, setIsLogin] = useState(false);
  const [currReading, setCurrReading] = useState(null);
  const [dateArr, setDateArr] = useState([]);
  const [pageArr, setPageArr] = useState([]);

  const [pages, set_pages] = useState(0);

  let token = null;
  let userId = null;
  let user_profile = null;

  useEffect(() => {
    async function fetchMyAPI() {
      token = localStorage.getItem("token");
      userId = localStorage.getItem("userId");
      if (token != null) {
        const body = {
          token,
          userId,
        };
        user_profile = await profile_api(body);
        console.log(user_profile);
        setIsLogin(true);
        set_no_of_days(user_profile.data.streak);
        set_no_of_max_days(user_profile.data.max_streak);
        set_no_of_friends(user_profile.data.friends.length);

        setCurrReading(user_profile.data.currentReading);
        console.log("user-->", user_profile.data.currentReading);
      }
    }

    fetchMyAPI();
  }, []);

  useEffect(() => {
    async function fetchMyAPI() {
      let user_id = localStorage.getItem("userId");

      let book_id = currReading[0] as string;

      let read_pages = await get_read_pages({ user_id, book_id });
      let page_obj = read_pages.data.read_pages;

      let page_arr = [];
      let date_arr = [];

      page_obj.map((arr, i) => {
        page_arr.push(arr.page);
        date_arr.push(arr.date);
      });

      setPageArr(page_arr);
      setDateArr(date_arr);
    }

    if (currReading) {
      fetchMyAPI();
    }
  }, [currReading]);

  const SubmitPages = async (event) => {
    event.preventDefault();

    let bookId;
    console.log("------", user_profile);
    console.log("=======", currReading[0]);
    if (currReading != null) bookId = currReading[0];
    else alert("First add book to current reading.");
    const user = await set_book_page_api({ pages, bookId }); // as CheckAuth;

    console.log(user);
    set_pages(0);
  };

  const dataLine = {
    labels: dateArr,
    datasets: [
      {
        label: "Daily readed page",
        data: pageArr,
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(153, 102, 255, 0.8)",
          "rgba(255, 159, 64, 0.8)",
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const optionsBar = {
    plugins: {
      title: {
        display: true,
        text: "Daily Reading Details",
        font: { weight: "bold", size: "20px" },
      },
    },
  };

  return (
    <Profile>
      <Center py={6}>
        <Box
          // border={"2px solid green"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          w={"85%"}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          rounded={"md"}
          p={6}
          overflow={"hidden"}
        >
          <Stack
            justifyContent={"space-around"}
            height={"100%"}
            // border={"1px solid orange"}
          >
            <Box>
              <Text
                color={"green.500"}
                textTransform={"uppercase"}
                fontWeight={800}
                fontSize={"2xl"}
                letterSpacing={1.1}
                display={"flex"}
                justifyContent={"center"}
                as="ins"
              >
                Daily Goal
              </Text>
              <SimpleGrid
                boxShadow={"base"}
                spacing="8"
                p="2vw"
                width={"full"}
                display={"flex"}
                flexDirection={{ base: "column", md: "row", sm: "row" }}
                justifyContent={"space-around"}
                rounded="lg"
              >
                <TOP>{no_of_days} of Days Streek</TOP>
                <TOP>{no_of_max_days} of Max Days Streek</TOP>
                <TOP>{no_of_friends} of Friends</TOP>
              </SimpleGrid>
            </Box>

            <Box p={"2vw"}>
              <FormControl>
                <FormLabel htmlFor="amount">
                  How many pages did you read today ?
                </FormLabel>
                <HStack>
                  <NumberInput max={500} min={0}>
                    <Input
                      id="amount"
                      onChange={(e) => set_pages(Number(e.target.value))}
                    />
                  </NumberInput>
                  <Button colorScheme="teal" size="md" onClick={SubmitPages}>
                    Submit
                  </Button>
                </HStack>
              </FormControl>
            </Box>

            {/* Graph */}
            <Box
              // border={"1px solid yellow"}
              bg={"gray.100"}
              mt={-6}
              minH={"500px"}
              minW={"500px"}
              overflow={"scroll"}
              mx={-6}
              shadow={"xl"}
              mb={6}
              pos={"relative"}
              // border="1px solid black"
            >
              <Line
                // @ts-ignore
                data={dataLine}
                // @ts-ignore
                options={optionsBar}
              />
            </Box>
          </Stack>
        </Box>
      </Center>
    </Profile>
  );
};

export default Graph;
