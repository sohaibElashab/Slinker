import React from "react";
import NavSearch from "../Layouts/NavSearch";
import Sidebar from "../Layouts/Sidebar";
import MustSubscribe from "../Layouts/MustSubscribe";
import AmazonProduct from "../Layouts/AmazonProduct";
import ControlButton from "../Layouts/ControlButton";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Issues = () => {
  const {id} = useParams();
  const similar = useSelector((state) => state.similar.similars);
  var result = []
  if(similar !== undefined){
      result = similar.filter(simi => simi.product_id == 19);
  } 
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
                <AmazonProduct id={id}  show={true} /> 
              </div>
              <div className="amazon__similar__products__Issues">
                Amazon Similar Products
                <div className="table__amazon__similar__products__Issues">
                {
                  result !== [] && result.map((element) => (
                    <div className="amazon__similar__product__Issues">
                      <img
                        src={element.image}
                        alt=""
                      />
                      <span>
                        {element.name}
                      </span>
                      <button>View</button>
                    </div>
                  ))
                }
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
