import React from 'react';
import { StyleSheet, ScrollView, Text, View, Image, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import SharedStyles from '../styles/shared/sharedStyles'
import SlideShowStyles from '../styles/shared/slideshowStyles'
import EventDetailsStyles from '../styles/event_details/eventDetailsStyles'

const styles = SharedStyles.createStyles()
const slideshowStyles = SlideShowStyles.createStyles()
const eventDetailsStyles = EventDetailsStyles.createStyles()

export default function EventsShow() {
  return (
    <ScrollView>

      <View style={eventDetailsStyles.videoContainer}>
        <Image
          style={eventDetailsStyles.videoBkgd}
          source={require('../../assets/video-bkgd.png')}
        />
        <Image
          style={eventDetailsStyles.videoBkgd}
          source={require('../../assets/video-bkgd-overlay.png')}
        />

        <View style={eventDetailsStyles.videoDetailsContainer}>

          <View style={eventDetailsStyles.sectionTop}>
            <Icon style={styles.iconLinkCircle} name="close" />

            <View style={eventDetailsStyles.videoActionsContainer}>
              <View style={styles.iconLinkCircleContainer}>
                <Icon style={styles.iconLinkCircle} name="star" />
              </View>
              <View style={[styles.iconLinkCircleContainer, styles.marginTopSmall]}>
                <Icon style={styles.iconLinkCircle} name="reply" />
              </View>
            </View>
          </View>

          <TouchableHighlight underlayColor="rgba(0, 0, 0, 0)">
            <View style={eventDetailsStyles.sectionBottom}>
              <Icon style={eventDetailsStyles.iconPlayLink} name="play-circle-outline" />
              <Text style={eventDetailsStyles.header}>Taylor Swift</Text>
              <Text style={slideshowStyles.details}>Fri, July 20 - 8:50 pm - The Warfield</Text>
            </View>
          </TouchableHighlight>
        </View>

      </View>

      <View style={styles.container}>

        <View style={eventDetailsStyles.eventDetailsContainer}>

          <View style={[eventDetailsStyles.eventDetailsLeft, styles.borderRight]}>
            <Text style={eventDetailsStyles.sectionHeader}>People Going To This Event</Text>
            <View style={eventDetailsStyles.avatarContainer}>
              <Image
                style={styles.avatar}
                source={require('../../assets/avatar-male.png')}
              />
              <Image
                style={styles.avatar}
                source={require('../../assets/avatar-female-2.png')}
              />
              <Image
                style={styles.avatar}
                source={require('../../assets/avatar-male-2.png')}
              />
              <Image
                style={styles.avatar}
                source={require('../../assets/avatar-female-3.png')}
              />
              <Image
                style={styles.avatar}
                source={require('../../assets/avatar-female.png')}
              />
            </View>
          </View>
          <View style={eventDetailsStyles.eventDetailsRight}>
            <Text style={eventDetailsStyles.sectionHeader}>Tickets From</Text>
            <Text style={eventDetailsStyles.ticketPrice}>$30</Text>
          </View>

        </View>

        <View style={eventDetailsStyles.eventDescriptionContainer}>
          <Text style={eventDetailsStyles.sectionHeader}>Description</Text>
          <Text style={styles.bodyText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in lacus non magna tincidunt lacinia. Donec ut quam nec sapien tempus luctus id quis magna.</Text>
        </View>

      </View>

    </ScrollView>
  );
}
