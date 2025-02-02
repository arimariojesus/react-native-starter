import { Text as RNText } from 'react-native';

import { styled } from '@/styles/style-api';

export const Text = styled(RNText)(({ theme }) => ({
  fontSize: theme.fontsSizes[14],
  fontFamily: theme.fontFamily.primary.regular,
  color: theme.colors.text.primary
}));
