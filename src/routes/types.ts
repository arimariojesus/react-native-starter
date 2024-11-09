import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootRoutesParamsList = {
  Home: undefined;
  Typography: undefined;
};

export type RootStackScreenProps<T extends keyof RootRoutesParamsList> =
  NativeStackScreenProps<RootRoutesParamsList, T>;
