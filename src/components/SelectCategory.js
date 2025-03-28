import { Select } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function SelectCategory(props) {
  const { handleSelectCategory, setLoading } = props;
  const [categories, setCategories] = useState([]);

  const handleChange = (e) => {
    handleSelectCategory(e.target.value);
    setLoading(true);
  };

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => {
        console.log(`Categories Error : ${err}`);
      });
  }, []);

  return (
    <>
      <Select
        placeholder="Select Category"
        width={"200px"}
        onChange={(e) => handleChange(e)}
      >
        {categories?.map((e, index) => (
          <option style={{ textTransform: "capitalize" }} key={index} value={e.name}>
            {e.name}
          </option>
        ))}
      </Select>
    </>
  );
}
