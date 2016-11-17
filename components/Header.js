import React from "react"
import logo from '../logo.svg';

const Header = ({headerData}) => (
  <div className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h2>{headerData}</h2>
  </div>
);

export default Header
