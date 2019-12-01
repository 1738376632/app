import { NavBar, Icon,TabBar } from "antd-mobile";
import React from "react";
import Base  from "./ces"
// let style={
//     div:
// }
export default class Nav extends React.Component {
    state = {
        selectedTab: 'redTab',
        hidden: false,
        fullScreen: false,
      };
  render() {
    return (
      <div>
        <NavBar
        style={{background: "#fb7299"}}
          mode="dark"
          leftContent="精选投稿"
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: "16px" }} />,
          ]}
        >
        </NavBar>
        <TabBar.Item
            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
            title="My"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
         
          </TabBar.Item>
      </div>
    );
  }
}
