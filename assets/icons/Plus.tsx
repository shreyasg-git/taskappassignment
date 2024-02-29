import * as React from 'react';
import * as Svg from 'react-native-svg';
export default (props?: Svg.SvgProps): React.ReactElement<Svg.SvgProps> => (
  <Svg.Svg viewBox="0 0 24 24" fill="none" {...props}>
    <Svg.Path
      d="m11.25,4l1.5,0l0,16l-1.5,0l0,-16z"
      opacity="undefined"
      strokeWidth="0"
      fill="currentColor"
      tabIndex="-1"
      stroke="currentColor"
    />
    <Svg.Path
      d="m11.25,4l1.5,0l0,16l-1.5,0l0,-16z"
      transform="rotate(90 12 12)"
      opacity="undefined"
      strokeWidth="0"
      fill="currentColor"
      tabIndex="-1"
      stroke="currentColor"
    />
  </Svg.Svg>
);
