import React from "react";
import Logo from "../assets/a-logo.svg";
import Vector from "../assets/Vector.svg";
import EmptyCart from "../assets/EmptyCart.svg";
import ProductA from "../assets/ProductD.svg";
import { ProductData } from "../container/data";
import ScrollBar from "../components/ScrollBar";

const CategoryPage = () => {
  return (
    <div className="pageblock">
      <header className={"header"}>
        <nav className={"left-nav"}>
          <ul>
            <li>Women</li>
            <li>Men</li>
            <li>Kids</li>
          </ul>
        </nav>
        <div className={"middle-icon"}>
          <img src={Logo} alt={"Loading ..."} />
        </div>
        <nav className={"right-nav"}>
          <ul>
            <li>
              <button>
                <h1>$</h1>
                <span>
                  <img src={Vector} alt={"Loading ..."} />
                </span>
              </button>
            </li>
            <li>
              <img src={EmptyCart} alt={"Loading ..."} />
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <div className={"category"}>
          <div className={"titleBlock"}>
            <h1>Category name</h1>
          </div>
          <ScrollBar>
          <div className="productData">
          {ProductData.map((id, item) => (
              <div className="product-cart">
                <div className="productImg">
                  <img src={ProductData[item].image} alt={""} />
                </div>
                <div className="product-name">
                  <p>{ProductData[item].name}</p>
                </div>
                <div className="price">
                <p>${ProductData[item].price}</p>
                </div>
              </div>
          ))}
            
          </div>
          </ ScrollBar>
        </div>
      </main>
    </div>
  );
};

export default CategoryPage;
