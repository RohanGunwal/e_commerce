import {
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

export default function Product({ data, setOpen, setModalData }) {
  return (
    <Card
      cursor={"pointer"}
      onClick={() => {
        setOpen(true);
        setModalData(data);
      }}
    >
      <CardBody>
        <Image src={data.thumbnail} alt="product_image" height={"150px"} />
        <Stack mt={6} spacing={3}>
          <Heading size="md">{data.title}</Heading>
          <Text noOfLines={2}>{data.description}</Text>
          <Text fontSize={"2xl"} color="blue.500">
            ${data.price}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
}
