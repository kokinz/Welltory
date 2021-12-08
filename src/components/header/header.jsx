import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <Link className="header__logo" to="/" aria-label="Welltory">
        <picture>
          <source media="(min-width: 1024px)" srcSet="/img/logo.png" />
          <img src="/img/logo-mobile.png" alt="logo Welltory" />
        </picture>
      </Link>
    </header>
  );
}

export default Header;
