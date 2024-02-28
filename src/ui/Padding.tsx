import React from 'react';
import {View} from 'react-native';
type PaddingProps = {
  height?: number;
  width?: number;
};
const Padding: React.FC<PaddingProps> = function ({height = 2, width = 2}) {
  return <View style={{height, width}} />;
};
export default Padding;
