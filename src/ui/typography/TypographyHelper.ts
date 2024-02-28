import {Colors} from '../../consts';

export const typographyFamilies = {
  poppinsRegular: 'Poppins-Regular',
  poppinsMedium: 'Poppins-Medium',
  poppinsSemiBold: 'Poppins-SemiBold',
  poppinsBold: 'Poppins-Bold',
};

export const typographySizes = {
  h1: 32,
  h2: 28,
  h3: 24,
  h4: 20,
  h5: 16,
  h6: 14,
  p: 12,
  h7: 10,
};

const DEFAULT_FONT_COLOR = '#333';

// {
//   [key: string]: {
//     fontSize: (typeof typographySizes)[keyof typeof typographySizes];
//     fontFamily: (typeof typographyFamilies)[keyof typeof typographyFamilies];
//     fontColor?: (typeof Colors)[keyof typeof Colors];
//   };
// }
export const TypographyHelper = {
  H1Regular: {
    fontSize: typographySizes.h1,
    fontFamily: typographyFamilies.poppinsRegular,
    fontColor: DEFAULT_FONT_COLOR,
  },
  H1Medium: {
    fontSize: typographySizes.h1,
    fontFamily: typographyFamilies.poppinsMedium,
    fontColor: DEFAULT_FONT_COLOR,
  },
  H1SemiBold: {
    fontSize: typographySizes.h1,
    fontFamily: typographyFamilies.poppinsSemiBold,
    fontColor: DEFAULT_FONT_COLOR,
  },
  H1Bold: {
    fontSize: typographySizes.h1,
    fontFamily: typographyFamilies.poppinsBold,
    fontColor: DEFAULT_FONT_COLOR,
  },
  H2Regular: {
    fontSize: typographySizes.h2,
    fontFamily: typographyFamilies.poppinsRegular,
    fontColor: DEFAULT_FONT_COLOR,
  },
  H2Medium: {
    fontSize: typographySizes.h2,
    fontFamily: typographyFamilies.poppinsMedium,
    fontColor: DEFAULT_FONT_COLOR,
  },
  H2SemiBold: {
    fontSize: typographySizes.h2,
    fontFamily: typographyFamilies.poppinsSemiBold,
    fontColor: DEFAULT_FONT_COLOR,
  },
  H2Bold: {
    fontSize: typographySizes.h2,
    fontFamily: typographyFamilies.poppinsBold,
    fontColor: DEFAULT_FONT_COLOR,
  },
  H3Regular: {
    fontSize: typographySizes.h3,
    fontFamily: typographyFamilies.poppinsRegular,
    fontColor: DEFAULT_FONT_COLOR,
  },
  H3Medium: {
    fontSize: typographySizes.h3,
    fontFamily: typographyFamilies.poppinsMedium,
  },
  H3SemiBold: {
    fontSize: typographySizes.h3,
    fontFamily: typographyFamilies.poppinsSemiBold,
  },
  H3SemiBoldDarkGrey: {
    fontSize: typographySizes.h3,
    fontFamily: typographyFamilies.poppinsSemiBold,
    fontColor: Colors.darkGrey,
  },
  H3Bold: {
    fontSize: typographySizes.h3,
    fontFamily: typographyFamilies.poppinsBold,
  },
  H4Regular: {
    fontSize: typographySizes.h4,
    fontFamily: typographyFamilies.poppinsRegular,
  },
  H4RegularRed: {
    fontSize: typographySizes.h4,
    fontFamily: typographyFamilies.poppinsRegular,
    fontColor: Colors.red,
  },
  H4Medium: {
    fontSize: typographySizes.h4,
    fontFamily: typographyFamilies.poppinsMedium,
  },
  H4SemiBold: {
    fontSize: typographySizes.h4,
    fontFamily: typographyFamilies.poppinsSemiBold,
  },
  H4Bold: {
    fontSize: typographySizes.h4,
    fontFamily: typographyFamilies.poppinsBold,
  },
  H4BoldDarkGrey: {
    fontSize: typographySizes.h4,
    fontFamily: typographyFamilies.poppinsBold,
    fontColor: Colors.darkGrey,
  },
  H4SemiBoldRed: {
    fontSize: typographySizes.h4,
    fontFamily: typographyFamilies.poppinsBold,
    fontColor: Colors.red,
  },
  H4SemiBoldGreen: {
    fontSize: typographySizes.h4,
    fontFamily: typographyFamilies.poppinsBold,
    fontColor: Colors.green,
  },
  H4RegularGreen: {
    fontSize: typographySizes.h4,
    fontFamily: typographyFamilies.poppinsRegular,
    fontColor: Colors.green,
  },
  H4RegularDarkGrey: {
    fontSize: typographySizes.h4,
    fontFamily: typographyFamilies.poppinsRegular,
    fontColor: Colors.darkGrey,
  },
  H4SemiBoldWhite: {
    fontSize: typographySizes.h4,
    fontFamily: typographyFamilies.poppinsSemiBold,
    fontColor: Colors.white,
  },
  H4SemiBoldDarkGrey: {
    fontSize: typographySizes.h4,
    fontFamily: typographyFamilies.poppinsSemiBold,
    fontColor: Colors.darkGrey,
  },

  H4MediumDarkGrey: {
    fontSize: typographySizes.h4,
    fontFamily: typographyFamilies.poppinsMedium,
    fontColor: Colors.darkGrey,
  },
  H5Regular: {
    fontSize: typographySizes.h5,
    fontFamily: typographyFamilies.poppinsRegular,
  },
  H5RegularRed: {
    fontSize: typographySizes.h5,
    fontFamily: typographyFamilies.poppinsRegular,
    fontColor: Colors.red,
  },
  H5RegularGreen: {
    fontSize: typographySizes.h5,
    fontFamily: typographyFamilies.poppinsRegular,
    fontColor: Colors.red,
  },
  H5Medium: {
    fontSize: typographySizes.h5,
    fontFamily: typographyFamilies.poppinsMedium,
  },
  H5SemiBold: {
    fontSize: typographySizes.h5,
    fontFamily: typographyFamilies.poppinsSemiBold,
  },
  H5Bold: {
    fontSize: typographySizes.h5,
    fontFamily: typographyFamilies.poppinsBold,
  },
  H5RegularBlue: {
    fontSize: typographySizes.h5,
    fontFamily: typographyFamilies.poppinsRegular,
    fontColor: Colors.blue,
  },
  H5MediumBlue: {
    fontSize: typographySizes.h5,
    fontFamily: typographyFamilies.poppinsMedium,
    fontColor: Colors.blue,
  },
  H5SemiBoldBlue: {
    fontSize: typographySizes.h5,
    fontFamily: typographyFamilies.poppinsSemiBold,
    fontColor: Colors.blue,
  },
  H5SemiBoldRed: {
    fontSize: typographySizes.h5,
    fontFamily: typographyFamilies.poppinsSemiBold,
    fontColor: Colors.red,
  },
  H5BoldBlue: {
    fontSize: typographySizes.h5,
    fontFamily: typographyFamilies.poppinsBold,
    fontColor: Colors.blue,
  },
  H5RegularDarkGrey: {
    fontSize: typographySizes.h5,
    fontFamily: typographyFamilies.poppinsRegular,
    fontColor: Colors.darkGrey,
  },
  H5MediumDarkGrey: {
    fontSize: typographySizes.h5,
    fontFamily: typographyFamilies.poppinsMedium,
    fontColor: Colors.darkGrey,
  },
  H5SemiBoldDarkGrey: {
    fontSize: typographySizes.h5,
    fontFamily: typographyFamilies.poppinsSemiBold,
    fontColor: Colors.darkGrey,
  },
  H5BoldDarkGrey: {
    fontSize: typographySizes.h5,
    fontFamily: typographyFamilies.poppinsBold,
    fontColor: Colors.darkGrey,
  },
  H5SemiBoldGreen: {
    fontSize: typographySizes.h5,
    fontFamily: typographyFamilies.poppinsSemiBold,
    fontColor: Colors.green,
  },
  H5BoldGreen: {
    fontSize: typographySizes.h5,
    fontFamily: typographyFamilies.poppinsBold,
    fontColor: Colors.green,
  },
  H5SemiBoldSkyBlue: {
    fontSize: typographySizes.h5,
    fontFamily: typographyFamilies.poppinsSemiBold,
    fontColor: Colors.skyBlue,
  },
  H5SemiBoldSunflower: {
    fontSize: typographySizes.h5,
    fontFamily: typographyFamilies.poppinsSemiBold,
    fontColor: Colors.sunflower,
  },

  H5RegularWhite: {
    fontSize: typographySizes.h5,
    fontFamily: typographyFamilies.poppinsRegular,
    fontColor: Colors.white,
  },
  H5SemiBoldWhite: {
    fontSize: typographySizes.h5,
    fontFamily: typographyFamilies.poppinsSemiBold,
    fontColor: Colors.white,
  },
  H5BoldRed: {
    fontSize: typographySizes.h5,
    fontFamily: typographyFamilies.poppinsBold,
    fontColor: Colors.red,
  },
  H6Regular: {
    fontSize: typographySizes.h6,
    fontFamily: typographyFamilies.poppinsRegular,
  },
  H6Medium: {
    fontSize: typographySizes.h6,
    fontFamily: typographyFamilies.poppinsMedium,
  },
  H6SemiBold: {
    fontSize: typographySizes.h6,
    fontFamily: typographyFamilies.poppinsSemiBold,
  },
  H6Bold: {
    fontSize: typographySizes.h6,
    fontFamily: typographyFamilies.poppinsBold,
  },
  H6RegularBlue: {
    fontSize: typographySizes.h6,
    fontFamily: typographyFamilies.poppinsRegular,
    fontColor: Colors.blue,
  },
  H6MediumBlue: {
    fontSize: typographySizes.h6,
    fontFamily: typographyFamilies.poppinsMedium,
    fontColor: Colors.blue,
  },
  H6SemiBoldBlue: {
    fontSize: typographySizes.h6,
    fontFamily: typographyFamilies.poppinsSemiBold,
    fontColor: Colors.blue,
  },
  H6BoldBlue: {
    fontSize: typographySizes.h6,
    fontFamily: typographyFamilies.poppinsBold,
    fontColor: Colors.blue,
  },
  H6RegularDarkGrey: {
    fontSize: typographySizes.h6,
    fontFamily: typographyFamilies.poppinsRegular,
    fontColor: Colors.darkGrey,
  },
  H6RegularRed: {
    fontSize: typographySizes.h6,
    fontFamily: typographyFamilies.poppinsRegular,
    fontColor: Colors.red,
  },
  H6RegularGreen: {
    fontSize: typographySizes.h6,
    fontFamily: typographyFamilies.poppinsRegular,
    fontColor: Colors.green,
  },
  H6MediumDarkGrey: {
    fontSize: typographySizes.h6,
    fontFamily: typographyFamilies.poppinsMedium,
    fontColor: Colors.darkGrey,
  },
  H6SemiBoldDarkGrey: {
    fontSize: typographySizes.h6,
    fontFamily: typographyFamilies.poppinsSemiBold,
    fontColor: Colors.darkGrey,
  },
  H6BoldDarkGrey: {
    fontSize: typographySizes.h6,
    fontFamily: typographyFamilies.poppinsBold,
    fontColor: Colors.darkGrey,
  },
  H6RegularWhite: {
    fontSize: typographySizes.h6,
    fontFamily: typographyFamilies.poppinsRegular,
    fontColor: Colors.white,
  },
  H6MediumWhite: {
    fontSize: typographySizes.h6,
    fontFamily: typographyFamilies.poppinsMedium,
    fontColor: Colors.white,
  },
  H6SemiBoldWhite: {
    fontSize: typographySizes.h6,
    fontFamily: typographyFamilies.poppinsSemiBold,
    fontColor: Colors.white,
  },
  H6BoldWhite: {
    fontSize: typographySizes.h6,
    fontFamily: typographyFamilies.poppinsBold,
    fontColor: Colors.white,
  },
  H6SemiBoldGreen: {
    fontSize: typographySizes.h6,
    fontFamily: typographyFamilies.poppinsSemiBold,
    fontColor: Colors.green,
  },
  H6SemiBoldRed: {
    fontSize: typographySizes.h6,
    fontFamily: typographyFamilies.poppinsSemiBold,
    fontColor: Colors.red,
  },
  H6SemiBoldGrey: {
    fontSize: typographySizes.h6,
    fontFamily: typographyFamilies.poppinsSemiBold,
    fontColor: Colors.grey,
  },
  H7Regular: {
    fontSize: typographySizes.h7,
    fontFamily: typographyFamilies.poppinsRegular,
  },
  H7RegularWhite: {
    fontSize: typographySizes.h7,
    fontFamily: typographyFamilies.poppinsRegular,
    fontColor: Colors.white,
  },
  H7Medium: {
    fontSize: typographySizes.h7,
    fontFamily: typographyFamilies.poppinsMedium,
  },
  H7SemiBold: {
    fontSize: typographySizes.h7,
    fontFamily: typographyFamilies.poppinsSemiBold,
  },
  H7Bold: {
    fontSize: typographySizes.h7,
    fontFamily: typographyFamilies.poppinsBold,
  },
  H7RegularBlue: {
    fontSize: typographySizes.h7,
    fontFamily: typographyFamilies.poppinsRegular,
    fontColor: Colors.blue,
  },
  H7SemiBoldBlue: {
    fontSize: typographySizes.h7,
    fontFamily: typographyFamilies.poppinsSemiBold,
    fontColor: Colors.blue,
  },
  H7RegularDarkGrey: {
    fontSize: typographySizes.h7,
    fontFamily: typographyFamilies.poppinsRegular,
    fontColor: Colors.darkGrey,
  },
  H7MediumDarkGrey: {
    fontSize: typographySizes.h7,
    fontFamily: typographyFamilies.poppinsMedium,
    fontColor: Colors.darkGrey,
  },
  H7SemiBoldDarkGrey: {
    fontSize: typographySizes.h7,
    fontFamily: typographyFamilies.poppinsSemiBold,
    fontColor: Colors.darkGrey,
  },
  H7BoldDarkGrey: {
    fontSize: typographySizes.h7,
    fontFamily: typographyFamilies.poppinsBold,
    fontColor: Colors.darkGrey,
  },
  PRegular: {
    fontSize: typographySizes.p,
    fontFamily: typographyFamilies.poppinsRegular,
  },
  PMedium: {
    fontSize: typographySizes.p,
    fontFamily: typographyFamilies.poppinsMedium,
  },
  PSemiBold: {
    fontSize: typographySizes.p,
    fontFamily: typographyFamilies.poppinsSemiBold,
  },
  PBold: {
    fontSize: typographySizes.p,
    fontFamily: typographyFamilies.poppinsBold,
  },
  PRegularBlue: {
    fontSize: typographySizes.p,
    fontFamily: typographyFamilies.poppinsRegular,
    fontColor: Colors.blue,
  },
  PMediumBlue: {
    fontSize: typographySizes.p,
    fontFamily: typographyFamilies.poppinsMedium,
    fontColor: Colors.blue,
  },
  PSemiBoldBlue: {
    fontSize: typographySizes.p,
    fontFamily: typographyFamilies.poppinsSemiBold,
    fontColor: Colors.blue,
  },
  PBoldBlue: {
    fontSize: typographySizes.p,
    fontFamily: typographyFamilies.poppinsBold,
    fontColor: Colors.blue,
  },
  PRegularDarkGrey: {
    fontSize: typographySizes.p,
    fontFamily: typographyFamilies.poppinsRegular,
    fontColor: Colors.darkGrey,
  },
  PMediumDarkGrey: {
    fontSize: typographySizes.p,
    fontFamily: typographyFamilies.poppinsMedium,
    fontColor: Colors.darkGrey,
  },
  PSemiBoldDarkGrey: {
    fontSize: typographySizes.p,
    fontFamily: typographyFamilies.poppinsSemiBold,
    fontColor: Colors.darkGrey,
  },
  PBoldDarkGrey: {
    fontSize: typographySizes.p,
    fontFamily: typographyFamilies.poppinsBold,
    fontColor: Colors.darkGrey,
  },
  PRegularWhite: {
    fontSize: typographySizes.p,
    fontFamily: typographyFamilies.poppinsRegular,
    fontColor: Colors.white,
  },
  PMediumWhite: {
    fontSize: typographySizes.p,
    fontFamily: typographyFamilies.poppinsMedium,
    fontColor: Colors.white,
  },
  PSemiBoldWhite: {
    fontSize: typographySizes.p,
    fontFamily: typographyFamilies.poppinsSemiBold,
    fontColor: Colors.white,
  },
  PBoldWhite: {
    fontSize: typographySizes.p,
    fontFamily: typographyFamilies.poppinsBold,
    fontColor: Colors.white,
  },
  PSemiBoldGreen: {
    fontSize: typographySizes.p,
    fontFamily: typographyFamilies.poppinsSemiBold,
    fontColor: Colors.green,
  },
  PSemiBoldSkyBlue: {
    fontSize: typographySizes.p,
    fontFamily: typographyFamilies.poppinsSemiBold,
    fontColor: Colors.skyBlue,
  },
  PSemiBoldSunflower: {
    fontSize: typographySizes.p,
    fontFamily: typographyFamilies.poppinsSemiBold,
    fontColor: Colors.sunflower,
  },
  PRegularRed: {
    fontSize: typographySizes.p,
    fontFamily: typographyFamilies.poppinsRegular,
    fontColor: Colors.red,
  },
  PSemiBoldRed: {
    fontSize: typographySizes.p,
    fontFamily: typographyFamilies.poppinsRegular,
    fontColor: Colors.red,
  },
};
