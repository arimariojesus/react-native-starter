import { TextStyle } from 'react-native';

import { getThemeValue } from '@/styles/style-api';
import { DEFAULT_THEME } from '@/styles/theme';
import type { UniqueTextSyles } from '@/styles/types';

export const getTextUnitStyles = (props: UniqueTextSyles): TextStyle => {
  const {
    color: colorFromProps,
    weight,
    size,
    fontFamily: fontFamilyFromProps,
    align
  } = props;

  const theme = DEFAULT_THEME;

  const color =
    colorFromProps && getThemeValue(`colors.${colorFromProps}`, theme);
  const fontWeight = weight && getThemeValue(`fontsWeights.${weight}`, theme);
  const fontSize = size && getThemeValue(`fontsSizes.${size}`, theme);
  const fontFamily =
    fontFamilyFromProps &&
    getThemeValue(`fontFamily.${fontFamilyFromProps}`, theme);

  const styles: { [key: string]: any } = {};

  if (color) styles.color = color;
  if (fontWeight) styles.fontWeight = fontWeight;
  if (fontSize) styles.fontSize = fontSize;
  if (fontFamily) styles.fontFamily = fontFamily;
  if (align) styles.textAlign = align;

  return styles;
};
