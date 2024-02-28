import React from 'react';
import {NumberProp, SvgProps} from 'react-native-svg';
import {findIconByName, IconType} from '../../assets/icons';
import {Colors} from '../consts';

export interface IconProps extends SvgProps {
  name: IconType;
  size?: NumberProp;
  color?: string;
  style?: any; // TODO: figure out the type here
}

export type SvgIconElement = React.ReactElement<IconProps>;

const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color = Colors.grey,
  ...svgProps
}) =>
  React.createElement(findIconByName(name), {
    ...svgProps,
    color,
    height: size,
    width: size,
    tabIndex: -1,
  });
export default Icon;
