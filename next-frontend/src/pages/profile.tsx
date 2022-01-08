import { Box } from "@chakra-ui/react";
import React from "react";
import { Container } from "../components/Container";
import Footer from "../components/Footer";
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
      <Footer />
    </Box>
  );
};

export default profile;
