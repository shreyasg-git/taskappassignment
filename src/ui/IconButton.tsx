import React from 'react';
import {GestureResponderEvent, TouchableOpacity} from 'react-native';
import {NumberProp} from 'react-native-svg';

import {Colors} from '../consts';
import {IconType} from '../../assets/icons';
import Icon from './Icon';

interface TProps {
  icon: IconType;
  iconSize?: NumberProp;
  backgroundColor?: string;
  iconColor?: string;
  roundness?: number;
  padding?: number;
  onPress: (event: GestureResponderEvent) => void;
  disabled?: boolean;
  testID?: string;
}

const IconButton: React.FC<TProps> = ({
  icon,
  iconColor,
  backgroundColor,
  roundness = 20,
  padding = 8,
  onPress,
  iconSize,
  disabled,
  testID,
}) => {
  return (
    <TouchableOpacity
      testID={testID}
      activeOpacity={0.8}
      onPress={onPress}
      style={{
        backgroundColor: disabled ? Colors.grey : backgroundColor,
        borderRadius: roundness,
        padding,
      }}
      disabled={disabled}>
      <Icon name={icon} color={iconColor} size={iconSize} />
    </TouchableOpacity>
  );
};

export default IconButton;
