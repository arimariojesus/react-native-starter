import { Box, Stack, Text } from '@/components/core';

const DecorativeBox = () => <Box p="32" bg="danger" br="12" />;

export function StackScreen() {
  return (
    <Box
      alignItems="center"
      justifyContent="center"
      flex={1}
      bg="background.primary"
    >
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
    </Box>
  );
}
