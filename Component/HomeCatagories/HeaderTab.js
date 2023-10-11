import { View, Text ,StyleSheet } from 'react-native'
import React from 'react'

export default function HeaderTab() {
  return (
    <View>
      <Text style={styles.HeaderTab}>Nazdeeqi Dukan</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    HeaderTab: {
 backgroundColor:'green',
 padding:15,
 textAlign:'center',
 color:'white',
 borderBottomLeftRadius:10,
 borderBottomRightRadius:10,
  },
  });