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
  const dispatch = useDispatch();
  // const user = useSelector((state) => state.user.user);
  // const websites = useSelector((state) => state.websites.websites);
  // const pages = useSelector((state) => state.pages.pages);
  // const products = useSelector((state) => state.products.products);
  // const similars = useSelector((state) => state.similar.similars);

  // const fetshUser = async () => {
  //   console.log("done fetshUser");
  //   const response = await axios
  //     .get("http://127.0.0.1:8000/api/auth/user", {
  //       headers: {
  //         Authorization: "token " + sessionStorage.getItem("token_user"),
  //       },
  //     })
  //     .catch((err) => console.log("err", err));
  //   dispatch(setUser(response.data));
  //   if(user && user !== [])
  //   {
  //     await fetshData(user.id);
  //     console.log("user", user.id);
  //     console.log("websites",websites)
  //     console.log("pages",pages)
  //     console.log("products",products)
  //   }
  // };
  
  //   const fetshData = async (id) => {
  //     if(!websites){
  //       const response = await axios
  //         .post(`http://127.0.0.1:8000/api/websites/ID/`, { user_id: id })
  //         .catch((err) => console.log("err", err));
  //       dispatch(setWebSite(response.data));
  //       console.log("done setWebSite");
  //     }
  //     if(!pages){
  //       const response = await axios
  //         .post(`http://127.0.0.1:8000/api/pages/ID/`, { user_id: id })
  //         .catch((err) => console.log("err", err));
  //       dispatch(setPages(response.data));
  //       console.log("do setPagesne");
  //     }
  //     if(!products){
  //       const response = await axios
  //         .post(`http://127.0.0.1:8000/api/products/ID/`, { user_id: id })
  //         .catch((err) => console.log("err", err));
  //       dispatch(setProduct(response.data));
  //       console.log("done setProduct");
  //     }
  //     if(!similars){
  //       const response = await axios
  //         .post(`http://127.0.0.1:8000/api/similar/ID/`, { user_id: id })
  //         .catch((err) => console.log("err", err));
  //       dispatch(setSimilar(response.data));
  //       console.log("done setProduct");
  //     }
  //   };

  const [user , setuser] = useState() ;
  const [websites , setwebsites] = useState() ;
  const [pages , setpages] = useState() ;
  const [products , setproducts] = useState() ;
  const [similars , setsimilars] = useState() ;

  const fetshUser = async () => {
    console.log("done fetshUser");
    const response = await axios
      .get("http://127.0.0.1:8000/api/auth/user", {
        headers: {
          Authorization: "token " + sessionStorage.getItem("token_user"),
        },
      })
      .catch((err) => console.log("err", err));
    setuser(response.data)
    if(user && user !== [])
    {
      await fetshData(user.id);
      console.log("user", user.id);
      console.log("websites",websites)
      console.log("pages",pages)
      console.log("products",products)
    }
  };
  
    const fetshData = async (id) => {
      if(!websites){
        const response = await axios
          .post(`http://127.0.0.1:8000/api/websites/ID/`, { user_id: id })
          .catch((err) => console.log("err", err));
        
          setwebsites(response.data)
          console.log("done setWebSite");
      }
      if(!pages){
        const response = await axios
          .post(`http://127.0.0.1:8000/api/pages/ID/`, { user_id: id })
          .catch((err) => console.log("err", err));
        
          setpages(response.data)
          console.log("do setPagesne");
      }
      if(!products){
        const response = await axios
          .post(`http://127.0.0.1:8000/api/products/ID/`, { user_id: id })
          .catch((err) => console.log("err", err));
        
          setproducts(response.data)
          console.log("done setProduct");
      }
      if(!similars){
        const response = await axios
          .post(`http://127.0.0.1:8000/api/similar/ID/`, { user_id: id })
          .catch((err) => console.log("err", err));
          setsimilars(response.data)
          console.log("done setProduct");
      }
    };

  

  // if(user && user !== [])
  // {
  //   fetshData(user.id);
  //   console.log("user", user.id);
  //   console.log("websites",websites)
  //   console.log("pages",pages)
  //   console.log("products",products)
    
  // }

  useEffect(() => {
    if (localStorage.getItem("token_user")) {
      sessionStorage.setItem("token_user", localStorage.getItem("token_user"));
    }
    if(sessionStorage.getItem("token_user"))
      fetshUser();
  });

  // const ayoubzaml = () => console.log("ayoub zaml 2")
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
