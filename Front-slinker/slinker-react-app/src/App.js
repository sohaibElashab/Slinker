import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Login from "./Components/Pages/Login";
import Register from "./Components/Pages/Register";
import Contact from "./Components/Pages/Contact";
import Custom from "./Components/Pages/Custom";
import CustomLink from "./Components/Pages/CustomLink";
import Dashboard from "./Components/Pages/Dashboard";
import Issues from "./Components/Pages/Issues";
import Load from "./Components/Pages/Load";
import Pricing from "./Components/Pages/Pricing";
import ScanningProgress from "./Components/Pages/ScanningProgress";
import Sites from "./Components/Pages/Sites";
import Summary from "./Components/Pages/Summary";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  setPages,
  setProduct,
  setSimilar,
  setUser,
  setWebSite,
} from "./Redux/Actions/ScrapyAction";

function App() {

  const websites = useSelector((state) => state.websites);
  const pages = useSelector((state) => state.pages);
  const products = useSelector((state) => state.products);
  const similars = useSelector((state) => state.similars);
  const dispatch = useDispatch();
  useEffect(() => {
    fetshData()
  }, [])

  const fetshData = () => {
    if(sessionStorage.getItem("token_user")){
        dispatch(setWebSite());
        dispatch(setPages());
        dispatch(setProduct());
        dispatch(setSimilar());
    } 
  }

  console.log("websites",websites)
  console.log("pages",pages)
  console.log("products",products)
  console.log("similars",similars)
  useEffect(() => {
    if (localStorage.getItem("token_user")) {
      sessionStorage.setItem("token_user", localStorage.getItem("token_user"));
    }
  });
  const test = () => {
    console.log("test true")
  }
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/Register" component={Register} />
        <Route path="/Login" component={Login} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Custom" component={Custom} />
        <Route path="/CustomLink" component={CustomLink} />
        <Route path="/Dashboard" component={Dashboard} />
        <Route path="/Issues" component={Issues} />
        <Route path="/Load" component={Load} />
        <Route path="/Pricing" component={Pricing} />
        <Route path="/ScanningProgress" component={ScanningProgress} />
        <Route path="/Sites" component={Sites} />
        <Route path="/Summary" component={Summary} />
        <Route>404 Not Found!</Route>
      </Router>
    </div>
  );
}

export default App;
