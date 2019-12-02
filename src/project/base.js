import { TabBar } from 'antd-mobile';
import React from "react";
import imga from "../img/房子.svg"
import imgb from "../img/地球.svg"
import imgc from "../img/我的.svg"
import imgd from "../img/账号.svg"
import imge from "../img/添加.svg"
class TabBarExample extends React.Component {

  state = {
    selectedTab: 'redTab',
    hidden: false,
    fullScreen: false,
  };
  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        // tabBarPosition="top"
        >
          <TabBar.Item
            title="推荐"
            key="Life"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${imga}) center center /  21px 21px no-repeat`
            }}
            />
            }
          >
          </TabBar.Item>
          <TabBar.Item
            title="发现"
            key="2"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${imgb}) center center /  21px 21px no-repeat`
            }}
            />
            }
          >
          </TabBar.Item>
          <TabBar.Item
            key="Life"
            icon={<div style={{
              width: '32px',
              height: '32px',
              background: `url(${imge}) center center /  31px 31px no-repeat`
            }}
            />
            }
          >
          </TabBar.Item>
          <TabBar.Item
            title="我的"
            key="3"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${imgc}) center center /  21px 21px no-repeat`
            }}
            />
            }
          >
          </TabBar.Item>
          <TabBar.Item
            title="账号"
            key="Life"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${imgd}) center center /  21px 21px no-repeat`
            }}
            />
            }
          >
          </TabBar.Item>

        </TabBar>
      </div>
    );
  }
}
export default TabBarExample