import React from "react";
import img from "../../img/向下.png"
import img2 from "../../img/加号.png"

let style = {
    section: {
        width: "100%",
        height: "60px",
        backgroundColor: "#f0f0f0",
        borderTop: "1px solid rgb(128,128,128)",
        textAlign: "center",
    },
    p: {
        width: "100%",
        height: "30px",
        lineHeight: "30px",
    },
    solid: {
        borderTop: "1px solid rgb(128,128,128)",
    },
    float: {
        float: "left",
    },
    float2: {
        float: "right",
    },
    text: {
        marginLeft: "15px",
    },
    ul: {
        backgroundColor: "#ffffff",
        width: "100%",
        height: "50px",
        lineHeight: "50px",

    }

}

export default class Section extends React.Component {
    // 数据渲染预留位置
    state = {
        data: {
            My: [
                {
                    id: "1",
                    name: "测试",
                }

            ],
            Album: [
                {
                    id: "2",
                    name: "测试"
                }

            ]
        }
    }
    render() {
        let { My, Album } = this.state.data
        return (
            <section style={style.section}>
                <p style={style.p}>
                    <span style={style.float}><img src={img} alt=""></img></span>
                    <span style={{ ...style.text, ...style.float }}>我创建的专辑</span>
                    <span style={style.float2}><img src={img2} alt=""></img></span>
                </p>
                <ul style={style.ul}>
                    {/* 预留我创建的专辑位置 */}
                    {
                        Album.map(value => {
                            return <li key={value.id}>{value.name}</li>
                        })
                    }
                </ul>
                <p style={{ ...style.p, ...style.solid }}>
                    <span style={style.float}><img src={img} alt=""></img></span>
                    <span style={{ ...style.text, ...style.float }}>我创建的专辑</span>
                </p>
                <ul style={style.ul}>
                    {/* 预留我收藏的专辑位置 */}
                    {
                        My.map(value => {
                            return <li key={value.id}>{value.name}</li>
                        })
                    }
                </ul>

            </section>
        )
    }
}