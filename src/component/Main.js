import React, { useContext, useEffect, useState } from "react";
import ContextData from "../context/product-data";
import Left from "./Left";
import Right from "./Right";
import '../style/main.css'
import Description from "./Description";



const Main = () => {
  const { select, setSelect, active,  } = useContext(ContextData);
  useEffect(()=>{
    const arr=[];
    setSelect(arr);
    console.log(active);
  },[active])
  return (
    <div className="display-left-right">     
      <Left />
      {select.title?<Description />:<Right/>}
      {/* <div></div> */}
    </div>
  );
};

export default Main;
