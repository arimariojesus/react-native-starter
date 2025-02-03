import { Box, Text } from '@/components/core';

export function TypographyScreen() {
  return (
    <Box
      alignItems="center"
      justifyContent="center"
      flex={1}
      bg="background.primary"
    >
      <Text preset="heading">Heading</Text>
      <Text preset="subheading">Subheading</Text>
      <Text preset="caption">Caption</Text>
      <Text preset="bold">Bold</Text>
      <Text preset="default">Default</Text>
    </Box>
  );
}
