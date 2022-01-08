import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import ProfileSideBar from "./ProfileSideBar";

interface Props {
  children: any;
}

const Profile: React.FC<Props> = ({ children }) => (
  <Flex
    m={"4vh 0 4vh 0"}
    border={"2px solid red"}
    direction={{ base: "column", lg: "row" }}
  >
    <Box border={"2px solid green"} minW={"30%"}>
      <ProfileSideBar />
    </Box>
    <Box border={"2px solid yellow"} w={"full"}>
      {children}
    </Box>
  </Flex>
);

export default Profile;
