import { NavBar } from "antd-mobile";
import React from "react";
import{HashRouter,Link,Switch,Route}from "react-router-dom"
// import imga from "../img/地球.svg"
export default class Nav extends React.Component {
  state = {
    selectedTab: 'redTab',
    hidden: false,
    fullScreen: false,
  };
  render() {
    return (
      <div>
        <NavBar
          style={{ background: "#fb7299",zIndex:"3" }}
          mode="dark"
          leftContent="精选投稿"
          rightContent={[
            // eslint-disable-next-line jsx-a11y/alt-text
            // <img src={imga}/>
            <Link to="/hone/lunbo">About</Link>
          ]}
        >
        </NavBar>
      </div>
    );
  }
}