import React, { useContext, useEffect, useState } from "react";
import "../style/searchbar.css";
import { BsSearch } from "react-icons/bs";
import ContextData from "../context/product-data";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import formatAmount from "../context/constant";
import { Button } from "@mui/material";
import { FaUser } from "react-icons/fa";

const Searchbar = () => {
  const { search, setSearch, setOpen, isUserLogin, setIsUserLogin } =
    useContext(ContextData);
  const navigate = useNavigate();
  const navii=!isUserLogin?'/login':'/cart';
  const { totalQuantity, totalCartPrice } = useSelector((state) => state);
  return (
      <div className="second-nav">
        <div className="snap-logo">
          <img
            src="https://logos-download.com/wp-content/uploads/2016/10/SnapDeal_logo_logotype.png"
            onClick={() => navigate("/") } alt="logo"
          />
        </div>
        <div className="input-search">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)} placeholder="Search products and brands"
          />
          <div className="magnifine">
            
            <BsSearch />
            <span >search</span>
          </div>
        </div>
        <div className="nav2">
          <Link
            style={{
              textDecoration: "none",
              color: "#fff",
              border: '2px solid white',
              borderRadius: '4px',
              padding: '0.3rem'
            }}
            onClick={() => {
              setOpen(true);
              // navigate("/login");
            }}
            to={navii}
          >
            Cart: 
            <span style={{ paddingLeft:'0.2em', marginBottom: "10px" }}>
               {totalQuantity}
            </span>
          </Link>
        </div>
        <div className="userName">
          {!isUserLogin ? (
            <Button style={{marginRight: '1rem'}}
              variant="contained"
              onClick={() => {
                setOpen(true);
                navigate("/login");
              }}
            >
              <FaUser />
              Login
            </Button>
          ) : (
            <Button
              variant="contained" 
              onClick={() => {
                setIsUserLogin(false);
                // setOpen(true);
                localStorage.clear();
              }}
            >
              <FaUser />
            </Button>
          )}
        </div>
      </div>
  );
};

export default Searchbar;
