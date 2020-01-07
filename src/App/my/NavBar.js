import React from "react";
import img from "../../img/搜索.png"

let style = {
    div: {
        width: "100%",
        marginTop:"10px",
        display: "flex",
        justifyContent: "space-around",
        borderButton:"1px solid #00f"
    },
    dl:{
        width:"60px",
        height:"60px",
    },
    dt:{
        textAlign: "center",
        lineHeight: "50px",
        backgroundColor: "#fb7299",
        height:"50px",
        borderRadius: "50%",
    },
    dd:{
        textAlign:"center",
    }
}

export default class NavBar extends React.Component {
    state = {
        data: [
            {
                img: img,
                name: "时光轴",
            },
            {
                img: img,
                name: "最近浏览",
            },
            {
                img: img,
                name: "我的参与",
            },
            {
                img: img,
                name: "我的话题",
            },
            {
                img: img,
                name: "搜索句库",
            },
        ]
    }
    render() {
        let { data } = this.state
        return (
            <div style={style.div}>
                {
                    data.map((value) => {
                        return (
                            <dl style={style.dl}>
                                <dt style={style.dt}>
                                    <img src={value.img}></img>
                                </dt>
                                <dd style={style.dd}>
                                    {value.name}
                                </dd>
                            </dl>


                        )
                    })
                }
            </div>
        );
    }
}