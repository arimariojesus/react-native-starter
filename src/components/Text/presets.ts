import { createStyle } from '@/styles/helpers';
import { StyleProp, TextStyle } from 'react-native';

export type TextPresets =
  | 'default'
  | 'bold'
  | 'heading'
  | 'subheading'
  | 'caption';

export const baseTextStyles = createStyle(({ theme }) => ({
  fontFamily: theme.fontFamily.poppins.regular,
  fontSize: theme.fontsSizes[16],
  color: theme.colors.text.primary
}));

export const boldTextStyles = createStyle(({ theme }) => ({
  fontFamily: theme.fontFamily.poppins.bold
}));

export const headingTextStyles = createStyle(({ theme }) => ({
  fontFamily: theme.fontFamily.poppins.bold,
  fontSize: theme.fontsSizes[36],
  lineHeight: 44
}));

export const subheadingTextStyles = createStyle(({ theme }) => ({
  fontFamily: theme.fontFamily.poppins.medium,
  fontSize: theme.fontsSizes[24],
  lineHeight: 32
}));

export const captionTextStyles = createStyle(({ theme }) => ({
  fontFamily: theme.fontFamily.poppins.medium
}));

export const presets: Record<TextPresets, StyleProp<TextStyle>> = {
  default: [baseTextStyles],
  bold: [baseTextStyles, boldTextStyles],
  heading: [baseTextStyles, headingTextStyles],
  subheading: [baseTextStyles, subheadingTextStyles],
  caption: [baseTextStyles, captionTextStyles]
};
