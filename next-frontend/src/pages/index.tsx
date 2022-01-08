import { Box } from "@chakra-ui/react";
import { Container } from "../components/Container";
import Footer from "../components/Footer";
import { Home } from "../components/index/Home";
import NavBar from "../components/NavBar";

const Index = () => (
  <Box>
    <NavBar />
    <Container>
      <Home />
    </Container>
    <Footer />
  </Box>
);

export default Index;
