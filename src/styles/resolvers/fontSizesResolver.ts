import { getThemeValue } from '@/styles/style-api';
import type { FontSizes, Theme } from '@/styles/types';

export function fontSizesResolver(value: unknown, theme: Theme) {
  return getThemeValue(`fontSizes.${value as FontSizes}`, theme);
}
