import { colors } from './colors';
import { fontsSizes } from './fontsSizes';
import { fontsWeights } from './fontsWeights';
import { fontFamily } from './fontFamily';
import { spacings } from './spacings';
import { radii } from './radii';
import { borderWidths } from './borderWidths';

export type StylePropType =
  | 'colors'
  | 'fontsSizes'
  | 'fontsWeights'
  | 'fontFamily'
  | 'spacings'
  | 'radii'
  | 'borderWidths';

export type CoreTheme = {
  colors: typeof colors;
  fontsSizes: typeof fontsSizes;
  fontsWeights: typeof fontsWeights;
  fontFamily: typeof fontFamily;
  spacings: typeof spacings;
  radii: typeof radii;
  borderWidths: typeof borderWidths;
};

// TODO: add sizes values
export const DEFAULT_THEME = {
  colors,
  fontsSizes,
  fontsWeights,
  fontFamily,
  spacings,
  radii,
  borderWidths
} as const satisfies CoreTheme;
