import * as React from 'react';
import { Text as RNText, StyleProp, TextStyle } from 'react-native';

import { createStyle, getTextUnitStyles } from '@/styles/helpers';
import type { Colors, FontFamily, Sizes, Weights } from '@/styles/types';

import * as S from './styles';

type TextPresets = 'default' | 'bold' | 'heading' | 'subheading' | 'caption';

const baseTextStyles = createStyle(({ theme }) => ({
  fontFamily: theme.fontFamily.poppins.regular,
  fontSize: theme.fontsSizes[16],
  color: theme.colors.text.primary
}));

const boldTextStyles = createStyle(({ theme }) => ({
  fontFamily: theme.fontFamily.poppins.bold
}));

const headingTextStyles = createStyle(({ theme }) => ({
  fontFamily: theme.fontFamily.poppins.bold,
  fontSize: theme.fontsSizes[36],
  lineHeight: 44
}));

const subheadingTextStyles = createStyle(({ theme }) => ({
  fontFamily: theme.fontFamily.poppins.medium,
  fontSize: theme.fontsSizes[24],
  lineHeight: 32
}));

const captionTextStyles = createStyle(({ theme }) => ({
  fontFamily: theme.fontFamily.poppins.medium
}));

const presets: Record<TextPresets, StyleProp<TextStyle>> = {
  default: [baseTextStyles],
  bold: [baseTextStyles, boldTextStyles],
  heading: [baseTextStyles, headingTextStyles],
  subheading: [baseTextStyles, subheadingTextStyles],
  caption: [baseTextStyles, captionTextStyles]
};

type RNTextProps = React.ComponentPropsWithoutRef<typeof RNText>;
type TextRef = React.ElementRef<typeof RNText>;

interface TextProps extends RNTextProps {
  color?: Colors;
  weight?: Weights;
  size?: Sizes;
  fontFamily?: FontFamily;
  align?: TextStyle['textAlign'];
  preset?: TextPresets;
}

export const Text = React.forwardRef<TextRef, TextProps>((props, ref) => {
  const { style: styleOverride, preset, ...rest } = props;

  const $styles: StyleProp<TextStyle> = [
    presets[preset ?? 'default'],
    getTextUnitStyles(props),
    styleOverride
  ];

  return <S.Text {...rest} style={$styles} ref={ref} />;
});
