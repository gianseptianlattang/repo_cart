import { SearchIcon } from "@chakra-ui/icons";
import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";

export const SearchNavbar = () => {
  return (
    <Box>
      <InputGroup>
        <InputLeftElement fontSize="20px" pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input
          color="gray.300"
          focusBorderColor="blue.400"
          borderRadius={"10px"}
          placeholder="Cari di Tokopedia"
        />
      </InputGroup>
    </Box>
  );
};
