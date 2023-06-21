import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useFormik } from "formik";
import axios from "axios";

import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { isLogin } from "../card/counterSlice";
import { ButtonRegister } from "./ButtonModalLogin";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  password: Yup.string()
    .min(7, "Password must be 7 characters minimum")
    .max(15, "Password must be less than 16 character")
    .required("Password is required"),
});

const fetchUser = async (email) => {
  const { data } = await axios.get(
    `http://localhost:3000/users?email=${email}`
  );
  console.log(data[0].email);
};

export default function ModalLogin({ isOpen, onClose }) {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      fetchUser(values.email);
      localStorage.setItem("login", "true");
      dispatch(isLogin(localStorage.getItem("login")));
      onClose();
    },
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Sign in your account</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={5}>
          <form onSubmit={formik.handleSubmit}>
            <Flex
              align={"center"}
              justify={"center"}
              bg={useColorModeValue("gray.50", "gray.800")}
            >
              <Stack spacing={1} mx={"auto"} py={3} px={1}>
                <Stack align={"center"}>
                  <Heading fontSize={"4xl"} textAlign={"center"}>
                    Sign in
                  </Heading>
                  <Text fontSize={"lg"} color={"gray.600"}>
                    to enjoy all of our cool articles ✌️
                  </Text>
                </Stack>
                <Box
                  rounded={"lg"}
                  bg={useColorModeValue("white", "gray.700")}
                  boxShadow={"lg"}
                  p={8}
                >
                  <Stack spacing={4}>
                    <FormControl
                      isInvalid={formik.touched.email && formik.errors.email}
                    >
                      <FormLabel>Email</FormLabel>
                      <Input
                        id="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                      />
                      {formik.touched.email && formik.errors.email && (
                        <FormErrorMessage>
                          {formik.errors.email}
                        </FormErrorMessage>
                      )}
                    </FormControl>
                    <FormControl
                      id="password"
                      isInvalid={
                        formik.touched.password && formik.errors.password
                      }
                    >
                      <FormLabel>Password</FormLabel>
                      <InputGroup>
                        <Input
                          id="password"
                          name="password"
                          type="password"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={formik.values.password}
                        />
                        <InputRightElement h={"full"}>
                          <Button
                            variant={"ghost"}
                            onClick={() =>
                              setShowPassword((showPassword) => !showPassword)
                            }
                          >
                            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                      {formik.touched.password && formik.errors.password && (
                        <FormErrorMessage>
                          {formik.errors.password}
                        </FormErrorMessage>
                      )}
                    </FormControl>
                    <Stack spacing={10} pt={2}>
                      <Button type="submit" width="full" colorScheme="blue">
                        Sign in
                      </Button>
                    </Stack>
                    <Stack pt={6}>
                      <Text align={"center"}>
                        No account? <ButtonRegister data="register" />
                      </Text>
                    </Stack>
                  </Stack>
                </Box>
              </Stack>
            </Flex>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
