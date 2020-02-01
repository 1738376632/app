import React from "react";
import img from "../../img/大红灯笼.png"
import { Link } from "react-router-dom"
import Middle from "./middle";

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
    dl: {
        textAlign: "center",
        marginTop: "10px",
        borderBottom: "1px solid #A9A9A9"
    },
    dd: {
        width: "53%",
        height: "44px",
        color: "#fff",
        lineHeight: "44px",
        textAlign: "center",
        backgroundColor: "#FF3366 ",
        marginLeft: "76px",
        marginTop: "10px",
        marginBottom: "10px",

    }
}
export default class My extends React.Component {
    render() {
        return (
            <div>
                <header style={style.header}> 账号 </header>
                <section>
                    <div>
                        <dl style={style.dl} >
                            <dt><img src={img} alt="大红灯笼"></img></dt>
                            <dd style={style.dd}>
                                <Link to="/login">
                                    <span >点击登录</span>
                                </Link>
                            </dd>
                        </dl>
                    </div>
                </section>
                <Middle></Middle>
            </div>
        )
    }
}