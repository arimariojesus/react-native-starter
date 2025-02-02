import {
  Poppins_300Light as poppinsLight,
  Poppins_400Regular as poppinsRegular,
  Poppins_500Medium as poppinsMedium,
  Poppins_600SemiBold as poppinsSemiBold,
  Poppins_700Bold as poppinsBold
} from '@expo-google-fonts/poppins';

export const fontsToLoad = {
  poppinsLight,
  poppinsRegular,
  poppinsMedium,
  poppinsSemiBold,
  poppinsBold
};

export const fontFamily = {
  primary: {
    light: 'poppinsLight',
    regular: 'poppinsRegular',
    medium: 'poppinsMedium',
    semibold: 'poppinsSemiBold',
    bold: 'poppinsBold'
  }
} as const;
