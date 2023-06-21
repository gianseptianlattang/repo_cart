import { Button, useDisclosure } from "@chakra-ui/react";
import ModalLogin from "./ModalLogin";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { isLogin } from "../card/counterSlice";

export const ButtonLogin = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const login = useSelector((state) => state.counter.login);
  const dispatch = useDispatch();
  console.log(login);

  function logout() {
    localStorage.removeItem("login");
    dispatch(isLogin(localStorage.getItem("login")));
  }
  return (
    <>
      {login ? (
        <Button colorScheme="green" onClick={() => logout()}>
          Logout
        </Button>
      ) : (
        <Button colorScheme="green" onClick={onOpen}>
          Login
        </Button>
      )}
      <ModalLogin isOpen={isOpen} onClose={onClose} />
    </>
  );
};
