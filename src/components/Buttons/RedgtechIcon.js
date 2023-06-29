import Svg, {
  Circle,
  Ellipse,
  G,
  Text,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from "react-native-svg";

import React from "react";

export default class RedgtechIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: props.height ? props.height : 150 ,
      width: props.width ? props.width : 90,
    };
  }
  render() {
    return (
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        height={this.state.height}
        width={this.state.width}
        version="1.1"
        style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
        viewBox="0 0 8.79 6.8"
      >
        <G>
          <Path
            fill={"#FEFEFE"}
            d="M-0 1.33l2.01 0c0.33,0 0.62,0.03 0.83,0.18 0.54,0.37 0.55,1.03 0.13,1.46 -0.33,0.33 -0.91,0.25 -1.48,0.25l0 1.28c0,0.13 0.52,0.36 0.84,0.88 0.2,0.32 0.4,0.85 0.4,1.36l0 0.04c0,0.01 0.01,0.02 0.02,0.02l1 0c0.05,0 0.1,0 0.13,0l0.17 0c0.07,0 0.04,-0.15 0.04,-0.18 0,-0.07 -0.01,-0.17 -0.01,-0.28 0,-0.1 -0.01,-0.2 -0.02,-0.3l0 -0 -0 -0c-0.12,-0.93 -0.74,-1.56 -0.78,-1.7 0.29,-0.07 0.72,-0.47 0.92,-0.73 0.98,-1.31 0.25,-3.09 -1.23,-3.53 -0.35,-0.1 -2.5,-0.07 -2.98,-0.07l0 1.32zm4.33 4.09l0 0 -0 -0c1.01,0 1.77,0.1 2.5,-0.63 0.78,-0.78 0.82,-2.2 -0.16,-2.99 -0.5,-0.41 -0.87,-0.43 -1.74,-0.43 -0.3,-0.45 -0.22,-0.59 -0.79,-1.09 -0.19,-0.16 -0.27,-0.09 -0.33,-0.27 1.38,0 2.44,-0.12 3.55,0.62 0.72,0.47 1.42,1.57 1.42,2.75 0,1.06 -0.42,1.85 -1.01,2.43 -0.92,0.92 -1.88,0.93 -3.07,0.93l-0.37 0 0 -1.32zm0.6 -2.77c0,0.52 -0.35,0.88 -0.56,1.2l1.24 0 0.04 -1.32 -0.72 0 0 0.12z"
          />
        </G>
      </Svg>
    );
  }
}
