import React from 'react';
import { HashRouter, Route } from "react-router-dom"
import Navbar from "./App/index.js"
// import Login  from "./App/login"
import Hone   from "./App/home"
// import Base from "./project/ces"
import Found from "./App/found"
import My from "./App/my"
import Account from  "./App/Account"
import Push from "./App/push"

function App() {
  return (
    <HashRouter>
      <Route  exact path="/" component={Hone}></Route>
      <Route exact path="/found" component={Found}></Route>
      <Route exact path="/my" component={My}></Route>
      <Route exact path="/account" component={Account}></Route>
      <Route exact path="/push" component={Push}></Route>
      <Route path="/" component={Navbar}></Route>
    </HashRouter>
  );
}

export default App;
