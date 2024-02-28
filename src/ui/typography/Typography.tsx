import React from 'react';
import {Colors} from '../../consts';
import BaseTypography from './BaseTypography';
import {TypographyHelper} from './TypographyHelper';
export type TypographyType = keyof typeof TypographyHelper;

type TextProps = {
  // color?: string;
  // weight?:
  //   | 'normal'
  //   | 'bold'
  //   | '100'
  //   | '200'
  //   | '300'
  //   | '400'
  //   | '500'
  //   | '600'
  //   | '700'
  //   | '800'
  //   | '900';
  textAlign?: 'center' | 'left' | 'right';
  numberOfLines?: number;
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip';
  typography: TypographyType;
  testID?: string;
};

export enum AltStrings {
  'NA' = 'N/A',
  'Hyphen' = '-',
  'NotProvided' = 'Not Provided',
}

type TypographyProps = {
  strikethrough?: boolean;
  strikethroughColor?: string;
  alt?: AltStrings;
  useAlt?: Boolean;
  children: any;
};
/**
 * @param alt - alternate if the passed string is nul, undefined or empty string, works only if `useAlt` is `true`
 */
const Typography: React.FC<TextProps & TypographyProps> = ({
  children,
  textAlign,
  numberOfLines,
  ellipsizeMode,
  typography,
  strikethrough = false,
  strikethroughColor = '#000',
  testID,
  alt = AltStrings.NA,
  useAlt = false,
}) => {
  /* const { fontFamily, fontSize, fontColor } = TypographyHelper[typography] || {}; */
  const fontFamily = TypographyHelper[typography]?.fontFamily;
  const fontSize = TypographyHelper[typography]?.fontSize;
  const fontColor = TypographyHelper[typography]?.fontColor || '#333';

  if (!children && useAlt) {
    return (
      <BaseTypography
        numberOfLines={numberOfLines}
        ellipsizeMode={ellipsizeMode}
        textAlign={textAlign}
        fontSize={fontSize}
        fontFamily={fontFamily}
        color={Colors.darkGrey}
        strikethrough={strikethrough}
        strikethroughColor={strikethroughColor}>
        {alt}
      </BaseTypography>
    );
  }
  return (
    <BaseTypography
      testID={testID}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
      textAlign={textAlign}
      fontSize={fontSize}
      fontFamily={fontFamily}
      color={fontColor}
      strikethrough={strikethrough}
      strikethroughColor={strikethroughColor}
      alt={alt}>
      {children}
    </BaseTypography>
  );
};

export default Typography;
