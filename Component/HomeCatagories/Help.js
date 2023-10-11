
import { View, Text, StyleSheet, ScrollView, } from 'react-native';
import React from 'react';
import ButtomTabs from './ButtomTabs';

export default function Help() {
  return (

    <View style={styles.container}>
      <ScrollView>
      <View style={styles.content}>
        <Text style={styles.heading}>Help Center</Text>

        <Text style={styles.sectionTitle}>Getting Started</Text>
        <Text style={styles.sectionText}>
          Welcome to Nazdeeqi Dukan Ecommerce App Help Center. This Help Center is designed to assist you in navigating and making the most of our ecommerce app. Whether you're a new user or a returning customer, we're here to make your shopping experience seamless and enjoyable.
        </Text>

        <Text style={styles.sectionTitle}>Browsing and Searching</Text>
        <Text style={styles.sectionText}>
          Our app offers a wide range of categories and subcategories to help you find the products you're interested in. Use filters to narrow down search results, and utilize the search bar for quick access to specific items.
        </Text>

        <Text style={styles.sectionTitle}>Product Details</Text>
        <Text style={styles.sectionText}>
          View detailed information about products, including pricing, descriptions, specifications, and customer reviews. Swipe through product images to see different angles, and make informed decisions based on other customers' ratings.
        </Text>

        <Text style={styles.sectionTitle}>Adding to Cart</Text>
        <Text style={styles.sectionText}>
          Easily add items to your cart, manage quantities, and apply coupons or discounts for savings. Review your cart contents before proceeding to checkout.
        </Text>

        <Text style={styles.sectionTitle}>Checkout Process</Text>
        <Text style={styles.sectionText}>
          Review your order, select a shipping address, and choose from various payment options for a smooth checkout experience.
        </Text>

        <Text style={styles.sectionTitle}>Order Tracking</Text>
        <Text style={styles.sectionText}>
          Keep track of your order's status, from processing to delivery. Receive updates on shipping and estimated delivery times.
        </Text>

        <Text style={styles.sectionTitle}>Managing Your Account</Text>
        <Text style={styles.sectionText}>
          Update your profile settings, manage saved addresses, and add or update payment methods for convenient transactions.
        </Text>

        <Text style={styles.sectionTitle}>Wishlists</Text>
        <Text style={styles.sectionText}>
          Create and manage wishlists to save items for future reference. Share your wishlists with others for special occasions.
        </Text>

        <Text style={styles.sectionTitle}>Returns and Refunds</Text>
        <Text style={styles.sectionText}>
          Initiate returns for eligible items, track return statuses, and receive updates on the refund process.
        </Text>

        <Text style={styles.sectionTitle}>Customer Support</Text>
        <Text style={styles.sectionText}>
          Contact our customer support team for assistance, explore frequently asked questions (FAQs), and troubleshoot any issues.
        </Text>

        {/* Add more sections and content here */}
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
    padding: 10,
  },
  heading: {
    textAlign:'center',
    color:'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    backgroundColor:'green',
    padding:10,
    borderRadius:30

  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    color:'green',
  },
  sectionText: {
    fontSize: 16,
    marginBottom: 15,
    textAlign:'justify'
  },
  bottomTabsContainer: {
    borderTopWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'white',
    paddingBottom: 20,
  },
});
