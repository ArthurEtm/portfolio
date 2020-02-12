import React from "react";
import logo from "../logo.svg";
export default function Header() {
  return (
    <div>
      <header className="App-header">
        <p>Welcome to my portfolio</p>
        <img className="App-logo" src={logo} alt="logo" />
      </header>
    </div>
  );
}
