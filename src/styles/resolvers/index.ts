import type { StylePropType } from '@/styles/theme';
import { colorsResolver } from './colorsResolver';
import { fontsWeightsResolver } from './fontsWeightsResolver';
import { fontsSizesResolver } from './fontsSizesResolver';
import { fontFamilyResolver } from './fontFamilyResolver';
import { borderWidthsResolver } from './borderWidthsResolver';
import { radiiResolver } from './radiiResolver';
import { spacingsResolver } from './spacingsResolver';
import { identityResolver } from './identityResolver';

export const resolvers = {
  colors: colorsResolver,
  fontsWeights: fontsWeightsResolver,
  fontsSizes: fontsSizesResolver,
  fontFamily: fontFamilyResolver,
  borderWidths: borderWidthsResolver,
  radii: radiiResolver,
  spacings: spacingsResolver,
  identity: identityResolver
} as const satisfies Record<StylePropType & 'identity', Function>;
