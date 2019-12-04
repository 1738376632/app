import React from 'react';
import{HashRouter,NavLink,Switch,Route}from "react-router-dom"
import Hone from "./App/hone"
import Base from "./App/Base"
// import Base from "./project/ces"
let style = {
  width: "100%",
  height: "100%"
}
function App() {
  return (
    <div className="App" style={style}>
      <HashRouter>
      <Route  path="/hone" component={Hone.Head}/>
      <Route exact path="/hone/:lunbo" component={Hone.Lunbo}/>
      <Route path="/hone" component={Base}/>
      </HashRouter>
    </div>
  );
}

export default App;
