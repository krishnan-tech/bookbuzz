import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import ProfileSideBar from "./ProfileSideBar";

interface Props {
  children: any;
}

const Profile: React.FC<Props> = ({ children }) => (
  <Flex
    m={"4vh 0 4vh 0"}
    direction={{ base: "column", lg: "row" }}
  >
    <Box minW={"30%"}>
      <ProfileSideBar />
    </Box>
    <Box w={"full"}>
      {children}
    </Box>
  </Flex>
);

export default Profile;
