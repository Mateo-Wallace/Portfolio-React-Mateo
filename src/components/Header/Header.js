import React from "react";
// available as bubble, stack, or slide
import "./Header.css"
import { Link } from "react-router-dom";
import { bubble as Menu } from "react-burger-menu";

export default (props) => {
  return (
    <Menu>
      <Link to="/">Home</Link>
      <Link to="/aaaa">Not Found</Link>
      <a className="menu-item" href="/salads">
        Salads
      </a>
      <a className="menu-item" href="/pizzas">
        Pizzas
      </a>
      <a className="menu-item" href="/desserts">
        Desserts
      </a>
    </Menu>
  );
};
