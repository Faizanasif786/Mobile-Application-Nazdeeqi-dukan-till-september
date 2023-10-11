import { View, Text } from 'react-native'
import React from 'react'
import FruitsandVeg from './ProductsCategories/FruitsandVeg'
import BakeryandDairy from './ProductsCategories/BakeryandDairy'
export default function Products({ onAddToCart }) {
  return (
    <>
    <View>
      <Text>Faizan</Text>
      <FruitsandVeg/>
      <BakeryandDairy />
    </View>
    </>
  )
}