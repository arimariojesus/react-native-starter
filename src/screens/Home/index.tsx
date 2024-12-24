import { Button } from 'react-native';

import { Text } from '@/components/core';
import { RootStackScreenProps } from '@/routes/types';

import * as S from './styles';

type HomeScreenProps = RootStackScreenProps<'Home'>;

export function HomeScreen({ navigation }: HomeScreenProps) {
  const handleTypographyPress = () => {
    navigation.navigate('Typography');
  };

  const handleStackPress = () => {
    navigation.navigate('Stack');
  };

  return (
    <S.HomeContainer>
      <Text preset="heading">Hello World</Text>

      <Button onPress={handleTypographyPress} title="Typography" />
      <Button onPress={handleStackPress} title="Stack" />
    </S.HomeContainer>
  );
}
