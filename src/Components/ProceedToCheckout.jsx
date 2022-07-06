import { withRouter, Link } from "react-router-dom";
import { CgAsterisk } from "react-icons/cg";
import { ImTruck } from "react-icons/im";
import { MdPayment } from "react-icons/md";
import { useEffect } from "react";
import { useState } from "react";
import {
  ListGroup,
  Button,
  Row,
  Col,
  Image,
  Form,
  Container,
} from "react-bootstrap";
import { CartState } from "../Context/Context";
import Rating from "./Rating";
import { AiFillDelete } from "react-icons/ai";
import FooterWrapper from "./FooterWrapper";
import Header from "./Header";

const ProceedToOrder = () => {
  const {
    state: { cart, byFastDelivery },

    dispatch,
  } = CartState();

  const [total, setTotal] = useState();
  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  const taxPrice = Math.floor(total * 0.14);
  const shippingPrice = total - taxPrice > 1000 ? 0 : 20;
  let isAllFastDelivery=true;
  cart.forEach((cartElement)=>{
    if(cartElement.fastDelivery===false){
      isAllFastDelivery=false;
    }
  })
  const [isFastDelivery, setIsFastDelivery] = useState(isAllFastDelivery);
  const fast = 30;

  const handleClick = () => {
    if (!isAllFastDelivery) {
      setIsFastDelivery((s) => !s);
    } else {
      alert("It is a fast delivery");
    }
  };

  const totalPrice = total + taxPrice + shippingPrice;

  return (
    <>
      <Header />
      <Container style={{ margin: " 40px" }} className="proceed-container">
        <Row>
          <Col style={{ padding: "5px" }}>
            <div className="col1">
              <div className="client">
                <h3>Purchase your Order</h3>
                <div className="radio">
                  <Link to="./Checkout">
                    <Form.Check
                      label="Existing Client"
                      name="group1"
                      type="radio"
                      style={{ padding: "25px" }}
                    ></Form.Check>
                  </Link>
                  <Form.Check
                    label="New Client"
                    name="group1"
                    type="radio"
                    style={{ padding: "25px" }}
                  ></Form.Check>
                </div>
              </div>
              <div className="client">
                <h5>Billing Informations</h5>
                <form>
                  <label className="checkLabel">
                    Name{" "}
                    <CgAsterisk
                      style={{ color: "rgb(231, 49, 49", marginBottom: "12px" }}
                    />
                  </label>
                  <input type="text" placeholder="Enter name"></input>
                  <label className="checkLabel">
                    {" "}
                    Last Name{" "}
                    <CgAsterisk
                      style={{ color: "rgb(231, 49, 49", marginBottom: "12px" }}
                    />
                  </label>
                  <input type="text" placeholder="Enter last name"></input>
                  <label className="checkLabel">
                    Phone{" "}
                    <CgAsterisk
                      style={{ color: "rgb(231, 49, 49", marginBottom: "12px" }}
                    />
                  </label>
                  <input type="text" placeholder=" Enter phone number "></input>
                  <label className="checkLabel">
                    Email{" "}
                    <CgAsterisk
                      style={{ color: "rgb(231, 49, 49", marginBottom: "12px" }}
                    />
                  </label>
                  <input type="email" placeholder="Enter email"></input>
                  <label className="checkLabel">
                    Password{" "}
                    <CgAsterisk
                      style={{ color: "rgb(231, 49, 49", marginBottom: "12px" }}
                    />
                  </label>
                  <input type="password" placeholder="Enter password"></input>
                </form>
              </div>
              <div className="client">
                <h5>Client Address Informations</h5>
                <form>
                  <label className="checkLabel"> Company Info </label>
                  <input type="text" placeholder="Enter company info"></input>
                  <label className="checkLabel">
                    {" "}
                    Address{" "}
                    <CgAsterisk
                      style={{ color: "rgb(231, 49, 49", marginBottom: "12px" }}
                    />
                  </label>
                  <input type="text" placeholder="Enter address"></input>
                  <label className="checkLabel">
                    {" "}
                    City{" "}
                    <CgAsterisk
                      style={{ color: "rgb(231, 49, 49", marginBottom: "12px" }}
                    />
                  </label>
                  <input type="text" placeholder="Enter city"></input>
                  <label className="checkLabel"> Posta Code </label>
                  <input type="text" placeholder="Enter postal code"></input>
                  <label className="checkLabel">
                    {" "}
                    Country{" "}
                    <CgAsterisk
                      style={{ color: "rgb(231, 49, 49", marginBottom: "12px" }}
                    />
                  </label>
                  <select>
                    <option value="Romania">Romania</option>
                    <option value="USA">USA</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Germany">Germany</option>
                    <option value="Austria">Austria</option>
                  </select>
                </form>
              </div>
            </div>
          </Col>

          <Col style={{ padding: 0 }}>
            <div className="col2">
              <div className="client clientMethod">
                <div className="method">
                  <h5>
                    {" "}
                    Delivery Methods <ImTruck />
                  </h5>
                  <div className="input_label">
                    <input
                      className="formCheck"
                      type="checkbox"
                      style={{ padding: "25px" }}
                      onChange={handleClick}
                      checked={isFastDelivery}
                    ></input>
                    <label> Fast Delivery: 30 Euro </label>
                  </div>
                </div>
                <div className="method">
                  <h5>
                    Payment Methods <MdPayment />
                  </h5>
                  <div className="input_label">
                    <input
                      className="formCheck"
                      type="checkbox"
                      style={{ padding: "25px" }}
                    ></input>
                    <label>On Delivery Payment</label>
                  </div>
                  <div className="input_label">
                    <input
                      className="formCheck"
                      type="checkbox"
                      style={{ padding: "25px" }}
                    ></input>
                    <label>Payment by Card</label>
                  </div>
                </div>
              </div>

              <div className="client">
                <h5>Your Cart: </h5>
                <div className="home ">
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
                <div className="filters total ">
                  <span className="title">Total ({cart.length}) items</span>
                  <span>
                    <strong> Tax: {taxPrice} Euro</strong>
                  </span>
                  <span>
                    <strong>Shipping Price : {shippingPrice} Euro</strong>
                  </span>
                  <span>
                    <strong>
                      Delivery Price : {isFastDelivery&&isAllFastDelivery===false ? fast : 0} Euro
                    </strong>
                  </span>
                  <span style={{ fontWeight: 700, fontSize: 20 }}>
                    Total: {isFastDelivery&&isAllFastDelivery===false ? totalPrice + fast : totalPrice} Euro
                  </span>
                </div>
              </div>

              <div className="client">
                <h5>Additional Informations</h5>
                <textarea rows="5" placeholder="Comments"></textarea>
                <div>
                  <input
                    className="formCheck"
                    type="checkbox"
                    style={{ padding: "25px" }}
                  ></input>
                  <label>Newsletter </label>

                  <input
                    className="formCheck"
                    type="checkbox"
                    style={{ padding: "25px" }}
                  ></input>
                  <label>I Agree with Your Confidentiality Policy </label>
                </div>
                <Button variant="secondary">Send Order</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <FooterWrapper />
    </>
  );
};
export default withRouter(ProceedToOrder);
