import React from 'react';
import {Link} from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__apps apps">
        <p className="apps__header">Get the mobile app</p>

        <ul className="apps__list list">
          <li className="apps__item">
            <Link to="/">
              <svg className="apps__image apps__image--apple" width="31" height="35" viewBox="0 0 31 35">
                <use xlinkHref="#apple" />
              </svg>
            </Link>
          </li>

          <li className="apps__item">
            <Link to="/">
              <svg className="apps__image apps__image--google" width="29" height="33" viewBox="0 0 29 33">
                <use xlinkHref="#play-market" />
              </svg>
            </Link>
          </li>
        </ul>
      </div>

      <ul className="footer__links list">
        <li>
          <Link className="footer__link link" to="/">Terms of use</Link>
        </li>

        <li>
          <Link className="footer__link link" to="/">Privacy policy</Link>
        </li>
      </ul>

      <ul className="footer__social-links list">
        <li className="footer__social-link">
          <Link to="/">
            <img src="/img/twitter.png" alt="Twitter" />
          </Link>
        </li>

        <li className="footer__social-link">
          <Link to="/">
            <img src="/img/facebook.png" alt="Facebook" />
          </Link>
        </li>

        <li className="footer__social-link">
          <Link to="/">
            <img src="/img/instagram.png" alt="Instagram" />
          </Link>
        </li>

        <li className="footer__social-link">
          <Link to="/">
            <img src="/img/linkedln.png" alt="Linkedln" />
          </Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
