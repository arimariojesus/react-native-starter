import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from '@/screens/Home';
import { StackScreen } from '@/screens/StackScreen';
import { TypographyScreen } from '@/screens/Typography';

import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackRoutes() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Typography" component={TypographyScreen} />
      <Stack.Screen name="Stack" component={StackScreen} />
    </Stack.Navigator>
  );
}
