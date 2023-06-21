import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { Cart } from "./Cart";

export const CartShow = () => {
  return (
    <Box p={10}>
      <SimpleGrid columns={4} spacing={10} justifyItems={"center"}>
        <Cart />
      </SimpleGrid>
    </Box>
  );
};
