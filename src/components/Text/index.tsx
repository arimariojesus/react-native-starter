import * as React from 'react';
import { Text as RNText, StyleProp, TextStyle } from 'react-native';

import { getTextUnitStyles } from '@/styles/helpers';
import type { Colors, FontFamily, Sizes, Weights } from '@/styles/types';
import { type TextPresets, presets } from './presets';

import * as S from './styles';

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
