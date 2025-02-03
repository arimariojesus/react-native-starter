import { resolvers } from '@/styles/resolvers';
import {
  type SystemPropData,
  type SystemProp,
  STYLE_PROPS_DATA
} from '@/styles/style-props';
import type { CustomStyleProps, Theme } from '@/styles/types';
import { keys } from '@/utils';

interface ParseStylePropsOptions {
  styleProps: CustomStyleProps;
  theme: Theme;
  data?: Record<SystemProp, SystemPropData>;
}

export function parseStyleProps({
  styleProps,
  theme,
  data = STYLE_PROPS_DATA
}: ParseStylePropsOptions) {
  return keys(styleProps).reduce<{
    styles: Record<string, unknown>;
  }>(
    (acc, styleProp) => {
      const propertyData = data[styleProp];

      if (!propertyData) return acc;

      const resolver = resolvers[propertyData.type];
      const value = styleProps[styleProp];

      acc.styles[propertyData.property] = resolver(value, theme);

      return acc;
    },
    {
      styles: {}
    }
  );
}
