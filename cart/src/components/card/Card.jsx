import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { hotelCards } from "./DataCard";
import { useDispatch } from "react-redux";
import { addTocart } from "./counterSlice";

export const CardFrame = () => {
  const dispatch = useDispatch();
  return hotelCards.map((item) => {
    return (
      <Card maxW="sm">
        <CardBody>
          <Image
            src={item.imageSrc}
            alt={item.title}
            borderRadius="lg"
            boxSize="300px"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{item.title}</Heading>
            <Text>{item.description}</Text>
            <Text color="blue.600" fontSize="2xl">
              {item.pricingText}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button
              variant="solid"
              colorScheme="green"
              onClick={() => dispatch(addTocart(item))}
            >
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    );
  });
};
