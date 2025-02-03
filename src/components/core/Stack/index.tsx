import { forwardRef } from 'react';
import { View } from 'react-native';

import { Box, type BoxProps } from '@/components/core/Box';
import type { Spacings, StyleProps } from '@/styles/types';

interface StackProps extends BoxProps {
  /** Key of `theme.spacings` to set `gap` property, `'8'` by default */
  gap?: Spacings;

  /** Controls `align-items` property, `'stretch'` by default */
  align?: StyleProps['alignItems'];

  /** Controls `justify-content` CSS property, `'flex-start'` by default */
  justify?: StyleProps['justifyContent'];

  /** Controls `flex-direction` CSS property, `'column'` by default */
  direction?: StyleProps['flexDirection'];
}

const defaultProps: Partial<StackProps> = {
  gap: '8',
  align: 'stretch',
  justify: 'flex-start',
  direction: 'column'
};

export const Stack = forwardRef<View, StackProps>((props, ref) => {
  const { gap, align, justify, direction, style, ...others } = {
    ...defaultProps,
    ...props
  };

  const styleProps = [
    {
      gap,
      alignItems: align,
      justifyContent: justify,
      flexDirection: direction
    },
    style
  ];

  return <Box {...others} style={styleProps} ref={ref} />;
});
