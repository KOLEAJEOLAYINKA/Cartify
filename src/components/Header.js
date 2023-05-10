import React, { useState } from "react";
import Logo from "../assets/a-logo.svg";
import Vector from "../assets/Vector.svg";
import EmptyCart from "../assets/EmptyCart.svg";

const Header = () => {
  const [selectedColor, setSelectedColor] = useState("#000000");
  const handleClick = (e) => {
    setSelectedColor(e);
  };
  return (
    <header className={"header"}>
      <nav className={"left-nav"}>
        <ul>
          <li
            onClick={() => handleClick("#5ECE7B")}
            style={{
              color: selectedColor,
            }}
          >
            Women
          </li>
          <li
            onClick={() => handleClick("#5ECE7B")}
            style={{
              color: selectedColor,
            }}
          >
            Men
          </li>
          <li
            onClick={() => handleClick("#5ECE7B")}
            style={{
              color: selectedColor,
            }}
          >
            Kids
          </li>
        </ul>
      </nav>
      <div className={"middle-icon"}>
        <img src={Logo} alt={"Loading ..."} />
      </div>
      <nav className={"right-nav"}>
        <ul>
          <li>
            <button className={"CartBar-btn"}>
              <h1>$</h1>
              <span>
                <img src={Vector} alt={"Loading ..."} />
              </span>
            </button>
          </li>
          <li>
            <button>
              <img src={EmptyCart} alt={"Loading ..."} />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
