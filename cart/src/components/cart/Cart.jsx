import { Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

export const Cart = () => {
  const cartItem = useSelector((state) => state.counter.cart);
  return cartItem.map((item) => {
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
      </Card>
    );
  });
};
