import React from "react";
import logo from "../assets/shared/logo.svg";
import { Link } from "react-router-dom";

function Navigation({ navBarToggle }) {
  return (
    <header className="primary-header flex">
      <div>
        <img src={logo} alt="logo" className="logo" />
      </div>
      <button
        className="mobile-nav-toggle"
        aria-controls="primary-navigation"
        onClick={navBarToggle}
      >
        <span className="sr-only" aria-expanded="false">
          Menu
        </span>
      </button>
      <nav>
        <ul
          id="primary-navigation"
          data-visible="false"
          className="primary-navigation underline-indicators flex"
        >
          <li className="active">
            <Link
              to="/"
              class="uppercase text-white letter-spacing-2 ff-sans-cond"
            >
              <span aria-hidden="true">00</span>Home
            </Link>
          </li>
          <li>
            <Link
              to="/destination-moon"
              class="uppercase text-white letter-spacing-2 ff-sans-cond"
              href="destination.html"
            >
              <span aria-hidden="true">01</span>Destination
            </Link>
          </li>
          <li>
            <a
              class="uppercase text-white letter-spacing-2 ff-sans-cond"
              href="crew.html"
            >
              <span aria-hidden="true">02</span>Crew
            </a>
          </li>
          <li>
            <a
              class="uppercase text-white letter-spacing-2 ff-sans-cond"
              href="technology.html"
            >
              <span aria-hidden="true">02</span>Technology
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
