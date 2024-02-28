import * as React from 'react';
import * as Svg from 'react-native-svg';
export default (props?: Svg.SvgProps): React.ReactElement<Svg.SvgProps> => (
  <Svg.Svg viewBox="0 0 28 28" fill="none" {...props}>
    <Svg.Path
      d="m18,14.5l-3.5,0l0,3.5l-1,0l0,-3.5l-3.5,0l0,-1l3.5,0l0,-3.5l1,0l0,3.5l3.5,0l0,1z"
      fill="currentColor"
      tabIndex="-1"
      stroke="currentColor"
    />
    <Svg.Path
      stroke="currentColor"
      opacity="undefined"
      d="m14,26.18952c-6.68509,0 -12.10001,-5.45498 -12.10001,-12.18952c0,-6.73454 5.41492,-12.18952 12.10001,-12.18952c6.68509,0 12.10001,5.45498 12.10001,12.18952c0,6.73454 -5.41492,12.18952 -12.10001,12.18952z"
      tabIndex="-1"
    />
  </Svg.Svg>
);
