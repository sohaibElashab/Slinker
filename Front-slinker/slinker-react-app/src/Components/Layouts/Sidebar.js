import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [audit, setaudit] = useState(false);
  const websites = useSelector((state) => state.websites.websites);

  const ShowAudit = {
    display: "block",
  };
  const HideAudit = {
    display: "none",
  };
  const ChangeAudit = () => {
    setaudit(!audit);
  };
  const showSites = () => {
    if(websites.length > 0){
        console.log("if done")
        websites.map(element => {
            console.log("map done")
            return (
                <div className="sidebar__child__link__content active_menu_link__content" key={element.id}>
                    <span className="sidebar__span__content">
                    <img
                        className=""
                        src="https://localhost:3000/Assets/content_icones/Dashboard_icon.svg"
                        alt=""
                    />
                    test
                    </span>
                </div>
            );
        });
    }
  } 
//   const showSites = () => {
//       websites.forEach(website => {
//           {console.log(website.image)}
//         //   return (
//                 <div className="sidebar__child__link__content active_menu_link__content">
//                     <span className="sidebar__span__content">
//                     <img
//                         className=""
//                         src="https://localhost:3000/Assets/content_icones/Dashboard_icon.svg"
//                         alt=""
//                     />
//                     test
//                     </span>
//                 </div>
//         //   )
//       })
//   }
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
        <div className="sidebar__sites__content">
        {
            websites && showSites()
        }
        </div>
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
            <Link to={`/Summary/${3}`} className="sidebar__span__content">
              Summary
            </Link>
          </div>
          <div className="sidebar__child__link__content">
            <Link to="/Issues" className="sidebar__span__content">
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
          <Link to="/Custom" className="sidebar__span__content">
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
