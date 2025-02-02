import { type StylePropType } from '@/styles/theme';
import type { CustomStyleProps, StyleProps } from '@/styles/types';

export type SystemProp = keyof CustomStyleProps;

export type SystemPropData = {
  type: StylePropType | 'identity';
  property: keyof StyleProps;
};

export const STYlE_PROPS_DATA = {
  m: { type: 'spacings', property: 'margin' },
  mt: { type: 'spacings', property: 'marginTop' },
  mb: { type: 'spacings', property: 'marginBottom' },
  ml: { type: 'spacings', property: 'marginLeft' },
  mr: { type: 'spacings', property: 'marginRight' },
  mx: { type: 'spacings', property: 'marginInline' },
  mxs: { type: 'spacings', property: 'marginInlineStart' },
  mxe: { type: 'spacings', property: 'marginInlineEnd' },
  my: { type: 'spacings', property: 'marginBlock' },
  mys: { type: 'spacings', property: 'marginBlockStart' },
  mye: { type: 'spacings', property: 'marginBlockEnd' },

  p: { type: 'spacings', property: 'padding' },
  pt: { type: 'spacings', property: 'paddingTop' },
  pb: { type: 'spacings', property: 'paddingBottom' },
  pl: { type: 'spacings', property: 'paddingLeft' },
  pr: { type: 'spacings', property: 'paddingRight' },
  px: { type: 'spacings', property: 'paddingInline' },
  pxs: { type: 'spacings', property: 'paddingInlineStart' },
  pxe: { type: 'spacings', property: 'paddingInlineEnd' },
  py: { type: 'spacings', property: 'paddingBlock' },
  pys: { type: 'spacings', property: 'paddingBlockStart' },
  pye: { type: 'spacings', property: 'paddingBlockEnd' },

  bc: { type: 'colors', property: 'borderColor' },
  bw: { type: 'borderWidths', property: 'borderWidth' },
  br: { type: 'radii', property: 'borderRadius' },
  bg: { type: 'colors', property: 'backgroundColor' },
  c: { type: 'colors', property: 'color' },
  color: { type: 'colors', property: 'color' },
  opacity: { type: 'identity', property: 'opacity' },

  ff: { type: 'fontFamily', property: 'fontFamily' },
  fz: { type: 'fontSizes', property: 'fontSize' },
  fw: { type: 'fontsWeights', property: 'fontWeight' },
  lts: { type: 'identity', property: 'letterSpacing' },
  ta: { type: 'identity', property: 'textAlign' },
  lh: { type: 'identity', property: 'lineHeight' },
  fs: { type: 'identity', property: 'fontStyle' },
  tt: { type: 'identity', property: 'textTransform' },
  tdc: { type: 'identity', property: 'textDecorationColor' },
  tdl: { type: 'identity', property: 'textDecorationLine' },
  tds: { type: 'identity', property: 'textDecorationStyle' },

  w: { type: 'identity', property: 'width' },
  minW: { type: 'identity', property: 'minWidth' },
  maxW: { type: 'identity', property: 'maxWidth' },
  h: { type: 'identity', property: 'height' },
  minH: { type: 'identity', property: 'minHeight' },
  maxH: { type: 'identity', property: 'maxHeight' },

  pos: { type: 'identity', property: 'position' },
  top: { type: 'identity', property: 'top' },
  left: { type: 'identity', property: 'left' },
  bottom: { type: 'identity', property: 'bottom' },
  right: { type: 'identity', property: 'right' },
  inset: { type: 'identity', property: 'inset' },

  display: { type: 'identity', property: 'display' },
  flex: { type: 'identity', property: 'flex' },
  flexDir: { type: 'identity', property: 'flexDirection' },
  flexWrap: { type: 'identity', property: 'flexWrap' },
  justifyContent: { type: 'identity', property: 'justifyContent' },
  alignItems: { type: 'identity', property: 'alignItems' },
  gap: { type: 'identity', property: 'gap' }
} as const satisfies Record<SystemProp, SystemPropData>;
