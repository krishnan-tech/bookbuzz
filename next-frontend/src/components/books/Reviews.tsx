import React, { useEffect, useState } from "react";
import { Box, Text, Flex, Heading, WrapItem, Avatar } from "@chakra-ui/react";
import PostReviewForm from "./PostReviewForm";
import { get_review_api } from "../../allApi";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const { bookId } = router.query;
  const [data, setData] = useState(undefined);

  useEffect(() => {
    async function fetchMyAPI() {
      if (bookId) {
        const body = {
          bookId,
        };
        const user = await get_review_api(body);
        setData(user.data);
      }
    }
    fetchMyAPI();
  }, [bookId]);

  return (
    <Box width={"100%"} p={"2vw"}>
      <Heading as="u">FRIEND REVIEWS</Heading>
      <Box m={"2vw 0"}>
        <PostReviewForm />
      </Box>
      {data ? (
        data.map((value, index) => (
          <Review name={"krishnan"} key={index}>
            {value.review}
          </Review>
        ))
      ) : (
        <Text>No Review</Text>
      )}
    </Box>
  );
};

export default Reviews;
