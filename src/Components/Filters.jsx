import React from "react";
import { Form, Button } from "react-bootstrap";
import Rating from "./Rating";
import { CartState } from "../Context/Context";

const Filters = () => {
  const {
    productState: { byStock, byFastDelivery, sort, byRating },
    productDispatch,
  } = CartState();
  return (
    <div className="filters">
      <span className="title">Filter Products</span>
      <span>
        <Form.Check
          label="Ascending"
          name="group1"
          type="radio"
          onChange={() =>
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: "lowToHigh",
            })
          }
          checked={sort === "lowToHigh" ? true : false}
          style={{ fontSize: "20px" }}
        />
      </span>
      <span>
        <Form.Check
          label="Descending"
          name="group1"
          type="radio"
          onChange={() =>
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: "highToLow",
            })
          }
          checked={sort === "highToLow" ? true : false}
          style={{ fontSize: "20px" }}
        />
      </span>
      <span>
        <Form.Check
          label="Include Out of Stock"
          name="group1"
          type="checkbox"
          onChange={() =>
            productDispatch({
              type: "FILTER_BY_STOCK",
            })
          }
          checked={byStock}
          style={{ fontSize: "20px" }}
        />
      </span>
      <span>
        <Form.Check
          label="Fast Delivery Only"
          name="group1"
          type="checkbox"
          onChange={() =>
            productDispatch({
              type: "FILTER_BY_DELIVERY",
            })
          }
          checked={byFastDelivery}
          style={{ fontSize: "20px" }}
        />
      </span>
      <span>
        <label style={{ paddingRight: 10, fontSize: "20px" }}>Rating</label>
        <Rating
          rating={byRating}
          onClick={(i) => {
            console.log(i);
            productDispatch({
              type: "FILTER_BY_RATING",
              payload: i + 1,
            });
          }}
          style={{ cursor: "pointer" }}
        />
      </span>
      <Button
        onClick={() =>
          productDispatch({
            type: "CLEAR_FILTERS",
          })
        }
        variant="light"
      >
        Clear Filters
      </Button>
    </div>
  );
};
export default Filters;
