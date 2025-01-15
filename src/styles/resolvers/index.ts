import type { StylePropType } from '@/styles/theme';

import { borderWidthsResolver } from './borderWidthsResolver';
import { colorsResolver } from './colorsResolver';
import { fontFamilyResolver } from './fontFamilyResolver';
import { fontsSizesResolver } from './fontsSizesResolver';
import { fontsWeightsResolver } from './fontsWeightsResolver';
import { identityResolver } from './identityResolver';
import { radiiResolver } from './radiiResolver';
import { spacingsResolver } from './spacingsResolver';

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
