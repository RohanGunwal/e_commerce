import { Divider, Flex, Grid } from "@chakra-ui/react";
import React, { useState } from "react";
import Pagination from "./Pagination";
import Product from "./Product";
import ProductDescription from "./ProductDescription";

export default function Home(props) {
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const { data } = props;
  let numberOfPages = Math.ceil(data.length / 10);

  const nextPage = () => {
    if (currentPage < numberOfPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Divider mt={5} mb={3} />
      <Grid
        padding="0px 20px"
        templateColumns={{
          base: "1fr",
          md: "repeat(3,1fr)",
          lg: "repeat(5,1fr)",
        }}
        gap="20px"
      >
        {data
          .slice((currentPage - 1) * 10, currentPage * 10)
          .map((e, index) => (
            <Product
              data={e}
              key={index}
              setOpen={setOpen}
              setModalData={setModalData}
            />
          ))}
      </Grid>
      <ProductDescription
        open={open}
        handleClose={handleClose}
        data={modalData}
      />
      <Pagination
        numberOfPages={numberOfPages}
        nextPage={nextPage}
        prevPage={prevPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}
