import { View } from 'react-native';

import { styled } from '@/styles/helpers';

export const TypographyScreenContainer = styled(View)(({ theme }) => ({
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
  backgroundColor: theme.colors.background.primary
}));
