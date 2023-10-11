import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ViewCart() {
  return (
    <View style={{
        flex:1,
        alignItems:'center',
        flexDirection:'row',
        position:'absolute',
        bottom:5,
        zIndex:999,
    }}>
    <View style={{
        flexDirection:'row',
        justifyContent:'flex-end',
        width:'100%'
    }}>
        <TouchableOpacity style={{
            marginTop:2,
            backgroundColor:'green',
            alignItems:'center',
            padding:13,
            borderRadius:30,
            width:150,
            position:'relative',
        }}>
      <Text style={{color:'white',fontSize:20}}>ViewCart</Text>
      </TouchableOpacity>
    </View>
    </View>
  )
}