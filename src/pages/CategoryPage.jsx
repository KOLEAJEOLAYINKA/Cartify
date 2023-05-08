import React from "react";
import Logo from "../assets/a-logo.svg";
import Vector from "../assets/Vector.svg";
import EmptyCart from "../assets/EmptyCart.svg";
import ProductA from "../assets/ProductD.svg"


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
                $
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
          <div className="product-cart">
            <div className="productImg">
              <img src={ProductA} alt={""} />
            </div>
            <div className="product-name">
              <p>Apollo Running Short</p>
            </div>
            <div className="price">
              <p>$50.00</p>
            </div>
          </div>
        </div>
      </main>
      
      {/* <dialog>
        HI<h1>oops</h1>
      </dialog> */}
    </div>
  );
};

export default CategoryPage;
