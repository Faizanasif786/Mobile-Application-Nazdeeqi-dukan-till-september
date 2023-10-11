import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const products = [
  { id: '1', name: 'Abdullah ', des: 'here is some store explanation here is some store explanation here is some store explanation', image: require('./Images/2.jpg') },
 ];

export default function Product() {
  function addToCart(product) {
    console.log('Added to Cart:', product);
  }

  return (
    <ScrollView style={styles.productContainer}>
      <Text style={styles.productSectionText}>Best Seller Stores </Text>
      <View style={styles.productList}>
        {products.map((product) => (
          <View key={product.id} style={styles.productItem}>
            <Image source={product.image} style={styles.productImage} />
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productDes}>{product.des}</Text>
            <View style={styles.buttonContainer}>
              <CustomButton
                title="Call Now"
                onPress={() => addToCart(product)}
              />
              <CustomButton
                title="Whatsapp"
                onPress={() => addToCart(product)}
              />
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const CustomButton = ({ title, onPress }) => (
  <TouchableOpacity style={styles.customButton} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  productContainer: {
    marginVertical: 20,
    marginBottom: 70,
  },
  productSectionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'green',
    padding: 5,
  },
  productList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    padding:5,
  },
  productItem: {
    backgroundColor: '#fff',
    alignItems: 'center',
    marginVertical: 10,
    width: '48%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
  },
  productImage: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 20,
  },
  productName: {
    fontSize: 16,
    marginTop: 5,
    textAlign: 'center',
  },
  productDes: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    gap: 20,
  },
  customButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 10,
    width:80,
  },
  buttonText: {
    color: 'white',
    fontSize: 10,
    textAlign: 'center',
  },
});
