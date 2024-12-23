import { getThemeValue } from '@/styles/style-api';
import type { BorderWidths, Theme } from '@/styles/types';

export function borderWidthsResolver(value: unknown, theme: Theme) {
  return getThemeValue(`borderWidths.${value as BorderWidths}`, theme);
}
