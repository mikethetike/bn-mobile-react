import React, {Component} from 'react';
import {PropTypes} from 'prop-types'
import {Modal, ScrollView, Text, View, Image, TouchableHighlight, TextInput} from 'react-native';
import CircleCheckBox from 'react-native-circle-checkbox'
import Icon from 'react-native-vector-icons/MaterialIcons'
import SharedStyles, { backgroundColor } from '../styles/shared/sharedStyles'
import TicketStyles from '../styles/tickets/ticketStyles'
import TicketWalletStyles from '../styles/tickets/ticketWalletStyles'
import TicketTransferStyles from '../styles/tickets/ticketTransferStyles'
import ModalStyles from '../styles/shared/modalStyles'
import FormStyles from '../styles/shared/formStyles'
import {autotrim, pluralize} from '../string'

const styles = SharedStyles.createStyles()
const ticketStyles = TicketStyles.createStyles()
const ticketWalletStyles = TicketWalletStyles.createStyles()
const ticketTransferStyles = TicketTransferStyles.createStyles()
const modalStyles = ModalStyles.createStyles()
const formStyles = FormStyles.createStyles()

function Card({children}) {
  return (
    <View style={styles.flexRowCenter}>
      <View style={ticketTransferStyles.cardContainer}>
        {children}
      </View>
    </View>
  )
}
export default class TransferTickets extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isSubmitting: false,
      checkboxes: this.buildCheckBoxState(this.tickets),
      emailOrPhone: '',
    };
  }

  get tickets() {
    const {
      navigation: {state: {params: {eventId}}},
      screenProps: {store: {ticketsForEvent}},
    } = this.props

    return ticketsForEvent(eventId).tickets
  }

  get firstName() {
    const {navigation: {state: {params: {firstName}}}} = this.props

    return firstName
  }

  get lastName() {
    const {navigation: {state: {params: {lastName}}}} = this.props

    return lastName
  }

  get label() {
    return `${this.firstName} ${this.lastName}`
  }

  buildCheckBoxState(tickets) {
    return tickets.reduce((acc, ticket) => {
      return {
        ...acc,
        [ticket.id]: false,
      };
    }, {});
  }

  get transferTickets() {
    const {checkboxes} = this.state
    const keys = Object.keys(checkboxes);

    return keys.filter((key) => checkboxes[key]);
  }

  setChecked = (id, bool) => {
    const checkboxes = {...this.state.checkboxes}

    checkboxes[id] = bool
    this.setState({checkboxes})
  }

  toggleCheck = (id) => {
    return (checked) => this.setChecked(id, checked)
  }

  transferCount = () => {
    const {checkboxes} = this.state

    return Object.keys(checkboxes).reduce((acc, id) => {
      if (checkboxes[id]) {
        return acc += 1
      }
      return acc
    }, 0)
  }

  transfer = async () => {
    if (this.state.isSubmitting) {
      return
    }

    this.setState({isSubmitting: true})
    try {
      const {checkboxes, emailOrPhone} = this.state
      const ticketIds = Object.keys(checkboxes).filter(key => checkboxes[key])

      await this.props.screenProps.store.transferTickets(emailOrPhone, ticketIds)

      alert('Tickets transferred!')
      this.props.navigation.navigate('MyTicketList')
    } finally {
      this.setState({isSubmitting: false})
    }
  }

  render() {
    const {navigation} = this.props
    const {checkboxes} = this.state

    return (
      <Modal>
        <View style={ticketWalletStyles.modalContainer}>
          <Image
            style={ticketWalletStyles.modalBkgdImage}
            source={require('../../assets/modal-bkgd.jpg')}
          />
          <View style={ticketWalletStyles.closeModalContainer}>
            <Icon
              style={styles.iconLinkCircle}
              name="close"
              onPress={() => {
                navigation.goBack()
              }}
            />
          </View>

          <View style={modalStyles.contentRoundedWrapper}>

            <TextInput
              keyboardType="email-address"
              style={[formStyles.input, {backgroundColor: 'white'}]}
              placeholder="Recipient email or phone"
              searchIcon={{size: 24}}
              underlineColorAndroid="transparent"
              onChangeText={autotrim((emailOrPhone) => this.setState({emailOrPhone}))}
            />

            <ScrollView showsVerticalScrollIndicator={false}>

              <Text style={modalStyles.headerSecondary}>Select tickets to transfer</Text>

              {this.tickets.map(({id, ticket_type_name: name}) => (
                <Card key={id}>
                  <View style={styles.flexRowFlexStart}>
                    <CircleCheckBox
                      checked={checkboxes[id]}
                      onToggle={this.toggleCheck(id)}
                      innerColor="#FF20B1"
                      outerColor="#FF20B1"
                      innerSize={15}
                      outerSize={29}
                      styleCheckboxContainer={styles.marginRight}
                    />
                    <View>
                      <Text style={ticketStyles.ticketHolderHeader}>{this.label}</Text>
                      <Text style={ticketStyles.ticketHolderSubheader}>{name}</Text>
                    </View>
                  </View>
                </Card>
              ))}
            </ScrollView>
          </View>

          <View style={[styles.buttonContainer, styles.marginHorizontal]}>
            <TouchableHighlight style={[styles.button, modalStyles.bottomRadius]} onPress={this.transfer}>
              <Text style={styles.buttonText}>Transfer {pluralize(this.transferCount(), 'Ticket')}...</Text>
            </TouchableHighlight>
          </View>

        </View>
      </Modal>
    )
  }
}

TransferTickets.propTypes = {
  navigation: PropTypes.object.isRequired,
  screenProps: PropTypes.object.isRequired,
}
