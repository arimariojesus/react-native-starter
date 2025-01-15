import React from 'react';
import {
  Text as RNText,
  type TextProps,
  type StyleProp,
  type TextStyle
} from 'react-native';

import { STYlE_PROPS_DATA } from '@/styles/data';
import { extractStyleProps, parseStyleProps } from '@/styles/style-props';
import { DEFAULT_THEME } from '@/styles/theme';
import { CustomStyleProps } from '@/styles/types';

import { type TextPresets, presets } from './presets';
import * as S from './styles';

interface TextComponentProps extends CustomStyleProps, TextProps {
  preset?: TextPresets;
}

export const Text = React.forwardRef<RNText, TextComponentProps>(
  (props, ref) => {
    const { style: styleOverride, preset, ...others } = props;
    const { styleProps, remainingProps } = extractStyleProps(others);
    const parsedStyleProps = parseStyleProps({
      styleProps,
      theme: DEFAULT_THEME, // TODO: get theme from context,
      data: STYlE_PROPS_DATA
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

    return <S.Text {...mergedProps} ref={ref} />;
  }
);
