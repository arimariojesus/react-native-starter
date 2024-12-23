import { getThemeValue } from '@/styles/style-api';
import type { Colors, Theme } from '@/styles/types';

export function colorsResolver(value: unknown, theme: Theme) {
  return getThemeValue(`colors.${value as Colors}`, theme);
}
