import React from "react";
import img from "../../img/大红灯笼.png"

let style = {
    header: {
        backgroundColor: "#fb7299",
        height: "42px",
        width: "100%",
        fontSize: "20px",
        color: "#fff",
        textAlign: "center",
        lineHeight: "40px"
    },
    dl: {
        textAlign: "center",
        marginTop: "20px",
        borderBottom: "1px solid #A9A9A9"
    },
    dd: {
        width: "53%",
        height: "44px",
        color: "#fff",
        lineHeight: "44px",
        textAlign: "center",
        backgroundColor: "#FF69B4",
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
                            <dd style={style.dd}><span >点击登录</span></dd>
                        </dl>
                    </div>
                </section>
            </div>
        )
    }
}