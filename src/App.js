import React from 'react';
import Login from "./project/login"
import Reg from "./project/reg"
import Nav from "./project/"
import Navi from "./project/navi"
import Haed from "./project/navi/head"
// import Base from "./project/ces"
let style = {
  width: "100%",
  height: "100%"
}
function App() {
  return (
    <div className="App" style={style}>
      <Login></Login>
      <Reg></Reg>
      <Nav></Nav>
    </div>
  );
}

export default App;
