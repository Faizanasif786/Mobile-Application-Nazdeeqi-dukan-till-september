import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import ButtomTabs from './ButtomTabs';

export default function About() {
  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.content}>
        <Text style={styles.heading}>About Us</Text>
        <Text style={styles.aboutText}>
          Welcome to Nazdeeqi Dukan - your trusted destination for an unparalleled online shopping experience! Our journey began with a simple yet powerful vision: to bring convenience and affordability to your fingertips. With our app, we're committed to redefining the way you shop and interact with the world of ecommerce.
        </Text>
        <Text style={styles.aboutText}>
          At Nazdeeqi Dukan, we believe that every shopping experience should be seamless, enjoyable, and memorable. Founded by a team of passionate individuals, we embarked on a mission to bridge the gap between customers and quality products. Our story is one of innovation, dedication, and a genuine desire to make your life easier.
        </Text>
        <Text style={styles.aboutText}>
          What sets us apart is our dedication to offering a diverse range of products that cater to your unique preferences. From the latest fashion trends to cutting-edge electronics and everything in between, Nazdeeqi Dukan is your one-stop shop for all your needs.
        </Text>
        <Text style={styles.aboutText}>
          Our commitment to quality is unwavering. Each product showcased on Nazdeeqi Dukan undergoes rigorous quality checks to ensure it meets our high standards. Your satisfaction is our top priority, and we take pride in delivering products that exceed your expectations.
        </Text>
        <Text style={styles.aboutText}>
          We're not just an ecommerce platform – we're your partners in convenience and style. Join us on this exciting journey of reimagining the way you shop. Thank you for choosing Nazdeeqi Dukan as your preferred shopping destination. Together, let's make every shopping experience unforgettable.
        </Text>
      </View>
      </ScrollView>
      <View style={styles.bottomTabsContainer}>
        <ButtomTabs />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    color:'green',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  aboutText: {
    textAlign:'justify',
    fontSize: 16,
    marginBottom: 10,
  },
  bottomTabsContainer: {
    borderTopWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'white',
    paddingBottom: 20,
  },
});
