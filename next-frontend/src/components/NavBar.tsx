import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import Router from "next/router";
import { ReactNode, useEffect, useState } from "react";
import logo from "../images/logo.png";
import Image from "next/image";

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLogin, setIsLogin] = useState(false);

  let token = null;
  useEffect(() => {
    token = localStorage.getItem("token");
    if (token != null) {
      setIsLogin(true);
    }
  }, []);

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "black")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image src={logo} width={"50px"} height={"50px"} />
            <Link
              href="/"
              textDecoration={"none"}
              textDecor={"none"}
              fontSize={"30px"}
            >
              BookBuzz
            </Link>
          </div>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode} boxShadow={"none !important"}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
              {!isLogin && (
                <Link href="/login" textDecoration={"none !important"}>
                  <Button
                    boxShadow={"none !important"}
                    colorScheme="teal"
                    variant="solid"
                  >
                    Login
                  </Button>
                </Link>
              )}
              {!isLogin && (
                <Link href="/register" textDecoration={"none !important"}>
                  <Button
                    boxShadow={"none !important"}
                    colorScheme="teal"
                    variant="solid"
                  >
                    Register
                  </Button>
                </Link>
              )}
              {isLogin && (
                <Menu>
                  <MenuButton
                    as={Button}
                    variant={"link"}
                    cursor={"pointer"}
                    boxShadow={"none !important"}
                    minW={0}
                  >
                    <Avatar
                      size={"sm"}
                      src={"https://avatars.dicebear.com/api/male/username.svg"}
                    />
                  </MenuButton>
                  <MenuList alignItems={"center"}>
                    <br />
                    <Center>
                      <Avatar
                        size={"2xl"}
                        src={
                          "https://avatars.dicebear.com/api/male/username.svg"
                        }
                      />
                    </Center>
                    <br />
                    <Center>
                      <p>Username</p>
                    </Center>
                    <br />
                    <MenuDivider />
                    <Link href="/profile">
                      <MenuItem>Profile</MenuItem>
                    </Link>
                    <Link href="/books">
                      <MenuItem>Books</MenuItem>
                    </Link>
                    <MenuItem>Account Settings</MenuItem>
                    <MenuItem
                      onClick={() => {
                        localStorage.removeItem("token");
                        localStorage.removeItem("userId");
                        window.location.reload();
                      }}
                    >
                      Logout
                    </MenuItem>
                  </MenuList>
                </Menu>
              )}
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
