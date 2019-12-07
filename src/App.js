import React from 'react';
import { HashRouter, Route } from "react-router-dom"
import Navbar from "./App/index.js"
// import Login  from "./App/login"
import Hone   from "./App/home"
// import Base from "./project/ces"
import Found from "./App/found"

function App() {
  return (
    <HashRouter>
      <Route  exact path="/" component={Hone}></Route>
      <Route exact path="/found" component={Found}></Route>
      <Route path="/" component={Navbar}></Route>
    </HashRouter>
  );
}

export default App;
