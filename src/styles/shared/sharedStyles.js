import {StyleSheet, Dimensions} from 'react-native'
const fullHeight = Dimensions.get('window').height
const fullWidth = Dimensions.get('window').width

export const primaryColor = '#FF20B1'
export const secondaryColor = '#707CED'
export const tertiaryColor = '#4EB0E5'
export const white = '#FFF'
export const errorTextColor = '#FF0000'
export const textColor = '#1E1E1E'
export const sectionHeaderColor = '#9DA3B4'
export const backgroundColor = white
export const inputBackgroundColor = '#FAFAFA'
export const helpTextColor = '#666'
export const borderColor = '#DCDCDC'
export const containerDarkColor = '#F5F6F7'
export const primaryTransparent = 'rgba(255, 34, 178, 0.5)'
export const whiteTransparent = 'rgba(255, 255, 255, 0.10)'
export const disabledHeaderColor = 'rgba(64, 64, 64, 0.5)'

export const globalPaddingTiny = 5
export const globalPaddingSmall = 10
export const globalPadding = 20
export const globalPaddingMedium = 30
export const globalPaddingLarge = 40
export const globalPaddingLarger = 45
export const globalPaddingJumbo = 55
export const globalMarginSmall = 10
export const globalMargin = 20

export const globalFontRegular = 'tt_commons_regular'
export const globalFontMedium = 'tt_commons_medium'
export const globalFontSemiBold = 'tt_commons_demibold'
export const globalFontBold = 'tt_commons_bold'
export const globalFontItalic = 'tt_commons_italic'

export const headerFontSize = 36
export const sectionHeaderFontSize = 21
export const bodyFontSize = 16
export const iconFontSize = 18
export const iconCircleFontSize = 25

