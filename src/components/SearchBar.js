import { Flex, Input, Icon, Button } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import React, { useState } from "react";

export default function SearchBar(props) {
  const { handleSearch, setLoading } = props;
  const [inputValue, setInputValue] = useState("");
  return (
    <Flex width={"400px"} justify="center" align="center">
      <Icon
        position={"relative"}
        left={"25px"}
        as={SearchIcon}
        color="gray.300"
      />
      <Input
        position={"relative"}
        type="search"
        placeholder="Search for products"
        _placeholder={{ color: "gray.400" }}
        pl={"30px"}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button
        ml={2}
        variant="solid"
        colorScheme={"blue"}
        padding={"0px 20px"}
        onClick={() => {
          handleSearch(inputValue);
          setInputValue("");
          setLoading(true);
        }}
      >
        Search
      </Button>
    </Flex>
  );
}
