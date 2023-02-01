import {
  Button,
  Divider,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React from "react";

export default function ProductDescription({ open, handleClose, data }) {
  return (
    <Modal isOpen={open} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{data.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Image src={data.thumbnail} />
          <Text mt={2} color="gray.600">
            {data.description}
          </Text>
          <Text mt={2} fontSize={"2xl"} color="blue.500">
            ${data.price}
          </Text>
        </ModalBody>
        <Divider />
        <ModalFooter>
          <Button variant={"solid"} mr={2} colorScheme="blue">
            Buy Now
          </Button>
          <Button>Add to Cart</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
