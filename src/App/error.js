import React from "react";

let style = {
    header: {
        backgroundColor: "#FF3366 ",
        height: "42px",
        width: "100%",
        fontSize: "20px",
        color: "#fff",
        textAlign: "center",
        lineHeight: "40px"
    },
    article: {
        position: "absolute",
        left: "30px",
        top: "249px",
    },
}

let Development = () => (
    <div>
        <header style={style.header}>
            <h4>Error</h4>
        </header>
        <article style={style.article}>
            <p style={{fontWeight:"bold",marginLeft:"25px"}}>该功能正在开发中，敬请期待</p>
            <p style={{fontWeight:"bold"}}>This function is under development</p>
        </article>
    </div>

)

export default Development



