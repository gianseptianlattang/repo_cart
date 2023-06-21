import {
  Badge,
  Box,
  IconButton,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { CgShoppingCart } from "react-icons/cg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const IconBadges = () => {
  const cartItem = useSelector((state) => state.counter.cart);
  return (
    <Box>
      <Popover trigger={"hover"}>
        <PopoverTrigger>
          <Link to={"/cart"}>
            <IconButton
              variant="ghost"
              colorScheme="blackAlpha"
              aria-label="Call Sage"
              fontSize="20px"
              icon={<CgShoppingCart size={"30px"} />}
            />
          </Link>
        </PopoverTrigger>
        <Badge
          variant="solid"
          colorScheme="red"
          borderRadius={"full"}
          position={"absolute"}
        >
          {cartItem.length}
        </Badge>
        <Portal>
          <PopoverContent>
            <PopoverHeader>Cart</PopoverHeader>
            <PopoverCloseButton />

            {cartItem.map((item) => {
              return (
                <PopoverBody>
                  <Link>
                    <Text>{item.title}</Text>
                  </Link>
                </PopoverBody>
              );
            })}
          </PopoverContent>
        </Portal>
      </Popover>
    </Box>
  );
};
