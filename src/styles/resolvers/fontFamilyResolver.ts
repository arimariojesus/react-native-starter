import { getThemeValue } from '@/styles/style-api';
import type { FontFamily, Theme } from '@/styles/types';

export function fontFamilyResolver(value: unknown, theme: Theme) {
  return getThemeValue(`fontFamily.${value as FontFamily}`, theme);
}
