import React, { Component } from "react";
import { connect } from "react-redux";
import { Harmonizer } from "color-harmony";

import "./App.css";

import { colorChange } from "./state/colorReducer";

const harmonizer = new Harmonizer();

const getPoo = color => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="128"
      height="128"
      style={{ enableBackground: "new 0 0 128 128" }}
    >
      <script xmlns="" />
      <g id="2">
        <g>
          <path
            d="M118.89,75.13c-1.31-2.72-3.46-5.53-6.97-7.33c-2.37-1.48-4.57-2.24-6.01-2.63 c1.53-5.6-0.64-10.06-3.69-13.39c-4.53-4.88-9.27-5.59-9.27-5.59l-0.01,0c1.56-3.03,2.15-6.54,1.36-9.99 c-1-4.26-3.29-6.94-6.31-8.73c-3.09-1.83-6.91-2.73-10.83-3.43c-1.88-0.34-9.81-1.45-13.1-6c-2.65-3.69-2.73-10.33-3.45-12.32 c-0.77-2.05-3.38-1.15-6.23,0.76c-3.33,2.22-10.23,9.35-12.89,16.49c-2.03,5.47-2.08,10.21-1.28,13.89 c-3.29,0.55-5.76,1.66-6.23,1.88c-0.16,0.05-0.32,0.1-0.49,0.17c-3.01,1.24-9.43,7.02-10.01,15.85c-0.2,3.14,0.21,6.31,1.2,9.26 c-3.94,1.1-6.22,2.54-6.26,2.57c-2,0.75-5.18,2.95-6.15,4.13c-1.97,2.38-3.34,5.21-4.15,8.18C6.35,85.36,7,92.71,10.14,98.67 c1.74,3.31,4.12,6.83,6.74,9.52c8.55,8.79,23.31,12.11,34.96,14.03c14.19,2.34,29.05,1.52,42.33-3.97 c19.92-8.22,25.22-21.44,26-25.17C121.92,84.77,119.8,77,118.89,75.13z"
            style={{ fill: color }}
          />
          <g>
            <g>
              <ellipse
                cx="85.95"
                cy="66.39"
                rx="16.61"
                ry="15.5"
                style={{ fill: "#FFFFFF" }}
                transform="matrix(0.1106 -0.9939 0.9939 0.1106 10.453 144.4706)"
              />
              <path
                d="M92.63,66.36c-0.23,3.3-3.14,5.82-6.49,5.62c-3.36-0.19-5.9-3.04-5.67-6.34 c0.22-3.31,3.12-5.82,6.48-5.62C90.31,60.21,92.86,63.06,92.63,66.36"
                style={{ fill: "#2F2F2F" }}
              />
            </g>
            <g>
              <ellipse
                cx="42.46"
                cy="66.4"
                rx="15.5"
                ry="16.61"
                style={{ fill: "#FFFFFF" }}
                transform="matrix(0.9972 -0.0752 0.0752 0.9972 -4.8714 3.3796)"
              />
              <path
                d="M49.02,65.13c0.38,3.29-2.01,6.3-5.34,6.72c-3.34,0.43-6.36-1.9-6.74-5.18 c-0.4-3.29,1.99-6.3,5.33-6.73C45.6,59.52,48.63,61.85,49.02,65.13"
                style={{ fill: "#2F2F2F" }}
              />
            </g>
          </g>
          <path
            d="M87.35,89.46c-2.22-1.5-5.02-0.51-7.49,0c-6.9,1.42-12.95,1.48-15.86,1.48 c-2.91,0-8.96-0.06-15.86-1.48c-2.47-0.51-5.27-1.5-7.49,0c-2.82,1.9-0.74,8.74,3.7,13.36c2.68,2.79,9.07,8.21,19.66,8.21 c10.58,0,16.97-5.42,19.66-8.21C88.09,98.2,90.17,91.37,87.35,89.46z"
            style={{ fill: "#ED6D31" }}
          />
        </g>
      </g>
    </svg>
  );
};

class App extends Component {
  handlePooClick = () => {
    const rainbow = [
      "#9400D3",
      "#4B0082",
      "#0000FF",
      "#00FF00",
      "#FF7F00",
      "#FF0000"
    ];

    const index = Math.floor(rainbow.length * Math.random());
    this.props.colorChange(rainbow[index]);
  };

  render() {
    const { color } = this.props;
    const harmonized = harmonizer.tints(color, 5);
    const rootStyle = { backgroundColor: harmonized[harmonized.length - 1] };

    return (
      <div className="App" style={rootStyle}>
        <div onClick={this.handlePooClick}>
          <div className="App-logo">{getPoo(color)}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.colorState
});

// longhand - customizeable
// const mapDispatchToProps = dispatch => ({
//   colorChange: color => dispatch(colorChange(color))
// });

// shorthand - recommended
const mapDispatchToProps = {
  colorChange
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);