import React from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SecondMenu.css";

const SecondMenu = () => {
  return (
    <div className="second-menu">
      <Dropdown style={{ width: "170px", marginTop: "-20px" }} align="end">
        {" "}
        <Dropdown.Toggle
          className="dropdown-second"
          style={{
            background: "rgb(235, 232, 232)",
            border: "none",
            fontSize: "24px",
            fontWeight: "bolt",
            color: "darkslategray",
            marginTop: "30px",
          }}
        >
          <Link to="./Women">
            <strong> Women</strong>{" "}
          </Link>
        </Dropdown.Toggle>
        <Dropdown.Menu
          className="menu-second"
          style={{
            width: "230px",
            padding: "10px",
            background: "rgb(235, 232, 232)",
            color: "darkslategray",
            left: "0px",
          }}
        >
          <Dropdown.Item>
            <strong>Clothing</strong>
          </Dropdown.Item>
          <Dropdown.Item>
            <strong>Large Sizing</strong>
          </Dropdown.Item>
          <Dropdown.Item>
            <strong>Maternity wear</strong>
          </Dropdown.Item>
          <Dropdown.Item>
            <strong>Accesories & Shoes</strong>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown style={{ width: "170px" }} align="end">
        <Dropdown.Toggle
          className="dropdown-second"
          style={{
            background: "rgb(235, 232, 232)",
            border: "none",
            fontSize: "24px",
            fontWeight: "bolt",
            color: "darkslategray",
            marginTop: "10px",
          }}
        >
          <Link to="./Men">
            <strong> Men</strong>{" "}
          </Link>
        </Dropdown.Toggle>

        <Dropdown.Menu
          className="menu-second"
          style={{
            width: "230px",
            padding: "10px",
            background: "rgb(235, 232, 232)",
            color: "darkslategray",
            left: "0px",
          }}
        >
          <Dropdown.Item>
            <strong>Clothing</strong>
          </Dropdown.Item>
          <Dropdown.Item>
            <strong>Large Sizing</strong>
          </Dropdown.Item>

          <Dropdown.Item>
            <strong>Accesories & Shoes</strong>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown style={{ width: "170px" }} align="end">
        {" "}
        <Dropdown.Toggle
          className="dropdown-second"
          style={{
            background: "rgb(235, 232, 232)",
            border: "none",
            fontSize: "24px",
            fontWeight: "bolt",
            color: "darkslategray",
            marginTop: "10px",
          }}
        >
          <Link to="./Women">
            <strong> Kids</strong>{" "}
          </Link>
        </Dropdown.Toggle>
        <Dropdown.Menu
          className="menu-second"
          style={{
            width: "230px",
            padding: "10px",
            background: "rgb(235, 232, 232)",
            color: "darkslategray",
            left: "-60px",
          }}
        >
          <Dropdown.Item>
            <strong>Girls Clothing</strong>
          </Dropdown.Item>
          <Dropdown.Item>
            <strong>Boys Clothing</strong>
          </Dropdown.Item>
          <Dropdown.Item>
            <strong>Featured</strong>
          </Dropdown.Item>
          <Dropdown.Item>
            <strong>Accesories & Shoes</strong>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown style={{ width: "170px" }} align="end">
        {" "}
        <Dropdown.Toggle
          className="dropdown-second"
          style={{
            background: "rgb(235, 232, 232)",
            border: "none",
            fontSize: "24px",
            fontWeight: "bolt",
            color: "darkslategray",
            marginTop: "10px",
          }}
        >
          <Link to="./Women">
            <strong> Babies</strong>{" "}
          </Link>
        </Dropdown.Toggle>
        <Dropdown.Menu
          className="menu-second"
          style={{
            width: "230px",
            padding: "10px",
            background: "rgb(235, 232, 232)",
            color: "darkslategray",
            left: "-130px",
          }}
        >
          <Dropdown.Item>
            <strong>NewBorn Clothing</strong>
          </Dropdown.Item>
          <Dropdown.Item>
            <strong>Baby Clothing</strong>
          </Dropdown.Item>
          <Dropdown.Item>
            <strong>Featured</strong>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default SecondMenu;
