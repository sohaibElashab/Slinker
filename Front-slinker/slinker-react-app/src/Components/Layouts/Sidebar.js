import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";

const Sidebar = (props) => {
  const [audit, setaudit] = useState(
    sessionStorage.getItem("audit_value")
      ? sessionStorage.getItem("audit_value")
      : "none"
  );
  const [site_id, setsite] = useState(3);
  const location = useLocation();
  const websites = useSelector((state) => state.websites.websites);
  // var site_id = 0
  // if(websites !== undefined){
  //   site_id = websites[0].id
  //   console.log("siteid",site_id)
  // }
  // const ShowAudit = {
  //   display: "block",
  // };
  // const HideAudit = {
  //   display: "none",
  // };
  const ChangeAudit = () => {
    if (audit === "none") {
      setaudit("block");
      sessionStorage.setItem("audit_value", "block");
    }
    if (audit === "block") {
      setaudit("none");
      sessionStorage.setItem("audit_value", "none");
    }
  };

  const KeepOpen = () => {
    setaudit("block");
    sessionStorage.setItem("audit_value", "block");
  };

  let history = useHistory();
  const setIdsite = (id) => {
    setsite(id);
    console.log(location.pathname.split("/")[2]);
    if (
      location.pathname.split("/")[2] &&
      location.pathname.split("/")[2] !== id
    ) {
      location.pathname.split("/")[1] === "Summary"
        ? history.push(`/Summary/${id}`)
        : history.push(`/Issues/${id}`);
    }

    var elems = document.querySelectorAll(".changeclass");

    [].forEach.call(elems, function (el) {
      el.classList.remove("active_menu_link__content");
    });
    document.getElementById(id).classList.add("active_menu_link__content");
    console.log("id", id);
    sessionStorage.setItem("idSelector", id);
  };
  const select = () => {
    if (sessionStorage.getItem("idSelector")) {
      if (document.getElementById(sessionStorage.getItem("idSelector"))) {
        document
          .getElementById(sessionStorage.getItem("idSelector"))
          .classList.add("active_menu_link__content");
      }
    }
    if(websites !== undefined){
      if(document.getElementById(websites[0].id) && !sessionStorage.getItem("idSelector")){
        document.getElementById(websites[0].id).classList.add("active_menu_link__content")
        sessionStorage.setItem("idSelector", websites[0].id);
      }
    }
  };
  useEffect(() => {
    select();
  }, [location.pathname]);
  select();

  return (
    <div id="sidebar__content">
      <div className="sidebar__logo__content none">
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
            <span className="none">Sites</span> 
          </Link>
        </div>
        <div className="sidebar__sites__content none">
          {websites !== undefined
            ? websites.map((element) => (
                <div
                  className="sidebar__child__link__content changeclass "
                  id={element.id}
                  key={element.id}
                  onClick={() => setIdsite(element.id)}
                >
                  <span className="sidebar__span__content">
                    <img
                      className="sidebar__img__site__content"
                      src={element.image}
                      alt=""
                    />
                    {element.name}
                  </span>
                </div>
              ))
            : ""}
        </div>
        <hr className="none" />
        <div className="sidebar__link__content">
          <Link to="/Dashboard" className="sidebar__span__content">
            <img
              className="sidebar__icon__content"
              src="https://localhost:3000/Assets/content_icones/Dashboard_icon.svg"
              alt=""
            />
            <span className="none">Dashboard</span>
          </Link>
        </div>
        <div className="sidebar__link__content">
          <span className="sidebar__span__content" onClick={ChangeAudit}>
            <img
              className="sidebar__icon__content"
              src="https://localhost:3000/Assets/content_icones/audit.svg"
              alt=""
            />
            <span className="none">Affiliate audit</span>
          </span>
        </div>
        <div
          className="Affiliate__content"
          // style={audit ? ShowAudit : HideAudit}
          style={{ display: audit }}
        >
          <div className="sidebar__child__link__content none" onClick={KeepOpen}>
            <Link to={`/Summary/${site_id}`} className="sidebar__span__content">
              Summary
            </Link>
          </div>
          <div className="sidebar__child__link__content" onClick={KeepOpen}>
            <Link to={`/Issues/${site_id}`} className="sidebar__span__content">
              Issues
            </Link>
          </div>
        </div>
        <div className="sidebar__link__content none">
          <span className="sidebar__span__content">
            <img
              className="sidebar__icon__content"
              src="https://localhost:3000/Assets/content_icones/monitoring.svg"
              alt=""
            />
            <span>Sites Monitoring</span>
          </span>
        </div>
        <div className="sidebar__link__content none">
          <span className="sidebar__span__content">
            <img
              className="sidebar__icon__content"
              src="https://localhost:3000/Assets/content_icones/rank.svg"
              alt=""
            />
            <span>Afiiliate Rank Tracker</span>
          </span>
        </div>
        <div className="sidebar__link__content">
          <Link to="/CustomLink" className="sidebar__span__content">
            <img
              className="sidebar__icon__content"
              src="https://localhost:3000/Assets/content_icones/link_checker.svg"
              alt=""
            />
            <span className="none">Custom Link Checker</span>
          </Link>
        </div>
        <hr className="none" />
        <div className="sidebar__link__content none">
          <span className="sidebar__span__content">
            <img
              className="sidebar__icon__content"
              src="https://localhost:3000/Assets/content_icones/guide.svg"
              alt=""
            />
            <span>Watch our Guide</span>
          </span>
        </div>
        <div className="sidebar__link__content none">
          <Link to="/Pricing" className="sidebar__span__content">
            <img
              className="sidebar__icon__content"
              src="https://localhost:3000/Assets/content_icones/pricing.svg"
              alt=""
            />
            <span>Pricing</span>
          </Link>
        </div>
        <div className="sidebar__link__content">
          <span className="sidebar__span__content">
            <img
              className="sidebar__icon__content"
              src="https://localhost:3000/Assets/content_icones/gethelp.svg"
              alt=""
            />
            <span className="none">Get Help</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
