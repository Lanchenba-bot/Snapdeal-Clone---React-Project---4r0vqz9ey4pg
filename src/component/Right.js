import React, { useContext, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import ContextData from "../context/product-data";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../style/right.css";
import { useNavigate } from "react-router-dom";

const Right = () => {
  const { allProducts, active, search, setSelect } = useContext(ContextData);
  const [array, setArray] = useState([]);
  const [page, setPage] = useState(0);
  // const navigate=useNavigate();

  function paginate(Products) {
    const perPage = 6;
    const totalPages = Math.ceil(Products.length / perPage);
    const product = Array.from({ length: totalPages }, (_, idx) => {
      return Products.slice(idx * perPage, idx * perPage + perPage);
    });
    return product;
  }

  function handlePageClick(e) {
    setPage(e.selected);
  }

  let arr = active.data?.map((data) => {
    return (
      <>
        <div
          onClick={() => {
            setSelect(data);
            // navigate("/desc");
          }}
          key={data.id}
        >
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={data.thumbnail}
              className="product-image"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>{data.description}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </>
    );
  });

  let srch = allProducts
    .filter((data) => {
      return (
        data.title.toLowerCase().includes(search) ||
        data.description.toLowerCase().includes(search)
      );
    })
    .map((data) => {
      return (
        <>
          <div
            onClick={() => {
              setSelect(data);
              // navigate("/desc");
            }}
            key={data.id}
          >
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={data.thumbnail}
                className="product-image"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>{data.description}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </>
      );
    });

  useEffect(() => {
    const setarr = () => {
      setArray(paginate(allProducts));
    };
    setarr();
  }, [active]);

  let all = array[page]?.map((data) => {
    return (
      <>
        <div
          onClick={() => {
            setSelect(data);
            //helo
          }}
          key={data.id}
        >
          <Card style={{ width: "18rem" }} className="card">
            <Card.Img
              variant="top"
              className="product-image"
              src={data.thumbnail}
            />
            <Card.Body>
              <Card.Title>{}</Card.Title>
              <Card.Text>{data.description}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </>
    );
  });

  return (
    <div className="right-side">
      <div className="paste-pro">
        {search ? srch : active.data ? arr : all ? all : <></>}
      </div>
      <div style={{ marginTop: "30px" }}>
        {!active.data ? (
          <ReactPaginate
            previousLabel="previous"
            nextLabel="next"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            pageCount={array.length}
            pageRangeDisplayed={4}
            marginPagesDisplayed={2}
            onPageChange={handlePageClick}
            containerClassName="pagination justify-content-center"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            activeClassName="active"
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Right;
