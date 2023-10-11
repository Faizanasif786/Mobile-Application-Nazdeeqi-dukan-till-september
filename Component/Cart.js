import { View, Text ,StyleSheet } from 'react-native'
import React from 'react'
import ButtomTabs from './HomeCatagories/ButtomTabs'
export default function Cart() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>Cart</Text>
        
      </View>
      <View style={styles.bottomTabsContainer}>
        <ButtomTabs />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    content: {

    },
    bottomTabsContainer: {
      marginTop:'125%',
      borderTopWidth: 1, // Add a border to separate content and bottom tabs
      borderColor: 'gray',
      backgroundColor: 'white',
      paddingBottom: 20, // Add some padding to lift the tabs off the very bottom
    },
  });