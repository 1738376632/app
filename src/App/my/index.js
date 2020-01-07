import React from "react";
import NavBar from "./NavBar"

let style = {
    div: {
        backgroundColor: "#fb7299",
        height: "42px",
        width: "100%",
        fontSize: "20px",
        color: "#fff",
        textAlign: "center",
        lineHeight: "40px"
    }
}

export default class My extends React.Component {
    render() {
        return (
            <div>
                <div style={style.div}>我的句库</div>
                <NavBar></NavBar>
            </div>
        );
    }
}