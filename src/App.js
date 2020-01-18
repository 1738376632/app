import React from 'react';
import { HashRouter, Route, Link } from "react-router-dom"
import Navbar from "./App/index.js"
import Hone from "./App/home"
import Found from "./App/found"
import My from "./App/my"
import Account from "./App/Account"
import Push from "./App/push"

// 我的页面中的子页面
import Bookmark from "./App/my/bookmark"
import Lately from "./App/my/lately"
import Partake from "./App/my/partake"
import Talk from "./App/my/talk"
import Search from "./App/my/search"
import Timeline from "./App/my/timeline"
import Lush from "./App/my/push"
import Like from "./App/my/like"
import Collection from "./App/my/collection"

function App() {
  return (
    <HashRouter>
      <Route exact path="/" component={Hone}></Route>
      <Route exact path="/found" component={Found}></Route>
      <Route exact path="/my" component={My}></Route>

      {/* 我的页面中的子页面 */}
      <Route exact path="/bookmark" component={Bookmark}></Route>
      <Route exact path="/lately" component={Lately}></Route>
      <Route exact path="/talk" component={Talk}></Route>
      <Route exact path="/search" component={Search}></Route>
      <Route exact path="/timeline" component={Timeline}></Route>
      <Route exact path="/partake" component={Partake}></Route>
      <Route exact path="/lush" component={Lush}></Route>
      <Route exact path="/like" component={Like}></Route>
      <Route exact path="/collection" component={Collection}></Route>


      <Route exact path="/account" component={Account}></Route>
      <Route exact path="/push" component={Push}></Route>
      <Route path="/" component={Navbar}></Route>
    </HashRouter>
  );
}

export default App;
