import { useState } from "react";
import spriteSVG from "../assets/sprite.svg";

const Sidebar = () => {
  const [active, setActive] = useState("");

  const activeElement = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    setActive(e.currentTarget.id);
  };

  return (
    <div className='sidebar'>
      <ul className='side-nav'>
        <li
          id='hotel'
          className={`side-nav__item ${
            active === "hotel" && "side-nav__item--active"
          }`}
          onClick={activeElement}
        >
          <a href='#' className='side-nav__link'>
            <svg className='side-nav__icon'>
              <use xlinkHref={`${spriteSVG}#icon-home`} />
            </svg>
            <span>Hotel</span>
          </a>
        </li>

        <li
          id='flight'
          className={`side-nav__item ${
            active === "flight" && "side-nav__item--active"
          }`}
          onClick={activeElement}
        >
          <a href='#' className='side-nav__link'>
            <svg className='side-nav__icon'>
              <use xlinkHref={`${spriteSVG}#icon-aircraft-take-off`} />
            </svg>
            <span>Flight</span>
          </a>
        </li>

        <li
          id='car'
          className={`side-nav__item ${
            active === "car" && "side-nav__item--active"
          }`}
          onClick={activeElement}
        >
          <a href='#' className='side-nav__link'>
            <svg className='side-nav__icon'>
              <use xlinkHref={`${spriteSVG}#icon-key`} />
            </svg>
            <span>Car rental</span>
          </a>
        </li>

        <li
          id='tours'
          className={`side-nav__item ${
            active === "tours" && "side-nav__item--active"
          }`}
          onClick={activeElement}
        >
          <a href='#' className='side-nav__link'>
            <svg className='side-nav__icon'>
              <use xlinkHref={`${spriteSVG}#icon-map`} />
            </svg>
            <span>Tours</span>
          </a>
        </li>
      </ul>

      <div className='legal'>&copy; 2017 by trillo. All rights reserved.</div>
    </div>
  );
};
export default Sidebar;
