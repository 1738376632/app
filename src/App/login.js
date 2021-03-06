import { InputItem, List, Toast, Button } from "antd-mobile";
import React from "react";
import { Link } from "react-router-dom"
import imga from "../img/maitian-002.jpg";
let style = {
  header:{
    fontSize: "20px",
    backgroundColor: "#FF3366 ",
    color: "rgb(255, 255, 255)",
    textAlign: "center",
    lineHeight:"40px"
  },
  margin: {
    paddingTop: "20px",
    marginLeft: "10px",
    marginRight: "10px"
  },
  div: {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${imga})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%"
  },
  span: {
    textAlign: "center",
    paddingTop: "75px"
  }
};
class ErrorInputExample extends React.Component {
  state = {
    value: "",
    hasError: false,
    password: "",
    pasError: false
  };
  onErrorClick = () => {
    if (this.state.hasError) {
      Toast.info("请输入正确的手机号");
    }
  };
  onChange = (value, state) => {
    // value.replace(/^/, "").
    let val = value.replace(/\s/g, "");
    if (!/^1[3-9][0-9]{9}$/.test(val))
      this.setState({
        hasError: true
      });
    else {
      this.setState({
        hasError: false
      });
    }
    this.setState({
      value
    });
  };
  // 密码验证
  pasErrorClick = () => {
    if (this.state.pasError) {
      Toast.info("密码不符合规范");
    }
  };
  pasChange = value => {
    // console.log(state);
    if (!/^[a-z][\d0-9]{4,9}$/i.test(value)) {
      this.setState({
        pasError: true
      });
    } else {
      this.setState({
        pasError: false
      });
    }
    this.setState({
      password: value
    });
  };
  // 提交请求
  submit = () => {
    // console.log(this.state.pasError)
    let { hasError, pasError } = this.state;
    console.log(hasError, "===", this.state);
    if (hasError) {
      alert("请输入正确的手机号");
    } else if (pasError) {
      alert("密码格式不正确");
    } else {
      console.log("在这里验证消息");
    }
  };
  // 跳转注册页面
  reg = () => {
    console.log("正在跳转注册页面");
  };
  render() {
    return (
      <div style={style.div}>
        <header style={style.header}>
             <h4>登录界面</h4> 
        </header>
        <div style={style.span}>
          <h4>登录句子控</h4>
        </div>
        <List style={style.margin}>
          <InputItem
            type="phone"
            placeholder="请输入手机号"
            error={this.state.hasError}
            onErrorClick={this.onErrorClick}
            onChange={this.onChange}
            value={this.state.value}
          >
            手机号码
          </InputItem>
        </List>

        <List style={style.margin}>
          <InputItem
            type="password"
            placeholder="请输入密码"
            error={this.state.pasError}
            onErrorClick={this.pasErrorClick}
            onChange={this.pasChange}
            value={this.state.password}
          >
            密码
          </InputItem>
        </List>
        <div style={style.margin}>
          <Button
            type="ghost"
            inline
            size="small"
            style={{
              marginRight: "4px",
              background: "#4076FF",
              color: "#fff",
              marginLeft: "14px"
            }}
            onClick={this.submit}
          >
            登录
          </Button>
          <Link to="/reg">
          <Button
            type="ghost"
            inline
            size="small"
            style={{
              background: "#9940FF",
              color: "#fff",
              float: "right",
              marginRight: "14px"
            }}
            onClick={this.reg}
          >
          
            注册
          </Button>
          </Link>
         
        </div>
      </div>
    );
  }
}

export default ErrorInputExample;
