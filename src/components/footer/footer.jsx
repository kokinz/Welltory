import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__apps apps">
        <p className="apps__header">Get the mobile app</p>

        <ul className="apps__list list">
          <li className="apps__item">
            <a href="https://itunes.apple.com/app/welltory-personal-nyj-analitik/id1074367771?mt=8">
              <svg className="apps__image apps__image--apple" width="31" height="35" viewBox="0 0 31 35">
                <use xlinkHref="#apple" />
              </svg>
            </a>
          </li>

          <li className="apps__item">
            <a href="https://play.google.com/store/apps/details?id=com.welltory.client.android">
              <svg className="apps__image apps__image--google" width="29" height="33" viewBox="0 0 29 33">
                <use xlinkHref="#play-market" />
              </svg>
            </a>
          </li>
        </ul>
      </div>

      <ul className="footer__links list">
        <li>
          <a className="footer__link link" href="https://welltory.com/terms/">Terms of use</a>
        </li>

        <li>
          <a className="footer__link link" href="https://welltory.com/privacy/">Privacy policy</a>
        </li>
      </ul>

      <ul className="footer__social-links list">
        <li className="footer__social-link">
          <a href="https://twitter.com/welltory">
            <img src="/img/twitter.png" alt="Twitter" />
          </a>
        </li>

        <li className="footer__social-link">
          <a href="https://www.facebook.com/welltory">
            <img src="/img/facebook.png" alt="Facebook" />
          </a>
        </li>

        <li className="footer__social-link">
          <a href="https://www.instagram.com/welltory/">
            <img src="/img/instagram.png" alt="Instagram" />
          </a>
        </li>

        <li className="footer__social-link">
          <a href="https://www.linkedin.com/company/welltory">
            <img src="/img/linkedln.png" alt="Linkedln" />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
