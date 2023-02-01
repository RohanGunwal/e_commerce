import { Flex, Text } from "@chakra-ui/react";
import React from "react";

export default function Navbar({ productSearch, setLoading }) {
  return (
    <>
      <Flex
        width={"full"}
        padding={{ base: "10px 10px", md: "10px 20px" }}
        backgroundColor={"gray.50"}
        mb={3}
      >
        <Text
          color={"blue.500"}
          fontWeight={"600"}
          fontSize={{ base: "15pt", md: "20pt" }}
          cursor="pointer"
          onClick={() => {
            productSearch();
            setLoading(true);
          }}
        >
          Ecom
        </Text>
      </Flex>
    </>
  );
}
