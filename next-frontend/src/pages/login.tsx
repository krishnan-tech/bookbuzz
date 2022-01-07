import { Box } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

interface loginProps { }

export const login: React.FC<loginProps> = ({ }) => {
    return (
        <Box>
            <Box>login Here</Box>
            <Link href="/">Back</Link>
        </Box>
    );
};

export default login;
