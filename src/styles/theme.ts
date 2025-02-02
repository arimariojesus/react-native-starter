import { borderWidths } from './borderWidths';
import { colors } from './colors';
import { fontFamily } from './fontFamily';
import { fontSizes } from './fontSizes';
import { fontsWeights } from './fontsWeights';
import { radii } from './radii';
import { spacings } from './spacings';

export type StylePropType =
  | 'colors'
  | 'fontSizes'
  | 'fontsWeights'
  | 'fontFamily'
  | 'spacings'
  | 'radii'
  | 'borderWidths';

export type CoreTheme = {
  colors: typeof colors;
  fontSizes: typeof fontSizes;
  fontsWeights: typeof fontsWeights;
  fontFamily: typeof fontFamily;
  spacings: typeof spacings;
  radii: typeof radii;
  borderWidths: typeof borderWidths;
};

// TODO: add sizes values
export const DEFAULT_THEME = {
  colors,
  fontSizes,
  fontsWeights,
  fontFamily,
  spacings,
  radii,
  borderWidths
} as const satisfies CoreTheme;
