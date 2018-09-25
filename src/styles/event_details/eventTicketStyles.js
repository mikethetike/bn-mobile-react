import {
  white,
  primaryColor,
  sectionHeaderColor,
  borderColor,
  textColor,
  bodyFontSize,
  iconFontSize,
  globalFontRegular,
  globalFontSemiBold,
  globalPadding,
  globalPaddingSmall,
} from '../shared/sharedStyles'
import {StyleSheet, Dimensions, Platform} from 'react-native'
const fullHeight = Dimensions.get('window').height
const fullWidth = Dimensions.get('window').width

export const whiteTransparent = 'rgba(255, 255, 255, 0.8)'

export const ticketPriceFontSize = 32


const EventTicketStyles = {
  // ROW STYLES
  rowContainer: {
    alignItems: 'center',
    backgroundColor: white,
    borderBottomColor: borderColor,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: globalPadding,
    paddingVertical: globalPadding,
    width: fullWidth,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  // TICKET SUBNAV STYLES
  ticketPrice: {
    color: primaryColor,
    fontFamily: globalFontSemiBold,
    fontSize: ticketPriceFontSize,
    paddingRight: globalPadding,
  },
  ticketHeader: {
    color: textColor,
    fontFamily: globalFontSemiBold,
    fontSize: bodyFontSize,
  },
  ticketSubHeader: {
    color: borderColor,
    fontFamily: globalFontRegular,
    fontSize: bodyFontSize,
  },
}

function createStyles(overrides = {}) {
  return StyleSheet.create({...EventTicketStyles, ...overrides})
}

export default {
  createStyles,
}