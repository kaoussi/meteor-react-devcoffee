import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    var navStyle = {
      paddingLeft: "12px",
      backgroundColor: "#00b8d4"
    };
    return (
      <nav style={navStyle}>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">DevCoffee</a>
          <NavLink activeClassName="active" className="right hide-on-med-and-down" id="nav-mobile" exact to="/">Home</NavLink>
          <NavLink to="/register" className="right hide-on-med-and-down">Register</NavLink>
        </div>
      </nav>
    );
  }
}
