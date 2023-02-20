import React from "react";

const LoginHeader = () => {
  return (
    <header id="login-header">
      <img
        className="login-header-item"
        id="logo"
        src="images\Logo-Hello.png"
        alt="eh?"
      />
      <p className="login-header-item" id='item-2'>Welcome to</p>
      <p className="login-header-item" id='item-3'>Lost in Translation!</p>
      <p className="login-header-item" id='item-4'>Let's get started...</p>
    </header>
  );
};

export default LoginHeader;
