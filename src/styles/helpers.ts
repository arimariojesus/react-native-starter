import get from 'lodash.get';

import { DEFAULT_THEME } from './theme';

type Theme = typeof DEFAULT_THEME;

type Path<T extends string> = T extends '' ? '' : `.${T}`;

type PathsOf<T> = (
  T extends object
    ? {
        [K in Exclude<keyof T, symbol>]: `${K}${Path<PathsOf<T[K]>>}`;
      }[Exclude<keyof T, symbol>]
    : ''
) extends infer D
  ? Extract<D, string>
  : never;

type PathValue<T, P extends string> = P extends keyof T
  ? T[P]
  : P extends `${infer K}.${infer R}`
    ? K extends keyof T
      ? PathValue<T[K], R>
      : never
    : never;

type ThemePath = PathsOf<Theme>;

interface StyledComponentsProps {
  theme: Theme;
}

export const getTheme =
  <P extends ThemePath>(path: P) =>
  ({ theme }: StyledComponentsProps) =>
    get(theme, path) as PathValue<Theme, P>;
