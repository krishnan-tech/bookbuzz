import React, { useState } from "react";
import {
  Box,
  Text,
  Center,
  Stack,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";
import Profile from "./Profile";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
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

const dataLine = {
  labels: [
    "2013-14",
    "2014-15",
    "2015-16",
    "2016-17",
    "2017-18",
    "2018-19",
    "2019-20",
  ],
  datasets: [
    {
      label: "Daily readed page",
      data: [2.61, 2.87, 3.03, 3.65, 3.46, 3.7, 4.48],
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
const Graph = (props: Props) => {
  const [no_of_days, set_no_of_days] = useState(0);
  const [no_of_friends, set_no_of_friends] = useState(0);

  return (
    <Profile>
      <Center py={6}>
        <Box
          border={"2px solid green"}
          display={"flex"}
          flexDirection={"column"}
          w={"85%"}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          rounded={"md"}
          p={6}
          overflow={"hidden"}
        >
          <Stack justifyContent={"space-around"} height={"90vh"}>
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
                <TOP>{no_of_friends} of Friends</TOP>
                <TOP>abc</TOP>
              </SimpleGrid>
            </Box>
            {/* Graph */}

            <Box
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
