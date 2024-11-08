import type { ImageStyle, TextStyle, ViewStyle } from 'react-native';

import { DEFAULT_THEME } from './theme';

export type Theme = typeof DEFAULT_THEME;

type Path<T extends string> = T extends '' ? '' : `.${T}`;

export type PathsOf<T> = (
  T extends object
    ? {
        [K in Exclude<keyof T, symbol>]: `${K}${Path<PathsOf<T[K]>>}`;
      }[Exclude<keyof T, symbol>]
    : ''
) extends infer D
  ? Extract<D, string>
  : never;

export type PathValue<T, P extends string> = P extends keyof T
  ? T[P]
  : P extends `${infer K}.${infer R}`
    ? K extends keyof T
      ? PathValue<T[K], R>
      : never
    : never;

export type StyleProps = ViewStyle | TextStyle | ImageStyle;

export type StylesFunctionProps = {
  theme: Theme;
};

export type Colors = PathsOf<Theme['colors']>;

export type Weights = PathsOf<Theme['fontsWeights']>;

export type Sizes = PathsOf<Theme['fontsSizes']>;

export type FontFamily = PathsOf<Theme['fontFamily']>;

export type BorderWidths = PathsOf<Theme['borderWidths']>;

export type Radii = PathsOf<Theme['radii']>;

export type Spacings = PathsOf<Theme['spacings']>;

export type UniqueTextSyles = {
  color?: Colors;
  weight?: Weights;
  size?: Sizes;
  fontFamily?: FontFamily;
  align?: TextStyle['textAlign'];
};

export type UniqueViewStyles = {
  backgroundColor?: Colors;
  borderWidth?: BorderWidths;
  borderRadius?: Radii;
  padding?: Spacings;
  margin?: Spacings;
  width?: Spacings;
  height?: Spacings;
  justifyContent?: ViewStyle['justifyContent'];
  alignItems?: ViewStyle['alignItems'];
};
