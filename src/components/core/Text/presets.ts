import { StyleProp, TextStyle } from 'react-native';

import { styled } from '@/styles/style-api';

export type TextPresets =
  | 'default'
  | 'bold'
  | 'heading'
  | 'subheading'
  | 'caption';

export const textPresets = styled(({ theme }) => ({
  baseTextStyles: {
    fontFamily: theme.fontFamily.primary.regular,
    fontSize: theme.fontSizes[16],
    color: theme.colors.text.primary
  },
  boldTextStyles: { fontFamily: theme.fontFamily.primary.bold },
  headingTextStyles: {
    fontFamily: theme.fontFamily.primary.bold,
    fontSize: theme.fontSizes[36],
    lineHeight: 44
  },
  subheadingTextStyles: {
    fontFamily: theme.fontFamily.primary.medium,
    fontSize: theme.fontSizes[24],
    lineHeight: 32
  },
  captionTextStyles: { fontFamily: theme.fontFamily.primary.medium }
}));

export const presets: Record<TextPresets, StyleProp<TextStyle>> = {
  default: [textPresets.baseTextStyles],
  bold: [textPresets.baseTextStyles, textPresets.boldTextStyles],
  heading: [textPresets.baseTextStyles, textPresets.headingTextStyles],
  subheading: [textPresets.baseTextStyles, textPresets.subheadingTextStyles],
  caption: [textPresets.baseTextStyles, textPresets.captionTextStyles]
};
