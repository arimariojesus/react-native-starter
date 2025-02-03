import type { NamedStyleProps, StylesFunctionProps } from '@/styles/types';

import { DEFAULT_THEME } from '../theme';

// TODO: get theme dynamically
export const styled = <T extends NamedStyleProps<T> | NamedStyleProps<any>>(
  styles: T | ((props: StylesFunctionProps) => T)
): T => {
  return typeof styles === 'function'
    ? styles({ theme: DEFAULT_THEME })
    : styles;
};
