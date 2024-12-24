import { Box, Stack, Text } from '@/components/core';

import * as S from './styles';

const DecorativeBox = () => <Box p="32" bg="danger" br="12" />;

export function StackScreen() {
  return (
    <S.StackScreenContainer>
      <Stack gap="12">
        <Stack align="center">
          <Text preset="subheading" fw="bold">
            Stack (row):
          </Text>
          <Stack direction="row">
            <DecorativeBox />
            <DecorativeBox />
            <DecorativeBox />
          </Stack>
        </Stack>

        <Stack align="center">
          <Text preset="subheading" fw="bold">
            Stack (column):
          </Text>
          <Stack direction="column">
            <DecorativeBox />
            <DecorativeBox />
            <DecorativeBox />
          </Stack>
        </Stack>
      </Stack>
    </S.StackScreenContainer>
  );
}
