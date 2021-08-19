import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";

const Sidebar = (props) => {
  const [audit, setaudit] = useState(false);
  const [site_id, setsite] = useState(3);
  const location = useLocation()
  const websites = useSelector((state) => state.websites.websites);
  // var site_id = 0
  // if(websites !== undefined){
  //   site_id = websites[0].id
  //   console.log("siteid",site_id)
  // } 
  const ShowAudit = {
    display: "block",
  };
  const HideAudit = {
    display: "none",
  };
  const ChangeAudit = () => {
    setaudit(!audit);
  };
  
  let history = useHistory();
  const setIdsite = (id) => {
    setsite(id);
    console.log(location.pathname.split('/')[2])
    if(location.pathname.split('/')[2] && location.pathname.split('/')[2] != id){
      location.pathname.split('/')[1] == 'Summary' ? history.push(`/Summary/${id}`) : history.push(`/Issues/${id}`)
    }
    
    var elems = document.querySelectorAll(".changeclass");

    [].forEach.call(elems, function(el) {
        el.classList.remove("active_menu_link__content");
    });
    document.getElementById(id).classList.add("active_menu_link__content")
    sessionStorage.setItem("idSelector",id)
  }
  useEffect(() => {
    if(sessionStorage.getItem("idSelector")){
      // document.getElementById(sessionStorage.getItem("idSelector")).classList.add("active_menu_link__content")
      console.log("session",sessionStorage.getItem("idSelector"))
    }
  }, [])

  return (
    <div id="sidebar__content">
      <div className="sidebar__logo__content">
        <img src="https://localhost:3000/Assets/Slinker logo.svg" alt="" />
      </div>
      <div className="sidebar__menu__content">
        <div className="sidebar__link__content ">
          <Link to="/Sites" className="sidebar__span__content">
            <img
              className="sidebar__icon__content"
              src="https://localhost:3000/Assets/content_icones/site.svg"
              alt=""
            />
            Sites
          </Link>
        </div>
        <div className="sidebar__sites__content">{
         websites !== undefined ? websites.map((element) => (  <div
            className="sidebar__child__link__content changeclass "
            id={element.id}
            key={element.id} onClick={() => setIdsite(element.id)}
          >
            <span className="sidebar__span__content"> 
              <img
                className="sidebar__img__site__content"
                src={element.image}
                alt=""
              />
                {element.name} {element.id}
            </span>
          </div> 
        )):""}</div>
        <hr />
        <div className="sidebar__link__content">
          <Link to="/Dashboard" className="sidebar__span__content">
            <img
              className="sidebar__icon__content"
              src="https://localhost:3000/Assets/content_icones/Dashboard_icon.svg"
              alt=""
            />
            Dashboard
          </Link>
        </div>
        <div className="sidebar__link__content">
          <span className="sidebar__span__content" onClick={ChangeAudit}>
            <img
              className="sidebar__icon__content"
              src="https://localhost:3000/Assets/content_icones/audit.svg"
              alt=""
            />
            Affiliate audit
          </span>
        </div>
        <div
          className="Affiliate__content"
          style={audit ? ShowAudit : HideAudit}
        >
          <div className="sidebar__child__link__content">
            <Link to={`/Summary/${site_id}`} className="sidebar__span__content">
              Summary
            </Link>
          </div>
          <div className="sidebar__child__link__content">
            <Link to={`/Issues/${site_id}`} className="sidebar__span__content">
              Issues
            </Link>
          </div>
        </div>
        <div className="sidebar__link__content">
          <span className="sidebar__span__content">
            <img
              className="sidebar__icon__content"
              src="https://localhost:3000/Assets/content_icones/monitoring.svg"
              alt=""
            />
            Sites Monitoring
          </span>
        </div>
        <div className="sidebar__link__content">
          <span className="sidebar__span__content">
            <img
              className="sidebar__icon__content"
              src="https://localhost:3000/Assets/content_icones/rank.svg"
              alt=""
            />
            Afiiliate Rank Tracker
          </span>
        </div>
        <div className="sidebar__link__content">
          <Link to="/CustomLink" className="sidebar__span__content">
            <img
              className="sidebar__icon__content"
              src="https://localhost:3000/Assets/content_icones/link_checker.svg"
              alt=""
            />
            Custom Link Checker
          </Link>
        </div>
        <hr />
        <div className="sidebar__link__content">
          <span className="sidebar__span__content">
            <img
              className="sidebar__icon__content"
              src="https://localhost:3000/Assets/content_icones/guide.svg"
              alt=""
            />
            Watch our Guide
          </span>
        </div>
        <div className="sidebar__link__content">
          <Link to="/Pricing" className="sidebar__span__content">
            <img
              className="sidebar__icon__content"
              src="https://localhost:3000/Assets/content_icones/pricing.svg"
              alt=""
            />
            Pricing
          </Link>
        </div>
        <div className="sidebar__link__content">
          <span className="sidebar__span__content">
            <img
              className="sidebar__icon__content"
              src="https://localhost:3000/Assets/content_icones/gethelp.svg"
              alt=""
            />
            Get Help
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
