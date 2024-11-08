import React, { forwardRef } from 'react';
import { TextStyle } from 'react-native';
import get from 'lodash.get';

import { DEFAULT_THEME } from './theme';
import type {
  PathsOf,
  PathValue,
  StyleProps,
  StylesFunctionProps,
  Theme,
  UniqueTextSyles
} from './types';

type ThemePath = PathsOf<Theme>;

// TODO: Ensure use of different themes
export const getThemeValue = <P extends ThemePath>(path: P) =>
  get(DEFAULT_THEME, path) as PathValue<Theme, P>;

export const createStyle = (
  styles: StyleProps | ((props: StylesFunctionProps) => StyleProps)
) => {
  return typeof styles === 'function'
    ? styles({ theme: DEFAULT_THEME })
    : styles;
};

type NativeTarget<P extends { style?: StyleProps }> = React.ComponentType<P>;

// TODO: Ensure use of different themes
export const styled = <Target extends NativeTarget<any>>(component: Target) => {
  return (
    styles: StyleProps | ((props: StylesFunctionProps) => StyleProps)
  ) => {
    return forwardRef<React.ElementRef<Target>, React.ComponentProps<Target>>(
      (props, ref) => {
        const resolvedStyles = createStyle(styles);

        return React.createElement(component, {
          ...props,
          style: [resolvedStyles, props.style],
          ref
        });
      }
    );
  };
};

export const getTextUnitStyles = (props: UniqueTextSyles): TextStyle => {
  const {
    color: colorFromProps,
    weight,
    size,
    fontFamily: fontFamilyFromProps,
    align
  } = props;

  const color = colorFromProps && getThemeValue(`colors.${colorFromProps}`);
  const fontWeight = weight && getThemeValue(`fontsWeights.${weight}`);
  const fontSize = size && getThemeValue(`fontsSizes.${size}`);
  const fontFamily =
    fontFamilyFromProps && getThemeValue(`fontFamily.${fontFamilyFromProps}`);

  const styles: { [key: string]: any } = {};

  if (color) styles.color = color;
  if (fontWeight) styles.fontWeight = fontWeight;
  if (fontSize) styles.fontSize = fontSize;
  if (fontFamily) styles.fontFamily = fontFamily;
  if (align) styles.textAlign = align;

  return styles;
};
