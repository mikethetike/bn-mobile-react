import {
  primaryColor,
  white,
  sectionHeaderColor,
  borderColor,
  textColor,
  globalFontRegular,
  globalFontMedium,
  globalFontSemiBold,
  globalFontBold,
  bodyFontSize,
  globalPaddingJumbo,
  globalPaddingLarge,
  globalPaddingMedium,
  globalPadding,
  globalPaddingSmall,
  globalPaddingTiny,
  globalMargin,
} from '../shared/sharedStyles'
import {StyleSheet, Dimensions, Platform} from 'react-native'
const fullHeight = Dimensions.get('window').height
const fullWidth = Dimensions.get('window').width

export const whiteTransparent = 'rgba(255, 255, 255, 0.8)'

export const headerFontSize = 26
export const sectionHeaderFontSize = 18
export const calendarDateFontSize = 24
export const calendarMonthFontSize = 14
export const iconLargeFontSize = 56
export const slideShowArrowFontSize = 28
export const attendeeFontSize = 12

const EventDetailsStyles = {
  // VIDEO STYLES
  videoContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 240,
  },
  videoBkgd: {
    width: fullWidth,
    height: 240,
    position: 'absolute',
  },
  videoDetailsContainer: {
    flexDirection: 'column',
    height: 290,
    justifyContent: 'space-between',
    padding: globalPaddingSmall,
    paddingTop: globalPaddingJumbo + globalPaddingTiny,
    width: fullWidth,
  },

  // CONTAINER STYLES
  sectionTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionBottom: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -45,
    paddingBottom: globalPaddingLarge,
  },
  videoActionsContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  iconSectionHeaderContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingVertical: globalPadding,
  },

  // TEXT STYLES
  descriptionHeader: {
    fontFamily: globalFontSemiBold,
    fontSize: headerFontSize,
    color: textColor,
    width: 275,
  },
  descriptionSubHeader: {
    color: sectionHeaderColor,
    fontFamily: globalFontMedium,
    fontSize: sectionHeaderFontSize,
    marginBottom: globalMargin,
    paddingTop: globalPaddingTiny,
  },
  header: {
    fontFamily: globalFontSemiBold,
    fontSize: headerFontSize,
    color: white,
    marginTop: globalPaddingTiny,
  },
  sectionHeader: {
    color: textColor,
    fontFamily: globalFontBold,
    fontSize: sectionHeaderFontSize,
    marginVertical: globalMargin,
  },
  bodyText: {
    backgroundColor: 'transparent',
    color: sectionHeaderColor,
    fontFamily: globalFontRegular,
    fontSize: bodyFontSize,
    paddingBottom: globalPaddingSmall,
    paddingLeft: globalPadding,
  },
  iconSectionHeader: {
    color: textColor,
    fontFamily: globalFontBold,
    fontSize: sectionHeaderFontSize,
  },

  // EVENT DETAILS/DESCRIPTION STYLES
  eventDetailsContainer: {
    flexDirection: 'row',
    paddingVertical: globalPadding,
  },
  eventDescriptionContainer: {
    paddingVertical: globalPadding,
    borderTopColor: borderColor,
    borderBottomColor: borderColor,
    borderStyle: 'solid',
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  eventDescriptionHeaderWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: -5,
  },

  // AVATAR STYLES
  avatarContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  avatar: {
    borderColor: white,
    borderRadius: 45/2,
    borderWidth: 1,
    height: 45,
    marginHorizontal: globalPaddingTiny,
    width: 45,
  },
  attendeeContainer: {
    borderColor: borderColor,
    borderRadius: 45/2,
    borderWidth: 1,
    height: 45,
    marginHorizontal: globalPaddingTiny,
    padding: globalPaddingTiny,
    width: 45,
  },
  attendeeNumber: {
    color: primaryColor,
    fontFamily: globalFontBold,
    fontSize: attendeeFontSize,
    letterSpacing: 1,
    paddingTop: globalPaddingSmall,
    textAlign: 'center',
  },

  // ICON STYLES
  iconPlayLink: {
    color: whiteTransparent,
    fontSize: iconLargeFontSize,
    marginBottom: globalMargin,
  },
  iconYoutube: {
    width: 20,
    height: 15,
    marginRight: globalPaddingSmall,
  },
  iconInstagram: {
    width: 20,
    height: 20,
    marginRight: globalPaddingSmall,
  },
  iconSpotify: {
    width: 20,
    height: 20,
    marginRight: globalPaddingSmall,
  },
  iconEventDescription: {
    color: sectionHeaderColor,
    fontSize: bodyFontSize,
    paddingRight: globalPaddingSmall,
  },

  // BUTTON STYLES
  buttonRounded: {
    alignItems: 'center',
    backgroundColor: white,
    borderColor: borderColor,
    borderRadius: 45/2,
    borderWidth: 1,
    flex: 1,
    flexDirection: 'row',
    height: 40,
    justifyContent: 'center',
    marginHorizontal: globalPaddingTiny,
  },
  buttonRoundedText: {
    color: sectionHeaderColor,
    fontFamily: globalFontSemiBold,
    fontSize: bodyFontSize,
    textAlign: 'center',
  },
  buttonRoundedIcon: {
    color: sectionHeaderColor,
    fontSize: bodyFontSize,
    paddingRight: globalPaddingTiny,
  },

  // CALENDAR STYLES
  calendarWrapper: {
    backgroundColor: textColor,
    borderRadius: 5,
    height: 50,
    marginRight: globalPaddingSmall,
    padding: globalPaddingTiny,
    width: 50,
  },
  calendarMonth: {
    color: white,
    fontFamily: globalFontMedium,
    fontSize: calendarMonthFontSize,
    textAlign: 'center',
  },
  calendarDate: {
    color: white,
    fontFamily: globalFontMedium,
    fontSize: calendarDateFontSize,
    textAlign: 'center',
  },

  // IMAGE PLACEHOLDER STYLES
  imagePlaceholderContainer: {
    height: 100,
    paddingVertical: globalPadding,
  },
  imagePlaceholder: {
    height: 100,
    width: fullWidth - 40,
    position: 'absolute',
  },

  // SLIDER STYLES
  sliderArrowContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: globalPadding,
  },
  slideShowIconLinkLeft: {
    color: textColor,
    fontSize: slideShowArrowFontSize,
    marginLeft: -23,
  },
  slideShowIconLinkRight: {
    color: textColor,
    fontSize: slideShowArrowFontSize,
    marginRight: -23,
  },
}

function createStyles(overrides = {}) {
  return StyleSheet.create({...EventDetailsStyles, ...overrides})
}

export default {
  createStyles,
}
