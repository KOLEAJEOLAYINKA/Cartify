import React from "react";
import { ProductData } from "../container/data";
import ScrollBar from "../components/ScrollBar";
import Header from "../components/Header";

const CategoryPage = () => {

  return (
    <div className="pageblock">
      <Header />

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
                    <img src={ProductData[item].image} alt={"Loading ..."} />
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
          </ScrollBar>
        </div>
      </main>
    </div>
  );
};

export default CategoryPage;
