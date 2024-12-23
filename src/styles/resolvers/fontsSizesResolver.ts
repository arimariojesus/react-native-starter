import { getThemeValue } from '@/styles/style-api';
import type { FontSizes, Theme } from '@/styles/types';

export function fontsSizesResolver(value: unknown, theme: Theme) {
  return getThemeValue(`fontsSizes.${value as FontSizes}`, theme);
}
