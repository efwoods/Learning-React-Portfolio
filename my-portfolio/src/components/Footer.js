import { IdentificationIcon } from "@heroicons/react/24/solid";
import React from "react";
import QR from "../images/linkedin-qr.png";

export default function Footer() {
  return (
    <footer className="bg-gray-800 md:sticky top-0 z-10">
      <div class="container">
        <a rel="noreferrer" href="#about" class="back-to-top">
          <i class="fa fa-angle-up fa-2x" aria-hidden="true"></i>
        </a>
        <div id="social-links" class="social-links">
          <a
            rel="noreferrer"
            href="https://twitter.com/EvanWoods"
            target="_blank"
          >
            <i class="fa fa-twitter fa-inverse"></i>
          </a>
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/evanfwoods/"
            target="_blank"
          >
            <i class="fa fa-linkedin fa-inverse"></i>
          </a>
          <a rel="noreferrer" href="https://github.com/efwoods" target="_blank">
            <i class="fa fa-github fa-inverse"></i>
          </a>
        </div>
        <hr />

        <p class="footer__text">
          
          <a rel="noreferrer" href="https://github.com/efwoods" target="_blank">
          © 2023 - Portfolio developed by Evan Woods
          </a>
        </p>

        {/* <p class="mt-3 pt-3" />
        <a
          class="github-button"
          href="https://github.com/sponsors/efwoods"
          data-icon="octicon-heart"
          data-size="large"
          aria-label="Sponsor @efwoods on GitHub"
        >
          Sponsor
        </a> */}
      </div>
    </footer>
  );
}
