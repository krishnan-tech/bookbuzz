import React from "react";
import { Box } from "@chakra-ui/react";
import UserInfo from "./UserInfo";
import Activity from "./Activity";

interface Props {}

const ProfileSideBar = (props: Props) => {
  return (
    <Box>
      <UserInfo />
      <Activity />
    </Box>
  );
};

export default ProfileSideBar;
