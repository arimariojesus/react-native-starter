import { Button } from 'react-native';

import { Box } from '@/components/core';
import { Text } from '@/components/Text';
import { RootStackScreenProps } from '@/routes/types';

import * as S from './styles';

type HomeScreenProps = RootStackScreenProps<'Home'>;

export function HomeScreen({ navigation }: HomeScreenProps) {
  const handleTypographyPress = () => {
    navigation.navigate('Typography');
  };

  return (
    <S.HomeContainer>
      <Text preset="heading">Hello World</Text>

      <Button onPress={handleTypographyPress} title="Typography" />

      <Box p="56" bg="danger" br="12">
        <Text color="text.inverse">Box Component</Text>
      </Box>
    </S.HomeContainer>
  );
}
