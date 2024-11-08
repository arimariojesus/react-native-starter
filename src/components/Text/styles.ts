import { Text as RNText } from 'react-native';

import { styled } from '@/styles/helpers';

export const Text = styled(RNText)(({ theme }) => ({
  fontSize: theme.fontsSizes[14],
  fontFamily: theme.fontFamily.poppins.regular,
  color: theme.colors.text.primary
}));
