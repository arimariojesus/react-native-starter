import get from 'lodash.get';

import type { PathsOf, PathValue, Theme } from '@/styles/types';

type ThemePath = PathsOf<Theme>;

// TODO: Ensure use of different themes
export const getThemeValue = <P extends ThemePath>(path: P, theme: Theme) =>
  get(theme, path) as PathValue<Theme, P>;
