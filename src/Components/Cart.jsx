import { useEffect } from "react";
import { useState } from "react";
import { ListGroup, Button, Row, Col, Form, Image } from "react-bootstrap";
import { CartState } from "../Context/Context";
import Rating from "./Rating";
import { AiFillDelete } from "react-icons/ai";
import FooterWrapper from "./FooterWrapper";
import { Link } from "react-router-dom";
import Header from "./Header";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [total, setTotal] = useState();
  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  const taxPrice = Math.floor(total * 0.14);

  const shippingPrice = total > 1000 ? 0 : 20;

  const totalPrice = total + taxPrice + shippingPrice;

  return (
    <>
      <Header />
      <div className="home">
        <div className="productContainer">
          <ListGroup>
            {cart.map((prod) => (
              <ListGroup.Item key={prod.id} className="listGroup">
                <Row>
                  <Col md={2}>
                    <Image
                      src={prod.image}
                      alt={prod.name}
                      fluid
                      rounded
                      onClick={() =>
                        dispatch({
                          type: "DISPLAY_PRODUCT",
                          id: prod.id,
                          payload: prod,
                        })
                      }
                    />
                  </Col>
                  <Col md={2}>
                    <span>{prod.name}</span>
                  </Col>
                  <Col md={2}>
                    <span>{prod.price.split(".")[0]} Euro</span>
                  </Col>
                  <Col md={2}>
                    <Rating rating={prod.ratings} />
                  </Col>
                  <Col md={2}>
                    <Form.Control
                      as="select"
                      value={prod.qty}
                      onChange={(e) =>
                        dispatch({
                          type: "CHANGE_CART_QTY",
                          payload: {
                            id: prod.id,
                            qty: e.target.value,
                          },
                        })
                      }
                    >
                      {[...Array(prod.inStock).keys()].map((x) => (
                        <option key={x + 1}>{x + 1}</option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button
                      type="button"
                      variant="light"
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: prod,
                        })
                      }
                    >
                      <AiFillDelete
                        fontSize="22px"
                        style={{
                          cursor: "pointer",
                          color: "rgb(185, 209, 106)",
                        }}
                      />
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
        <div className="filters summary">
          <span className="title">Total ({cart.length}) items</span>
          <span>
            <strong> Tax: {taxPrice} Euro</strong>
          </span>
          <span>
            <strong>Shipping Price : {shippingPrice} Euro</strong>
          </span>
          <span style={{ fontWeight: 700, fontSize: 20 }}>
            Total: {totalPrice} Euro
          </span>
          <Link to="./ProceedToCheckout">
            <Button
              type="button"
              disabled={cart.length === 0}
              variant="secondary"
            >
              Proceed to Checkout
            </Button>
          </Link>
        </div>
      </div>
      <FooterWrapper />
    </>
  );
};
export default Cart;
