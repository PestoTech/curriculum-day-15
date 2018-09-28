import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/App.css';

export default class Navbar extends Component {
  render() {
    return (
      <ul className="nav">
        <li><NavLink to="/" exact>Home</NavLink></li>
        <li><NavLink to="/about" exact>About us</NavLink></li>
        <li><NavLink to="/contact" exact>Contact</NavLink></li>
      </ul>
    );
  }
}
