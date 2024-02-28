import * as React from 'react';
import * as Svg from 'react-native-svg';
export default (props?: Svg.SvgProps): React.ReactElement<Svg.SvgProps> => (
  <Svg.Svg viewBox="0 0 24 24" {...props}>
    <Svg.G dataName="Layer 2" tabIndex="-1" stroke="currentColor">
      <Svg.G dataName="question-mark" tabIndex="-1" stroke="currentColor">
        <Svg.Rect
          transform="rotate(180 12 12)"
          opacity="0"
          stroke="currentColor"
        />
        <Svg.Path
          d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z"
          stroke="currentColor"
        />
        <Svg.Circle cx="12" cy="19" r="1" stroke="currentColor" />
      </Svg.G>
    </Svg.G>
  </Svg.Svg>
);
