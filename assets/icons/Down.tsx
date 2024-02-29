import * as React from 'react';
import * as Svg from 'react-native-svg';
export default (props?: Svg.SvgProps): React.ReactElement<Svg.SvgProps> => (
  <Svg.Svg viewBox="0 0 24 24" fill="none" {...props}>
    <Svg.Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.5548 7.99989C21.0892 7.99989 21.357 8.64599 20.9792 9.02402L12.4151 17.5933C12.1804 17.8281 11.7997 17.8277 11.5655 17.5925L3.03438 9.0232C2.6577 8.64484 2.92569 7.99989 3.45959 7.99989L20.5548 7.99989Z"
      fill="currentColor"
      tabIndex="-1"
      stroke="currentColor"
    />
  </Svg.Svg>
);
