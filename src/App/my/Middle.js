import React from "react";
import { Link } from "react-router-dom"
import A from "../../img/笔.png"
import B from "../../img/喜欢.png"
import C from "../../img/收 藏.png"
import D from "../../img/我的标签.png"
import img from "../../img/前进.png"

let style = {
    menu: {
        marginTop: "30px",
        textAlign: "center",
    },
    li: {
        width: "100%",
        height: "35px",
        borderTop: "1px solid  #808080",
        // lineHeight: "64px"
    },
    span: {
        lineHeight: "35px",
        display: "inline-block",

    },
    img: {
        width: "16x",
        height: "16px",
        lineHeight: "35px",
    },

    float: {
        float: "left",
    },

    text: {
        marginLeft: "15px",
    },

    float2: {
        float: "right",
    }

}

export default class Middle extends React.Component {
    state = {
        data: [
            {
                img: A,
                name: "发布的句子",
                img2: img,
                path: "/lush"
            },
            {
                img: B,
                name: "喜欢的句子",
                img2: img,
                path: "/like"
            },
            {
                img: C,
                name: "收藏的句子",
                img2: img,
                path: "/collection"
            },
            {
                img: D,
                name: "我的书签",
                img2: img,
                path: "/bookmark",
            }
        ]
    }
    render() {
        let { data } = this.state
        return (
            <menu style={style.menu}>
                {
                    data.map(value => {
                        return (
                            <Link exact to={value.path}>
                                <li style={style.li}>
                                    <span style={{ ...style.span, ...style.float }}>
                                        <img src={value.img} alt="" style={style.img}></img>
                                    </span>
                                    <span style={{ ...style.span, ...style.float, ...style.text }}>
                                        {
                                            value.name
                                        }
                                    </span>
                                    <span style={{ ...style.span, ...style.float2 }}>
                                        <img src={value.img2} alt="" style={style.img}></img>
                                    </span>
                                </li>
                            </Link>

                        )
                    })
                }
            </menu>
        )
    }
}