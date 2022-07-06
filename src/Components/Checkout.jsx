import { withRouter } from "react-router";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "./Header";
import FooterWrapper from "./FooterWrapper";

const Checkout = (props) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const buttonOnClick = (e) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
      fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origins": "*",
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ email: email, password: password }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.error) {
            alert(data.error);
          } else {
            props.history.push("/", {
              email: email,
            });
          }
        })
        .catch((error) => console.log(error));
    } else {
      alert("Fields must be completed!");
    }
  };

  return (
    <>
      <Header />
      <div id="login">
        <h3>Purchase your Order</h3>
        <div className="radio">
          <Form.Check
            label="Existing Client"
            name="group1"
            type="radio"
            style={{ padding: "25px" }}
          ></Form.Check>
          <Link to="./ProceedToCheckout">
            <Form.Check
              label="New Client"
              name="group1"
              type="radio"
              style={{ padding: "25px" }}
            ></Form.Check>
          </Link>
        </div>
        <form id="loginForm">
          <label className="checkLabel">E-Mail: </label>
          <input
            className="in"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => handleEmailChange(e)}
          ></input>
          <label className="checkLabel">Password: </label>
          <input
            className="in"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => handlePasswordChange(e)}
          ></input>
          <a id="forgot" href="#login">
            Forgot your Password?
          </a>
          <Button
            variant="secondary"
            style={{ margin: "20px 0" }}
            onClick={(e) => {
              buttonOnClick(e);
            }}
          >
            Log In
          </Button>
        </form>
      </div>
      <FooterWrapper />
    </>
  );
};
export default withRouter(Checkout);
