import { DEFAULT_THEME } from '@/styles/theme';
import type { StyleProps, StylesFunctionProps } from '@/styles/types';

export const createStyle = (
  styles: StyleProps | ((props: StylesFunctionProps) => StyleProps)
) => {
  return typeof styles === 'function'
    ? styles({ theme: DEFAULT_THEME })
    : styles;
};
