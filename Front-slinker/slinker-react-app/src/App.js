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
import { useEffect } from "react";

function App() {
  useEffect(() => {
    if (localStorage.getItem("token_user")) {
      sessionStorage.setItem("token_user", localStorage.getItem("token_user"));
    }
  });
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
      </Router>
    </div>
  );
}

export default App;
