import { TabBar } from 'antd-mobile';
import React from "react";
import { NavLink } from "react-router-dom"
import imga from "../img/房子.svg"
import imgb from "../img/地球.svg"
import imgc from "../img/我的.svg"
import imgd from "../img/账号.svg"
import imge from "../img/添加.svg"
import Home from "./home"
import found from "./found"


let style = {
  color: "#fb7299",
  img: {
    display: "block",
    width: '22px',
    height: '22px',
    paddingLeft: "3px",
    paddingTop: "10px",
  }

}
class TabBarExample extends React.Component {
  state = {
    selectedTab: 'redTab',
    // hidden: ture,
    fullScreen: false,
    data: [
      {
        path: "/",
        title: "推荐",
        img: imga
      },
      {
        path: '/found',
        title: "发现",
        img: imgb

      },
      {
        path: "/push",
        title: "",
        img: imge
      },
      {
        path: "/my",
        title: "我的",
        img: imgd
      },
      {
        path: "/account",
        title: "账号",
        img: imgc
      }
    ]
  };
  render() {
    console.log(this.props)
    return (
      <div style={{ position: 'fixed', bottom: "0px", width: "100%" }}>
        <ul style={{ display: "flex", width: "100%", justifyContent: "space-between", background: "#33A3F4" }}>
          {this.state.data.map(item => {
            return (
              <li >
                <NavLink exact to={item.path} activeStyle={style}>
                  <img  style={style.img} src={item.img} ></img>
                  {item.title == 0 ? "" : <span>{item.title}</span>}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}
export default TabBarExample
  // < TabBar.Item
