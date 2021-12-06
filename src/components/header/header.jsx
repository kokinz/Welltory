import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <Link className="header__logo" to="/" aria-label="Welltory">
        <img src="/img/logo-mobile.png" alt="logo Welltory" />
      </Link>
    </header>
  );
}

export default Header;
