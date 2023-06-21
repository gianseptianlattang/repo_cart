import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const ImagesTokopedia = () => {
  return (
    <Box>
      <Link to={"/"}>
        <Image src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/e5b8438b.svg" />
      </Link>
    </Box>
  );
};
