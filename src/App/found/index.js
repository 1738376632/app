import { NavBar, SearchBar, WhiteSpace, WingBlank } from "antd-mobile";
import React from "react";
import Tad from "./Tab"

export default class Nav extends React.Component {
    // componentDidMount生命周期函数
    componentDidMount() {
        this.autoFocusInst.focus();
    }
    search = () => {
        alert("在这里发送消息")
    }
    render() {
        return (
            <div>
            <SearchBar
                placeholder="搜你想搜的"
                ref={ref => this.autoFocusInst = ref}
                cancelText={"搜索"}
                style={{ background: "#fb7299", paddingLeft: "10px" }}
                onCancel={this.search} />
                <Tad></Tad>
            </div>
        );
    }
}