import { Box } from "@chakra-ui/react";
import React from "react";
import { Container } from "../components/Container";
import Nav from "../components/NavBar";
import Graph from "../components/profile/Graph";

interface profileProps {}

export const profile: React.FC<profileProps> = ({}) => {
  return (
    <Box>
      <Nav />
      <Container>
        <Graph />
      </Container>
    </Box>
  );
};

export default profile;
