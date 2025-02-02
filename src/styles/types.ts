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

export type StyleProps = ViewStyle & TextStyle & ImageStyle;

export type StylesFunctionProps = {
  theme: Theme;
};

// TODO: add Sizes type
export type Colors = PathsOf<Theme['colors']>;
export type FontWeights = PathsOf<Theme['fontsWeights']>;
export type FontSizes = PathsOf<Theme['fontSizes']>;
export type FontFamily = PathsOf<Theme['fontFamily']>;
export type BorderWidths = PathsOf<Theme['borderWidths']>;
export type Radii = PathsOf<Theme['radii']>;
export type Spacings = PathsOf<Theme['spacings']>;

export interface CustomStyleProps {
  /** Margin, theme key: theme.spacing */
  m?: Spacings;
  /** MarginTop, theme key: theme.spacing */
  mt?: Spacings;
  /** MarginBottom, theme key: theme.spacing */
  mb?: Spacings;
  /** MarginLeft, theme key: theme.spacing */
  ml?: Spacings;
  /** MarginRight, theme key: theme.spacing */
  mr?: Spacings;
  /** MarginInline, theme key: theme.spacing */
  mx?: Spacings;
  /** MarginInlineStart, theme key: theme.spacing */
  mxs?: Spacings;
  /** MarginInlineEnd, theme key: theme.spacing */
  mxe?: Spacings;
  /** MarginBlock, theme key: theme.spacing */
  my?: Spacings;
  /** MarginBlockStart, theme key: theme.spacing */
  mys?: Spacings;
  /** MarginBlockEnd, theme key: theme.spacing */
  mye?: Spacings;

  /** Padding, theme key: theme.spacing */
  p?: Spacings;
  /** PaddingTop, theme key: theme.spacing */
  pt?: Spacings;
  /** PaddingBottom, theme key: theme.spacing */
  pb?: Spacings;
  /** PaddingLeft, theme key: theme.spacing */
  pl?: Spacings;
  /** PaddingRight, theme key: theme.spacing */
  pr?: Spacings;
  /** PaddingInline, theme key: theme.spacing */
  px?: Spacings;
  /** PaddingInlineStart, theme key: theme.spacing */
  pxs?: Spacings;
  /** PaddingInlineEnd, theme key: theme.spacing */
  pxe?: Spacings;
  /** PaddingBlock, theme key: theme.spacing */
  py?: Spacings;
  /** PaddingBlockStart, theme key: theme.spacing */
  pys?: Spacings;
  /** PaddingBlockEnd, theme key: theme.spacing */
  pye?: Spacings;

  /** BorderColor, theme key: theme.colors */
  bc?: Colors;
  /** BorderWidth, theme key: theme.borderWidths */
  bw?: BorderWidths;
  /** BorderRadius, theme key: theme.radii */
  br?: Radii;
  /** Background Color, theme key: theme.colors */
  bg?: Colors;
  /** Color */
  c?: Colors;
  color?: Colors;
  /** Opacity */
  opacity?: StyleProps['opacity'];

  /** FontFamily, theme key: theme.fontFamily */
  ff?: FontFamily;
  /** FontSize, theme key: theme.fontSizes */
  fz?: FontSizes;
  /** FontWeight, theme key: theme.fontWeights */
  fw?: FontWeights;
  /** LetterSpacing */
  lts?: StyleProps['letterSpacing'];
  /** TextAlign */
  ta?: StyleProps['textAlign'];
  /** LineHeight */
  lh?: StyleProps['lineHeight'];
  /** FontStyle */
  fs?: StyleProps['fontStyle'];
  /** TextTransform */
  tt?: StyleProps['textTransform'];
  /** TextDecorationColor, theme key: theme.colors */
  tdc?: Colors;
  /** TextDecorationLine */
  tdl?: StyleProps['textDecorationLine'];
  /** TextDecorationStyle */
  tds?: StyleProps['textDecorationStyle'];

  /** Width, theme key: theme.spacing */
  w?: StyleProps['width'];
  /** MinWidth, theme key: theme.spacing */
  minW?: StyleProps['minWidth'];
  /** MaxWidth, theme key: theme.spacing */
  maxW?: StyleProps['maxWidth'];
  /** Height, theme key: theme.spacing */
  h?: StyleProps['height'];
  /** MinHeight, theme key: theme.spacing */
  minH?: StyleProps['minHeight'];
  /** MaxHeight, theme key: theme.spacing */
  maxH?: StyleProps['maxHeight'];

  /** Position */
  pos?: StyleProps['position'];
  top?: StyleProps['top'];
  left?: StyleProps['left'];
  bottom?: StyleProps['bottom'];
  right?: StyleProps['right'];
  inset?: StyleProps['inset'];

  /** Display */
  display?: StyleProps['display'];
  /** Flex */
  flex?: StyleProps['flex'];
  /** FlexDirection */
  flexDir?: StyleProps['flexDirection'];
  /** FlexWrap */
  flexWrap?: StyleProps['flexWrap'];
  /** JustifyContent */
  justifyContent?: StyleProps['justifyContent'];
  /** AlignItems */
  alignItems?: StyleProps['alignItems'];
  /** Gap */
  gap?: Spacings;
}
