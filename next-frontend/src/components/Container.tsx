import { Flex, FlexProps, useColorMode } from "@chakra-ui/react";

export const Container = (props: FlexProps) => {
  const { colorMode } = useColorMode();

  const bgColor = { light: "gray.50", dark: "gray.800" };

  const color = { light: "black", dark: "white" };
  return (
    <Flex
      direction="column"
      // alignItems="center"
      justifyContent="space-between"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      p={"0 3vw"}
      {...props}
    />
  );
};
