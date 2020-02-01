import React from "react";
import { Link } from "react-router-dom"
import img from "../../img/搜索.png"



let style = {
    nav: {
        width: "100%",
        marginTop: "10px",
        display: "flex",
        justifyContent: "space-around",
        borderButton: "1px solid #00f"
    },
    dl: {
        width: "60px",
        height: "50px",
    },
    dt: {
        textAlign: "center",
        lineHeight: "50px",
        backgroundColor: "#FF3366 ",
        height: "50px",
        borderRadius: "50%",
    },
    dd: {
        textAlign: "center",
    }
}

export default class NavBar extends React.Component {
    state = {
        data: [
            {
                img: img,
                name: "时光轴",
                path:"/timeline",
            },
            {
                img: img,
                name: "最近浏览",
                path:"/lately",
            },
            {
                img: img,
                name: "我的参与",
                path:"/partake"
            },
            {
                img: img,
                name: "我的话题",
                path:"/talk"
            },
            {
                img: img,
                name: "搜索句库",
                path:"/search"
            },
        ]
    }
    render() {
        let { data } = this.state
        return (
            <nav style={style.nav}>
                {
                    data.map((value) => {
                        return (
                            <Link to={value.path}>
                                <dl style={style.dl}>
                                    <dt style={style.dt}>
                                        <img src={value.img} alt=""></img>
                                    </dt>
                                    <dd style={style.dd}>
                                        {value.name}
                                    </dd>
                                </dl>
                            </Link>

                        )
                    })
                }
            </nav>
        );
    }
}