const SharedStyles = {
  // CONTAINERS
  container: {
    backgroundColor: white,
    paddingHorizontal: globalPadding,
    paddingVertical: globalPadding,
    width: fullWidth,
    flexDirection: 'column',
  },
  containerDark: {
    backgroundColor: containerDarkColor,
    flexDirection: 'column',
    paddingBottom: globalPaddingLarge,
    paddingHorizontal: globalPadding,
    width: fullWidth,
  },
  headerContainer: {
    backgroundColor: white,
    borderBottomColor: borderColor,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    paddingHorizontal: globalPadding,
    paddingTop: globalPadding,
    width: fullWidth,
    flexDirection: 'column',
  },
  halfContainer: {
    backgroundColor: white,
    paddingHorizontal: globalPaddingSmall,
    paddingVertical: globalPaddingSmall,
    width: fullWidth / 2,
    flexDirection: 'column',
  },
  halfRowContainer: {
    flex: 1,
    backgroundColor: white,
    paddingHorizontal: globalPaddingSmall,
    paddingVertical: globalPadding,
    width: fullWidth / 2,
    flexDirection: 'row',
  },
  rowContainer: {
    flex: 1,
    backgroundColor: white,
    paddingHorizontal: globalPaddingSmall,
    paddingVertical: globalPaddingTiny,
    width: fullWidth - globalPadding,
    flexDirection: 'column',
  },
  scrollingContainer: {
    backgroundColor: white,
    paddingHorizontal: globalPaddingSmall,
    paddingVertical: globalPadding,
    paddingBottom: globalPadding,
    width: fullWidth,
  },
  noPaddingScrollingContainer: {
    backgroundColor: white,
    paddingHorizontal: globalPaddingSmall,
    paddingBottom: globalPadding,
    width: fullWidth,
  },
  paginationContainer: {
    paddingTop: globalPadding,
  },
  sectionHeaderContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: globalPaddingMedium,
    paddingVertical: globalPaddingSmall,
  },
  section: {
    paddingVertical: globalPaddingLarge,
  },

  // BUTTONS
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: primaryColor,
    flex: 1,
    height: 60,
    justifyContent: 'center',
  },
  buttonSecondary: {
    alignItems: 'center',
    backgroundColor: white,
    flex: 1,
    flexDirection: 'row',
    height: 50,
    justifyContent: 'center',
  },
  buttonIconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    color: white,
    fontFamily: globalFontSemiBold,
    fontSize: sectionHeaderFontSize,
    textAlign: 'center',
  },
  buttonSecondaryText: {
    color: primaryColor,
    fontFamily: globalFontRegular,
    fontSize: iconFontSize,
  },

  // HEADERS
  header: {
    backgroundColor: 'transparent',
    fontFamily: globalFontBold,
    fontSize: headerFontSize,
    color: textColor,
  },
  headerLight: {
    backgroundColor: 'transparent',
    color: white,
    fontFamily: globalFontBold,
    fontSize: headerFontSize,
    paddingBottom: globalPadding,
  },
  sectionHeader: {
    backgroundColor: 'transparent',
    color: sectionHeaderColor,
    fontFamily: globalFontSemiBold,
    fontSize: sectionHeaderFontSize,
    paddingVertical: globalPaddingSmall,
  },

  // TEXT STYLES
  bodyText: {
    backgroundColor: 'transparent',
    color: textColor,
    fontFamily: globalFontRegular,
    fontSize: bodyFontSize,
    paddingBottom: globalPaddingSmall,
  },
  bodyTextLight: {
    backgroundColor: 'transparent',
    color: white,
    fontFamily: globalFontRegular,
    fontSize: bodyFontSize,
    paddingBottom: globalPaddingSmall,
  },
  errorText: {
    backgroundColor: 'transparent',
    color: errorTextColor,
    fontFamily: globalFontItalic,
    fontSize: bodyFontSize - 2,
    marginTop: -5,
    paddingBottom: globalPadding,
  },
  helpText: {
    backgroundColor: 'transparent',
    color: helpTextColor,
    fontFamily: globalFontItalic,
    fontSize: bodyFontSize - 2,
    marginTop: -5,
    paddingBottom: globalPaddingTiny,
  },
  linkText: {
    backgroundColor: 'transparent',
    color: primaryColor,
    fontFamily: globalFontSemiBold,
    fontSize: bodyFontSize,
  },

  // SUBNAV STYLES
  subnavContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: globalPadding,
    paddingVertical: globalPaddingSmall,
  },
  subnavHeader: {
    color: sectionHeaderColor,
    fontFamily: globalFontRegular,
    fontSize: sectionHeaderFontSize,
  },
  subnavHeaderActive: {
    color: textColor,
    fontFamily: globalFontRegular,
    fontSize: sectionHeaderFontSize,
  },

  // ICONS
  iconLinkContainer: {
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  iconLink: {
    backgroundColor: 'transparent',
    color: primaryColor,
    fontSize: iconFontSize,
    paddingRight: globalPaddingTiny,
  },
  iconLinkText: {
    color: primaryColor,
    fontFamily: globalFontSemiBold,
    fontSize: bodyFontSize,
  },
  iconLinkCircleContainer: {
    backgroundColor: whiteTransparent,
    borderRadius: 100/2,
    height: 45,
    padding: globalPaddingSmall,
    width: 45,
  },
  iconLinkCircle: {
    color: white,
    fontSize: iconCircleFontSize,
  },
  iconLinkCircleContainerActive: {
    backgroundColor: white,
    borderRadius: 100/2,
    height: 45,
    padding: globalPaddingSmall,
    width: 45,
  },
  iconLinkCircleActive: {
    color: primaryColor,
    fontSize: iconCircleFontSize,
  },
  iconImage: {
    width: 30,
    height: 30,
  },
  iconImageSmall: {
    width: 20,
    height: 20,
    marginRight: globalPaddingTiny,
  },

  // PRICE TAG STYLES
  priceTagContainer: {
    backgroundColor: white,
    borderRadius: 5,
    padding: globalPaddingTiny,
    width: 50,
  },
  priceTag: {
    color: primaryColor,
    fontFamily: globalFontMedium,
    fontSize: bodyFontSize,
    letterSpacing: 1,
    textAlign: 'center',
  },

  // AVATAR STYLES
  avatarContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  avatar: {
    borderColor: white,
    borderRadius: 45/2,
    borderWidth: 1,
    height: 45,
    marginLeft: -10,
    width: 45,
  },
  avatarSmall: {
    borderRadius: 30/2,
    height: 30,
    marginLeft: -10,
    width: 30,
  },

  // SPLASH VIDEO STYLES
  splashVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },

  // SLIDER STYLES
  slider: {
    flex: 1,
    flexDirection: 'column',
  },
  sliderContentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  // HELPERS
  borderBottom: {
    flex: 1,
    flexDirection: 'column',
    borderBottomColor: borderColor,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    paddingBottom: globalPaddingMedium,
    paddingTop: globalPaddingMedium,
  },
  borderRight: {
    borderRightColor: borderColor,
    borderStyle: 'solid',
    borderRightWidth: 1,
  },
  textCenter: {
    textAlign: 'center',
  },
  paddingRight: {
    paddingRight: globalPadding,
  },
  paddingTop: {
    paddingTop: globalPadding,
  },
  paddingTopSmall: {
    paddingTop: globalPaddingSmall,
  },
  paddingVerticalSmall: {
    paddingVertical: globalPaddingSmall,
  },
  paddingLeft: {
    paddingLeft: globalPadding,
  },
  paddingBottomJumbo: {
    paddingBottom: globalPaddingJumbo,
  },
  noPaddingBottom: {
    paddingBottom: 0,
  },
  marginTopSmall: {
    marginTop: globalMarginSmall,
  },
  marginTop: {
    marginTop: globalMargin,
  },
  lineHeight: {
    paddingBottom: globalPaddingTiny / 2,
  },

  // FLEX HELPER STYLES
  flexRowFlexStart: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  flexRowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flexRowCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  flexColumnCenter: {
    flexDirection: 'column',
    justifyContent: 'center',
  },

  // ROWS COLS
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cols2: {
    width: fullWidth / 2,
  },
  cols3: {
    width: fullWidth / 3,
  },
  cols4: {
    width: fullWidth / 4,
  },
}

function createStyles(overrides = {}) {
  return StyleSheet.create({...SharedStyles, ...overrides})
}

export default {
  createStyles,
}
