import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SiteResultes = ({ show }) => {
  return (
    <div className="site__sites">
      <div className="site__title__sites">
        <div className="site__title__logo__sites">
          <img
            className=""
            src="https://localhost:3000/Assets/eysi-full.png"
            alt=""
          />
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
          <div className="blue__sites">112</div>
        </div>
        <div className="site__resulte__sites">
          <div className="site__resulte__title__sites">Available</div>
          <div className="green__sites">86</div>
        </div>
        <div className="site__resulte__sites">
          <div className="site__resulte__title__sites">Unavailable</div>
          <div className="red__sites">12</div>
        </div>
        <div className="site__resulte__sites">
          <div className="site__resulte__title__sites">Error 404</div>
          <div className="gris__sites">14</div>
        </div>
        <hr />
        <div className="site__resulte__sites">
          <div className="site__resulte__title__sites">
            Affiliate id checked
          </div>
          <div className="blue__sites">2</div>
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
