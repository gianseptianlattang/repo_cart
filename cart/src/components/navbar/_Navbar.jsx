import React from "react";
import { ImagesTokopedia } from "./ImageTokopedia";
import { Box, Flex, Spacer } from "@chakra-ui/react";
import { Kategori } from "./Kategori";
import { SearchNavbar } from "./Search";
import { IconBadges } from "./IconBadges";
import { RxDividerVertical } from "react-icons/rx";
import { ButtonLogin } from "./ButtonLogin";

export const Navbar = () => {
  return (
    <Box
      w={"100%"}
      p={"10px"}
      borderBottom={"1px"}
      borderBottomColor={"gray.300"}
    >
      <Flex px={"30px"} alignItems="center" gap={5}>
        <ImagesTokopedia />
        <Kategori />
        <SearchNavbar />
        <Spacer />
        <IconBadges />
        <RxDividerVertical color="gray" size="40px" />
        <ButtonLogin></ButtonLogin>
      </Flex>
    </Box>
  );
};
