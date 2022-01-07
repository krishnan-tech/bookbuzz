import Link from "next/link";
import { Container } from "../components/Container";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { SampleComponent } from "../components/SampleComponent";

const Index = () => (
  <Container height="100vh">
    <DarkModeSwitch />
    <SampleComponent />

    <Link href="/register">Register Here</Link>
  </Container>
);

export default Index;
