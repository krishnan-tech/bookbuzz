import { Box } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

interface registerProps {}

export const register: React.FC<registerProps> = ({}) => {
  return (
    <Box>
      <Box>Register Here</Box>
      <Link href="/">Back</Link>
    </Box>
  );
};

export default register;
