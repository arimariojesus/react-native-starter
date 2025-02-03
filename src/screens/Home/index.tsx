import { Button } from 'react-native';

import { Box, Text } from '@/components/core';
import { RootStackScreenProps } from '@/routes/types';

type HomeScreenProps = RootStackScreenProps<'Home'>;

export function HomeScreen({ navigation }: HomeScreenProps) {
  const handleTypographyPress = () => {
    navigation.navigate('Typography');
  };

  const handleStackPress = () => {
    navigation.navigate('Stack');
  };

  return (
    <Box
      alignItems="center"
      justifyContent="center"
      flex={1}
      bg="background.primary"
    >
      <Text preset="heading">Hello World</Text>

      <Button onPress={handleTypographyPress} title="Typography" />
      <Button onPress={handleStackPress} title="Stack" />
    </Box>
  );
}
