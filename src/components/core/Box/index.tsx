import React, { forwardRef } from 'react';
import { View, type ViewProps } from 'react-native';

import { STYlE_PROPS_DATA } from '@/styles/data';
import { parseStyleProps } from '@/styles/style-props';
import { extractStyleProps } from '@/styles/style-props';
import { DEFAULT_THEME } from '@/styles/theme';
import { CustomStyleProps } from '@/styles/types';

export interface BoxProps extends CustomStyleProps, ViewProps {}

export const Box = forwardRef<View, BoxProps>((props, ref) => {
  const { style: styleOverride, ...others } = props;
  const { styleProps, remainingProps } = extractStyleProps(others);
  const parsedStyleProps = parseStyleProps({
    styleProps,
    theme: DEFAULT_THEME, // TODO: get theme from context
    data: STYlE_PROPS_DATA
  });

  const mergedStyles = [parsedStyleProps.styles, styleOverride];
  const mergedProps = {
    style: mergedStyles,
    ...remainingProps
  };

  return <View {...mergedProps} ref={ref} />;
});
