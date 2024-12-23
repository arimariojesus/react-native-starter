import { getThemeValue } from '@/styles/style-api';
import type { Spacings, Theme } from '@/styles/types';

export function spacingsResolver(value: unknown, theme: Theme) {
  return getThemeValue(`spacings.${value as Spacings}`, theme);
}
