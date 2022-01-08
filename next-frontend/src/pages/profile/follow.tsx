import React from "react";
import { Box } from "@chakra-ui/react";
import Nav from "../../components/NavBar";
import Friends from "../../components/profile/Friends";
import { Container } from "../../components/Container";

interface followProps {}

export const follow: React.FC<followProps> = ({}) => {
  return (
    <Box>
      <Nav />
      <Container>
        <Friends />
      </Container>
    </Box>
  );
};

export default follow;
