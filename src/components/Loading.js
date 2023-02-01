import { Flex, Spinner } from "@chakra-ui/react";
import React from "react";

export default function Loading() {
  return (
    <Flex
      height={"80vh"}
      justify="center"
      align={"center"}
      fontSize="20pt"
      letterSpacing={"1px"}
      color="gray.400"
    >
      Loading <Spinner ml={2} size="md" />
    </Flex>
  );
}
