import { getThemeValue } from '@/styles/style-api';
import type { FontWeights, Theme } from '@/styles/types';

export function fontsWeightsResolver(value: unknown, theme: Theme) {
  return getThemeValue(`fontsWeights.${value as FontWeights}`, theme);
}
