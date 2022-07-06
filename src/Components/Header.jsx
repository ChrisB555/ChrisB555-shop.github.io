import React, { useState } from "react";
import { Form, Nav, Badge, Dropdown, Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CartState } from "../Context/Context";
import { GiHamburgerMenu } from "react-icons/gi";
import { withRouter } from "react-router";
import SecondMenu from "./SecondMenu";
import { AiOutlineClose } from "react-icons/ai";

const Header = ({ prod, history }) => {
  const [isSecondOpen, setSecondOpen] = useState(false);
  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = CartState();

  const [showDropdownContact, setShowDropdownContact] = useState(false);
  const [showDropdownLog, setShowDropdownLog] = useState(false);
  const handleNavigate = () => {
    history.push(`/cart`);
  };
  const toggleOpenSecond = () => {
    setSecondOpen(!isSecondOpen);
  };
  return (
    <>
      <div id="nav">
        <div className="div-container">
          <button className="burger" onClick={toggleOpenSecond}>
            {isSecondOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
          </button>
          <Link to="/" className="logo">
            <strong>MyShop</strong>
          </Link>
        </div>
        <Form>
          <Form.Control
            style={{ width: 300 }}
            placeholder="Search a product"
            className="m-auto search"
            onChange={(e) =>
              productDispatch({
                type: "FILTER_BY_SEARCH",
                payload: e.target.value,
              })
            }
          />
        </Form>

        <Nav className="nav_drop">
          <Dropdown>
            <Dropdown.Toggle
              className="nav_dropdown"
              style={{
                background: "rgb(185, 209, 106)",
                border: "none",
                fontSize: "22px",
                fontWeight: "bolt",
                width: "95%",
                margin: "0 10px",
              }}
            >
              <FaShoppingCart
                color="darkslategray"
                fontSize="28px"
                className="cart"
              />
              <Badge>
                <strong>{cart.length}</strong>
              </Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu className="menu" style={{ width: 500 }}>
              {cart.length > 0 ? (
                <div>
                  {cart.map((prod) => (
                    <span className="cartitem" key={prod.id}>
                      <img
                        src={prod.image}
                        alt={prod.name}
                        className="cartItemImg"
                      />
                      <div className="cartItemDetail">
                        <span>{prod.name}</span>
                        <span> {prod.price.split(".")[0]} Euro</span>
                        <AiFillDelete
                          fontSize="22px"
                          style={{
                            cursor: "pointer",
                            color: "rgb(185, 209, 106)",
                          }}
                          onClick={() =>
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: prod,
                            })
                          }
                        />
                      </div>
                    </span>
                  ))}

                  <Button
                    variant="secondary"
                    style={{
                      border: "none",
                      fontSize: "22px",
                      fontWeight: "bolt",
                      width: "95%",
                      margin: "0 10px",
                    }}
                    onClick={handleNavigate}
                  >
                    Go to Cart
                  </Button>
                </div>
              ) : (
                <span
                  className="span"
                  style={{ padding: 10, marginLeft: "135px" }}
                >
                  <strong>Cart is Empty!</strong>
                </span>
              )}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown
            className="nav_dropdown"
            onMouseLeave={() => setShowDropdownContact(false)}
            onMouseOver={() => setShowDropdownContact(true)}
            style={{ margin: "0 10px", width: "170px" }}
          >
            <Dropdown.Toggle
              className="nav_dropdown"
              style={{
                background: "rgb(185, 209, 106)",
                border: "none",
                fontSize: "22px",
                fontWeight: "bolt",
              }}
            >
              Contact Us{" "}
            </Dropdown.Toggle>

            <Dropdown.Menu className="drop-menu" show={showDropdownContact}>
              <Dropdown.Item className="item">
                <strong>Live Chat:</strong>
                <br /> Customer service <br />
                available from <br />8 am-10pm
              </Dropdown.Item>
              <Dropdown.Item className="item">
                <strong>Call Us:</strong> <br /> 0074223322
              </Dropdown.Item>
              <Dropdown.Item className="item">
                <strong>Tech Service:</strong> <br /> 0072225544
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown
            className="nav_dropdown"
            onMouseLeave={() => setShowDropdownLog(false)}
            onMouseOver={() => setShowDropdownLog(true)}
            style={{ margin: "0 10px", width: "170px" }}
          >
            <Dropdown.Toggle
              className="nav_dropdown"
              style={{
                background: "rgb(185, 209, 106)",
                border: "none",
                fontSize: "22px",
                fontWeight: "bolt",
              }}
            >
              Log In
            </Dropdown.Toggle>
            <Dropdown.Menu className="drop-menu" show={showDropdownLog}>
              <Dropdown.Item className="item">
                <Link to="/Checkout"> Log In</Link>{" "}
              </Dropdown.Item>

              <Dropdown.Item className="item">
                <Link to="/ProceedToCheckout">Sign Up</Link>
              </Dropdown.Item>
              <Dropdown.Item className="item">Order tracking</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </div>

      {isSecondOpen && <SecondMenu />}
    </>
  );
};
export default withRouter(Header);
