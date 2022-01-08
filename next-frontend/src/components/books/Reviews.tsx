import React from "react";
import { Box, Text, Flex, Heading, WrapItem, Avatar } from "@chakra-ui/react";
import PostReviewForm from "./PostReviewForm";

const Review = (props: any) => {
  return (
    <Box m={"3vh 0"}>
      <Flex>
        <WrapItem>
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        </WrapItem>
        <Heading fontSize={"2xl"} margin={"auto 1vw"}>
          {props.name}
        </Heading>
      </Flex>
      <Text m={"1vh 0"}>{props.children}</Text>
    </Box>
  );
};

interface Props {}

const Reviews = (props: Props) => {
  return (
    <Box border={"1px solid green"} p={"2vw"}>
      <Heading as="u">FRIEND REVIEWS</Heading>
      <Box m={"2vw 0"}>
        <PostReviewForm />
      </Box>
      {[1, 2, 3, 4].map((index) => (
        <Review name={"Bob"} key={index}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, sed
          voluptatibus. Eveniet, porro cupiditate! Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Esse, sed voluptatibus. Eveniet, porro
          cupiditate!
        </Review>
      ))}
    </Box>
  );
};

export default Reviews;
