import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

// NAVIGATION
import Nav from "./components/Nav";
// PAGES
import Home from "./pages/Home/HomePage";


import "./index.css";


const App = () => (
  <div>
    <Nav />
   
    
    
    <div className="container">
      <Route exact={true} path="/" component={Home} />
      
    </div>
  </div>
);

render(
  <Router>
    <App />
   
  </Router>,
  document.getElementById("root")
);
