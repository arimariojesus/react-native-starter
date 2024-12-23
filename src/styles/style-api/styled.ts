import React from 'react';

import { createStyle } from '@/styles/style-api/createStyle';
import type { StyleProps, StylesFunctionProps } from '@/styles/types';

type NativeTarget<P extends { style?: StyleProps }> = React.ComponentType<P>;

// TODO: Ensure use of different themes
export const styled = <Target extends NativeTarget<any>>(component: Target) => {
  return (
    styles: StyleProps | ((props: StylesFunctionProps) => StyleProps)
  ) => {
    return React.forwardRef<
      React.ElementRef<Target>,
      React.ComponentProps<Target>
    >((props, ref) => {
      const resolvedStyles = createStyle(styles);

      return React.createElement(component, {
        ...props,
        style: [resolvedStyles, props.style],
        ref
      });
    });
  };
};
