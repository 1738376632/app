import React from "react";
import NavBar from "./NavBar"
import Middle from "./Middle"
import Section from "./Section"


let style = {
    div:{
        backgroundColor:"#fff"
    },
    header: {
        backgroundColor: "#FF3366 ",
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
            <div style={style.div}>
                <header style={style.header}>我的句库</header>
                <NavBar></NavBar>
                <Middle></Middle>
                <Section></Section>
            </div>
        );
    }
}