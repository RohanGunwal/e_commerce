import { Button, Flex, Text, Icon } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import React from "react";

export default function Pagination(props) {
  const { numberOfPages, nextPage, prevPage, currentPage, setCurrentPage } =
    props;
  const pages = [];
  for (let i = 0; i < numberOfPages; i++) {
    pages.push(i + 1);
  }
  return (
    <Flex
      width={"700px"}
      margin={"10px auto"}
      align="center"
      justify={"center"}
    >
      <Button onClick={() => prevPage()}>
        <Icon as={ChevronLeftIcon} />
      </Button>
      <Flex
        align="center"
        justify={"center"}
        margin="0px 5px"
        border={"1px solid"}
        borderColor="gray.300"
        borderRadius={2}
        borderRight="0"
      >
        {pages.map((e, index) => (
          <Text
            padding={"5px 15px"}
            borderRight="1px solid"
            borderRightColor={"gray.300"}
            borderRadius={2}
            key={index}
            backgroundColor={currentPage === e ? "blue.500" : ""}
            color={currentPage === e ? "white" : ""}
            onClick={() => setCurrentPage(e)}
            cursor="pointer"
          >
            {e}
          </Text>
        ))}
      </Flex>
      <Button onClick={() => nextPage()}>
        <Icon as={ChevronRightIcon} />
      </Button>
    </Flex>
  );
}
