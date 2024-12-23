import { Text } from '@/components/core';

import * as S from './styles';

export function TypographyScreen() {
  return (
    <S.TypographyScreenContainer>
      <Text preset="heading">Heading</Text>
      <Text preset="subheading">Subheading</Text>
      <Text preset="caption">Caption</Text>
      <Text preset="bold">Bold</Text>
      <Text preset="default">Default</Text>
    </S.TypographyScreenContainer>
  );
}
