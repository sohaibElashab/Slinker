import React, { useState } from "react";
import { useSelector } from "react-redux";
import NavSearch from "../Layouts/NavSearch";
import Sidebar from "../Layouts/Sidebar";
import SiteResultes from "../Layouts/SiteResultes";

const Sites = () => {
  const websites = useSelector((state) => state.websites.websites);
  const [add , setAdd] = useState(true)
  const AddSite = () => {
    setAdd(!add)
  };
  return (
    <div className="content">
      <Sidebar />
      <main>
        <NavSearch />
        <div className="main__sites">
          <div className="title__content">
            <span>Sites</span>
            <button onClick={AddSite}>Add site +</button>
          </div>
          <div className="sites__sites">
            {websites !== undefined
              ? websites.map((el) => (
                  <SiteResultes id={el.id} name={el.name} logo={el.image} />
                ))
              : ""}
          </div>
          <div className={`add__site__sites ${add ? 'display__add__sites' : ''} `} >
            <div className="hidde__add" onClick={AddSite}></div>
            <div className="section__add">
              <div className="form__custom__link__cl">
                <input type="text" placeholder="slinker.com" />
                <button>Add</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Sites;
