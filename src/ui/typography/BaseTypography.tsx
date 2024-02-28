import React from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';

import {Colors} from '../../consts';

interface BaseTypographyProps extends TextProps {
  color?: string;
  textAlign?: 'center' | 'left' | 'right';
  numberOfLines?: number;
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip';
  fontFamily: string;
  fontSize: number;
  strikethrough?: boolean;
  strikethroughColor?: string;
}

const BaseTypography: React.FC<BaseTypographyProps> = ({
  children,
  color,
  textAlign,
  numberOfLines,
  ellipsizeMode,
  fontFamily,
  fontSize,
  strikethrough,
  strikethroughColor,
  testID,
}) => {
  const strikethroughStyle = strikethrough
    ? {
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
        textDecorationColor: strikethroughColor,
      }
    : {};
  return (
    <Text
      testID={testID}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
      style={[
        styles.text,
        {color: color || Colors.dark, textAlign, fontFamily, fontSize},
        strikethroughStyle,
      ]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {},
});

export default BaseTypography;
