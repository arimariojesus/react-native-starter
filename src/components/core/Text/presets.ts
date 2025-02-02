import { StyleProp, TextStyle } from 'react-native';

import { createStyle } from '@/styles/style-api';

export type TextPresets =
  | 'default'
  | 'bold'
  | 'heading'
  | 'subheading'
  | 'caption';

export const baseTextStyles = createStyle(({ theme }) => ({
  fontFamily: theme.fontFamily.primary.regular,
  fontSize: theme.fontSizes[16],
  color: theme.colors.text.primary
}));

export const boldTextStyles = createStyle(({ theme }) => ({
  fontFamily: theme.fontFamily.primary.bold
}));

export const headingTextStyles = createStyle(({ theme }) => ({
  fontFamily: theme.fontFamily.primary.bold,
  fontSize: theme.fontSizes[36],
  lineHeight: 44
}));

export const subheadingTextStyles = createStyle(({ theme }) => ({
  fontFamily: theme.fontFamily.primary.medium,
  fontSize: theme.fontSizes[24],
  lineHeight: 32
}));

export const captionTextStyles = createStyle(({ theme }) => ({
  fontFamily: theme.fontFamily.primary.medium
}));

export const presets: Record<TextPresets, StyleProp<TextStyle>> = {
  default: [baseTextStyles],
  bold: [baseTextStyles, boldTextStyles],
  heading: [baseTextStyles, headingTextStyles],
  subheading: [baseTextStyles, subheadingTextStyles],
  caption: [baseTextStyles, captionTextStyles]
};
