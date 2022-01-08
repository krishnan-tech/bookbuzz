import { Box } from "@chakra-ui/react";
import Link from "next/link";
import { Container } from "../components/Container";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import Footer from "../components/Footer";
import { Home } from "../components/index/Home";
import NavBar from "../components/NavBar";
import { SampleComponent } from "../components/SampleComponent";

const Index = () => (
  <Box>
    <NavBar />
    <Container>
      {/* <DarkModeSwitch /> */}
      {/* <SampleComponent /> */}
      {/* <Link href="/register">Register Here</Link> */}
      <Home />
    </Container>
    <Footer />
  </Box>
);

export default Index;
