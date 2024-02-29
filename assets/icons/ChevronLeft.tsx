import * as React from 'react';
import * as Svg from 'react-native-svg';
export default (props?: Svg.SvgProps): React.ReactElement<Svg.SvgProps> => (
  <Svg.Svg viewBox="0 0 24 24" fill="none" {...props}>
    <Svg.Path
      d="M17 21L8 12L17 3"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      tabIndex="-1"
    />
  </Svg.Svg>
);
