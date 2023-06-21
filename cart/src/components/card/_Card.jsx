import React from "react";
import { CardFrame } from "./Card";
import { Box, SimpleGrid } from "@chakra-ui/react";

export const CardShow = () => {
  return (
    <Box p={10}>
      <SimpleGrid columns={4} spacing={10} justifyItems={"center"}>
        <CardFrame />
      </SimpleGrid>
    </Box>
  );
};
