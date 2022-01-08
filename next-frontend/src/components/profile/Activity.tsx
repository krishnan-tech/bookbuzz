import React from "react";
import { Box, Button, Link } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

interface Props {}

const SideButton = (props) => {
  return (
    <Button
      rightIcon={<ArrowForwardIcon />}
      colorScheme="teal"
      variant="outline"
      display={"block"}
      width={"100%"}
    >
      <Link href={props.to}>{props.children}</Link>
    </Button>
  );
};

const Activity = (props: Props) => {
  return (
    <Box border={"2px solid purple"}>
      {/* For Activity */}
      <Box>
        <SideButton to="/profile">Daily Activity</SideButton>
        <SideButton to="/profile/follow">Followers(0)</SideButton>
        <SideButton to="/profile/notes">Notes</SideButton>
        <SideButton to="/#">Currently Reading</SideButton>
        <SideButton to="/#">Want To Read</SideButton>
        <SideButton to="/#">Already Readed</SideButton>
      </Box>
    </Box>
  );
};

export default Activity;
