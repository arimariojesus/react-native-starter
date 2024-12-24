import { View } from 'react-native';

import { styled } from '@/styles/style-api';

export const StackScreenContainer = styled(View)(({ theme }) => ({
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
  backgroundColor: theme.colors.background.primary
}));
