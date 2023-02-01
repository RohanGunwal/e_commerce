import { Flex } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import SelectCategory from "./components/SelectCategory";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSelectCategory = (category) => {
    if (category) {
      axios
        .get(`https://dummyjson.com/products/category/${category}`)
        .then((res) => {
          setData(res.data.products);
          setLoading(false);
        })
        .catch((err) => console.log(`Select Category Error : ${err}`));
    } else {
      productSearch();
    }
  };

  const handleSearch = (searchValue) => {
    axios
      .get(`https://dummyjson.com/products/search?q=${searchValue}`)
      .then((res) => {
        setData(res.data.products);
        setLoading(false);
      })
      .catch((err) => console.log(`Search Error : ${err}`));
  };

  const productSearch = () => {
    axios
      .get("https://dummyjson.com/products?limit=100")
      .then((res) => {
        setData(res.data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.log(`Products Error: ${err}`);
      });
  };

  useEffect(() => productSearch, []);

  return (
    <>
      <Navbar productSearch={productSearch} setLoading={setLoading} />
      <Flex
        padding={"0px 20px"}
        justify={"space-around"}
        gap={{ base: "10px" }}
        direction={{ base: "column", md: "row" }}
        align={{ base: "center" }}
      >
        <SelectCategory
          handleSelectCategory={handleSelectCategory}
          setLoading={setLoading}
        />
        <SearchBar handleSearch={handleSearch} setLoading={setLoading} />
      </Flex>
      {loading ? (
        <Loading />
      ) : (
        <Routes>
          <Route path="/" element={<Home data={data} />} />
        </Routes>
      )}
    </>
  );
}

export default App;
