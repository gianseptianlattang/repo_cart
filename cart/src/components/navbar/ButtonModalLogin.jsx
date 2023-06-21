import { Box, Button, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import ModalRegister from "./ModalRegister";
import ModalLogin from "./ModalLogin";

export const ButtonRegister = (modal) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const [isOpen, setIsOpen] = useState(false);
  // const handleOpenModal = () => {
  //   setIsOpen(true);
  // };
  // const handleCloseModal = () => {
  //   setIsOpen(false);
  // };

  if (modal.data === "register") {
    return (
      <Box>
        <Button variant={"link"} color={"blue.500"} onClick={onOpen}>
          Create one
        </Button>
        <ModalRegister isOpen={isOpen} onClose={onClose} />
      </Box>
    );
  } else if (modal.data === "login") {
    return (
      <Box>
        <Button variant={"link"} color={"blue.500"} onClick={onOpen}>
          Login
        </Button>
        <ModalLogin isOpen={isOpen} onClose={onClose} />
      </Box>
    );
  }
};
