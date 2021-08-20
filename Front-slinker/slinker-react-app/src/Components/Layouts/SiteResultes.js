import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SiteResultes = ({ id , name , logo }) => {
  const products = useSelector((state) => state.products.products);
  var result = []
  var Affilliate = []
  var countUNVB = 0
  var countVB = 0
  var countER = 0
  var countLinks = null
  if(products !== undefined){
      result = products.filter(product => product.website_id == id);
      countLinks = products.filter(product => product.website_id == id);
  } 
  if(result !== []){
    result.map((el) => {
      Affilliate.push(el.affiliat_id)
      el.status == 'UNAVAILABLE' ? ++countUNVB : el.status == 'AVAILABLE' ? ++countVB : ++countER
    })
    Affilliate = [...new Set(Affilliate)]

  } 
  return (
    <div className="site__sites">
      <div className="site__title__sites">
        <div className="site__title__logo__sites">
          <img
            className=""
            src={logo}
            alt=""
          />
          {name}
        </div>
        <div className="site__title__edit__sites">
          <i className="fas fa-cog"></i>
          <i className="fas fa-trash"></i> 
        </div>
      </div>
      <hr />
      <div className="site__resultes__sites">
        <div className="site__resulte__sites">
          <div className="site__resulte__title__sites">Link Checked</div>
          <div className="blue__sites">{countLinks !== null && countLinks.length}</div>
        </div>
        <div className="site__resulte__sites">
          <div className="site__resulte__title__sites">Available</div>
          <div className="green__sites">{countVB}</div>
        </div>
        <div className="site__resulte__sites">
          <div className="site__resulte__title__sites">Unavailable</div>
          <div className="red__sites">{countUNVB}</div>
        </div>
        <div className="site__resulte__sites">
          <div className="site__resulte__title__sites">Error 404</div>
          <div className="gris__sites">{countER}</div>
        </div>
        <hr />
        <div className="site__resulte__sites">
          <div className="site__resulte__title__sites">
            Affiliate id checked
          </div>
          <div className="blue__sites">{Affilliate !== null && Affilliate.length}</div>
        </div>
        <hr />
        <div className="site__resulte__sites">
          <button>See More</button>
        </div>
      </div>
    </div>
  );
};

export default SiteResultes;
