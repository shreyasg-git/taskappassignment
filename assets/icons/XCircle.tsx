import * as React from 'react';
import * as Svg from 'react-native-svg';
export default (props?: Svg.SvgProps): React.ReactElement<Svg.SvgProps> => (
  <Svg.Svg viewBox="0 0 24 24" fill="none" {...props}>
    <Svg.Path
      d="M14.5714 9.42857L9.42856 14.5714M9.42856 9.42857L14.5714 14.5714M20.5714 12C20.5714 16.7339 16.7339 20.5714 12 20.5714C7.26612 20.5714 3.42856 16.7339 3.42856 12C3.42856 7.26613 7.26612 3.42857 12 3.42857C16.7339 3.42857 20.5714 7.26613 20.5714 12Z"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      tabIndex="-1"
    />
  </Svg.Svg>
);
