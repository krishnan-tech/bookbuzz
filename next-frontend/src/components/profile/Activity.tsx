import React from "react";
import { Box, Button, Link } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

interface Props {}

const SideButton = (props) => {
  return (
    <Link href={props.to} textDecoration={"none !important"}>
      <Button
        rightIcon={<ArrowForwardIcon />}
        colorScheme="teal"
        variant="outline"
        display={"block"}
        width={"100%"}
      >
        {props.children}
      </Button>
    </Link>
  );
};

const Activity = (props: Props) => {
  return (
    <Box>
      {/* For Activity */}
      <Box>
        <SideButton to="/profile">Daily Activity</SideButton>
        <SideButton to="/profile/follow">Followers</SideButton>
        <SideButton to="/profile/notes">Notes</SideButton>
        <SideButton to="/#">Currently Reading</SideButton>
        <SideButton to="/#">Want To Read</SideButton>
        <SideButton to="/#">Already Readed</SideButton>
      </Box>
    </Box>
  );
};

export default Activity;
