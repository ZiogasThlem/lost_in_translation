// header component for login page
const LoginHeader = () => {
  return (
    <header id="login-header" className="grid-row-1">
      <img
        className="login-header-item"
        id="logo"
        src="images\Logo-Hello.png"
        alt="eh?"
      />
      <p className="login-header-item" id="login-header-item-1">
        Welcome to...
      </p>
      <br />
      <p className="login-header-item" id="login-header-item-2">
        Lost in Translation!
      </p>
      <p className="login-header-item" id="login-header-item-3">
        Let's get started!!!
      </p>
    </header>
  );
};

export default LoginHeader;
