import React from "react";
import NavSearch from "../Layouts/NavSearch";
import Sidebar from "../Layouts/Sidebar";
import MustSubscribe from "../Layouts/MustSubscribe";
import AmazonProduct from "../Layouts/AmazonProduct";
import ControlButton from "../Layouts/ControlButton";

const Issues = () => {
  return (
    <div className="content">
      <Sidebar />
      <main>
        <NavSearch />
        <div className="main__ISC">
          <div className="title__content">
            <span>Issues</span>
          </div>
          <div className="content__ISC">
            <div className="content__header__ISC">
              <MustSubscribe red={true} />
              <ControlButton big={true} />
            </div>
            <div className="resultes__ISC">
              <div className="amazon__products__ISC ">
                Amazon Products
                <AmazonProduct show={true} />
              </div>
              <div className="amazon__similar__products__Issues">
                Amazon Similar Products
                <div className="table__amazon__similar__products__Issues">
                  <div className="amazon__similar__product__Issues">
                    <img
                      src="https://localhost:3000/Assets/product.png"
                      alt=""
                    />
                    <span>
                      Nair Hair Remover for Men Hair Remover Body Cream, 13 oz
                    </span>
                    <button>View</button>
                  </div>
                  <div className="amazon__similar__product__Issues">
                    <img
                      src="https://localhost:3000/Assets/product.png"
                      alt=""
                    />
                    <span>
                      Nair Hair Remover for Men Hair Remover Body Cream, 13 oz
                    </span>
                    <button>View</button>
                  </div>
                  <div className="amazon__similar__product__Issues">
                    <img
                      src="https://localhost:3000/Assets/product.png"
                      alt=""
                    />
                    <span>
                      Nair Hair Remover for Men Hair Remover Body Cream, 13 oz
                    </span>
                    <button>View</button>
                  </div>
                  <div className="amazon__similar__product__Issues">
                    <img
                      src="https://localhost:3000/Assets/product.png"
                      alt=""
                    />
                    <span>
                      Nair Hair Remover for Men Hair Remover Body Cream, 13 oz
                    </span>
                    <button>View</button>
                  </div>
                  <div className="amazon__similar__product__Issues">
                    <img
                      src="https://localhost:3000/Assets/product.png"
                      alt=""
                    />
                    <span>
                      Nair Hair Remover for Men Hair Remover Body Cream, 13 oz
                    </span>
                    <button>View</button>
                  </div>
                  <div className="amazon__similar__product__Issues">
                    <img
                      src="https://localhost:3000/Assets/product.png"
                      alt=""
                    />
                    <span>
                      Nair Hair Remover for Men Hair Remover Body Cream, 13 oz
                    </span>
                    <button>View</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Issues;
