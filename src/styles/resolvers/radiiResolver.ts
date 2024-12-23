import { getThemeValue } from '@/styles/style-api';
import type { Radii, Theme } from '@/styles/types';

export function radiiResolver(value: unknown, theme: Theme) {
  return getThemeValue(`radii.${value as Radii}`, theme);
}
