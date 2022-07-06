import React from "react";
import { CartState } from "../Context/Context";
import { withRouter } from "react-router";
import Rating from "./Rating";
import "./SingleProductDetails.css";
import Header from "./Header";
import FooterWrapper from "./FooterWrapper";
import { Button } from "react-bootstrap";

const SingleProductDetails = (props) => {
  const {
    state: { selectedProduct },
    dispatch,
  } = CartState();

  return (
    <div>
      <Header />
      <div className="product">
        <div className="selected-product">
          <div>
            <h5>Product Name: {selectedProduct.name}</h5>
          </div>
          <div>
            <img src={selectedProduct.image} alt="img" />
          </div>
        </div>
        <div className="selected-product">
          <div>
            <p>Price: {selectedProduct.price.split(".")[0]} Euro</p>
          </div>
          <div>
            <p>
              Delivery:
              {selectedProduct.fastDelivery ? (
                <div>Fast Delivery </div>
              ) : (
                <div>5 days delivery</div>
              )}
            </p>
          </div>
          <div>
            <p>
              Rating: <Rating rating={selectedProduct.ratings} />{" "}
            </p>
          </div>
          <div>
            <Button
              onClick={() => {
                dispatch({
                  type: "ADD_TO_CART",
                  payload: selectedProduct,
                });
              }}
              disabled={!selectedProduct.inStock}
              variant="secondary"
              style={{ margin: "20px 0" }}
            >
              {!selectedProduct.inStock ? "Out of Stock" : "Add to Cart"}
            </Button>
          </div>
          <div>
            <Button
              onClick={() => {
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: selectedProduct,
                });
              }}
              variant="danger"
            >
              Remove from Cart
            </Button>
          </div>
        </div>
      </div>

      <FooterWrapper />
    </div>
  );
};
export default withRouter(SingleProductDetails);
