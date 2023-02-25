import React, { createContext } from "react";

const ContextData = createContext({
  allProducts: [],
  categories: [],
  active: [],
  search: "",
  select: [],
  open: "",
  isUserLogin: '',
  setIsUserLogin: (data) => {},
  setOpen: (data) => {},
  setSelect: (data) => {},
  setAllProducts: (data) => {},
  setCategories: (data) => {},
  setActive: (data) => {},
  setSearch: (data) => {},
});

export default ContextData;
