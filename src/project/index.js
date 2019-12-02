import { NavBar, Icon, TabBar } from "antd-mobile";
import React from "react";
import Base from "./base"
import Zebra from "./zebra"
import imga from "../img/地球.svg"
// let style={
//     div:
// }
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
          style={{ background: "#fb7299" }}
          mode="dark"
          leftContent="精选投稿"
          rightContent={[
            // eslint-disable-next-line jsx-a11y/alt-text
            <img src={imga}/>
          ]}
        >
        </NavBar>
        <Zebra></Zebra>
        <Base></Base>
      </div>
    );
  }
}
