import { Text } from '@/components/Text';

import * as S from './styles';

export function HomeScreen() {
  return (
    <S.HomeContainer>
      <Text preset="heading">Heading</Text>
      <Text preset="subheading">Subheading</Text>
      <Text preset="bold">Bold</Text>
      <Text preset="caption">Caption</Text>
      <Text preset="default">Default</Text>
    </S.HomeContainer>
  );
}
