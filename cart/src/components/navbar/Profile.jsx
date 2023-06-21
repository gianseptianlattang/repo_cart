import { Box, Image } from "@chakra-ui/react";
import React from "react";

export const Profile = () => {
  return (
    <Box>
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://bit.ly/dan-abramov"
        alt="Dan Abramov"
      />
    </Box>
  );
};
