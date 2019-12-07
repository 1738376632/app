import React from 'react'
// import ReactDOM from 'react-dom'
import { Carousel, WingBlank } from 'antd-mobile'
import "../../css/zebra.css"

export default class Zebra extends React.Component {

  state = {
    data: ['1', '2', '3'],
    imgHeight: "420px",
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }
  render() {
    return (
      <WingBlank>
        <Carousel className="space-carousel"
          frameOverflow="visible"
          dots={false}
          cellSpacing={10}
          slideWidth={0.8}
          autoplay={false}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => this.setState({ slideIndex: index })}
        >
          {this.state.data.map((val, index) => (
            <div
              key={val}
              style={{
                display: 'block',
                position: 'relative',
                top: this.state.slideIndex === index ? -10 : 0,
                boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
                marginTop: "35px",
                height: "400px",
                borderRadius: "15px"
              }}
            >
              <img
                key={index}
                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top', borderRadius: "15px 15px 0px 0px" }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </div>
          ))}
        </Carousel>
      </WingBlank>
    );
  }
}   