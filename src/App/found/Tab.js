import { Tabs, WhiteSpace } from 'antd-mobile';
import React from "react";

let style = {
    div: {
        width: "100%",
        height: "100px",
        backgroundColor:"#fff",
        textAlign: "center",
        lineHeight: "100px",
        borderTop: "1px solid #cccccc",
        borderBottom: "1px solid #cccccc",
    }
}

export default class Demo extends React.Component {
    state = {
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0,]
    }
    renderContent = tab =>
        (<div style={{ display: 'flex', height: '422px', backgroundColor: '#fff', flexWrap: "wrap" }}>
            {
                this.state.data.map(volue => {
                    return (<div style={style.div}>哈哈哈</div>)
                })
            }

        </div>);

    render() {
        const tabs = [
            { title: '动态' },
            { title: '推荐' },
            { title: '图文' },
            { title: '最新' },
            { title: '热门' },
            { title: '原创' },
            { title: '情感' },
            { title: '搞笑' },
            { title: '语录' },
            { title: '生活' },
            { title: '歌词' },
            { title: '电影' },
            { title: '英语' },
            { title: '随笔' },
            { title: '诗词' },

        ];

        return (
            <div>
                <span style={{ position: "fixed", }}></span>
                <WhiteSpace />
                <Tabs  tabs={tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={5} />}>
                    {this.renderContent}
                </Tabs>
                <WhiteSpace />
            </div>
        );
    }
}
