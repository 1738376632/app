import React from "react";

let style={
    header: {
        backgroundColor: "#FF3366 ",
        height: "42px",
        width: "100%",
        fontSize: "20px",
        color: "#fff",
        textAlign: "center",
        lineHeight: "40px"
    },
}
export default class My extends React.Component {
    render() {
        return (<header style={style.header}> 我的发布</header>);
    }
}