import { forwardRef } from 'react';
import {
  Text as RNText,
  type TextProps,
  type StyleProp,
  type TextStyle
} from 'react-native';

import { extractStyleProps, parseStyleProps } from '@/styles/style-props';
import { DEFAULT_THEME } from '@/styles/theme';
import { CustomStyleProps } from '@/styles/types';

import { type TextPresets, presets } from './presets';

interface TextComponentProps extends CustomStyleProps, TextProps {
  preset?: TextPresets;
}

export const Text = forwardRef<RNText, TextComponentProps>(
  (props: TextComponentProps, ref) => {
    const { style: styleOverride, preset, ...others } = props;
    const { styleProps, remainingProps } = extractStyleProps(others);
    const parsedStyleProps = parseStyleProps({
      styleProps,
      theme: DEFAULT_THEME // TODO: get theme from context
    });

    const mergedStyles: StyleProp<TextStyle> = [
      presets[preset ?? 'default'],
      parsedStyleProps.styles,
      styleOverride
    ];
    const mergedProps = {
      style: mergedStyles,
      ...remainingProps
    };

    return <RNText {...mergedProps} ref={ref} />;
  }
);

Text.displayName = 'ThemedText';
