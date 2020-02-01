import React from "react";
import { WhiteSpace } from 'antd-mobile';
import { Link } from "react-router-dom"
import img2 from "../../img/大红灯笼.png"
import img from "../../img/箭头2.png"

let style = {
    li: {
        width: "100%",
        height: "30px",
        lineHeight: "30px",
        backgroundColor: "#CCCCCC",
    },
    img: {
        float: "right",
        marginTop: "8px",

    },
    img2: {
        width: "16px",
        height: "16px",
        marginTop: "2px"
    }

}
export default class Middle extends React.Component {
    state = {
        data: [
            {
                img2: img2,
                name: "我的消息",
                img: img,
            },
            {
                img2: img2,
                name: "帮助中心",
                img: img,
            },
            {
                img2: img2,
                name: "参与句子控",
                img: img,
            },
            {
                img2: img2,
                name: "意见反馈",
                img: img,
            },
            {
                img2: img2,
                name: "设置",
                img: img,
            },
            {
                img2: img2,
                name: "第三方绑定",
                img: img,
            },
            {
                img2: img2,
                name: "关于",
                img: img,
            },
        ]
    }

    render() {
        let { data } = this.state
        return (
            <nav>
                {
                    data.map(value => {
                        return (
                            <div>
                                <WhiteSpace size="lg" />
                                <Link to="/error">
                                    <li style={style.li}>
                                        <span><img src={img2} style={style.img2} alt="" /></span>
                                        <span style={{ marginLeft: "10px" }}>{value.name}</span>
                                        <span><img src={img} style={style.img} alt="" /></span>
                                    </li>
                                </Link>
                            </div>
                        )
                    })
                }


            </nav>
        )
    }
}

