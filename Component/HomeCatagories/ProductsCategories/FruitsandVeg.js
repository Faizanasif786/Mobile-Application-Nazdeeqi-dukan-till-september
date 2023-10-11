import { View, Text, Image,TouchableOpacity, StyleSheet ,Button, FlatList} from 'react-native';
import React from 'react';

import  { useState } from 'react';
import { ScrollView } from 'react-native';
const products = [
  { id: '1', name: 'Product 1', price: '$19.99', image: require('../Images/2.jpg') },
  { id: '2', name: 'Product 2', price: '$29.99', image: require('../Images/2.jpg') },
  { id: '3', name: 'Product 3', price: '$29.99', image: require('../Images/3.jpg') },

  { id: '4', name: 'Product 4', price: '$19.99', image: require('../Images/4.jpg') },
  { id: '5', name: 'Product 5', price: '$29.99', image: require('../Images/5.jpg') },
  { id: '6', name: 'Product 6', price: '$29.99', image: require('../Images/3.jpg') },

];

export default function Product() {
    const [cartItems, setCartItems] = useState([]); // State to manage cart items

    const handleAddToCart = (product) => {
      // Add the selected product to the cartItems array
      setCartItems([...cartItems, product]);
      alert(`${product.name} added to cart`);
    };
  console.log('Rendering Product component');
  return (
    <View style={styles.ProductContainer}>
      <Text style={styles.productSectionText}>Fruits & Vegetables</Text>
      <View style ={{margin:5,paddingVertical:5,paddingRight:10,}}>
      <ScrollView horizontal>
      <View style={styles.productList} >
        {products.map(product => (
          <View key={product.id} style={styles.productContainer}>
            <Image source={product.image} style={styles.productImage} />
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productPrice}>{product.price}</Text>
           
            <CustomButton title="Order Now" onPress={() => handleAddToCart(product)} />
          
          </View>
        ))}
      </View>
      </ScrollView>
     </View>
    </View>
  );
}
const CustomButton = ({ title, onPress }) => (
  <TouchableOpacity style={styles.customButton} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  ProductContainer: {
    marginVertical: 20,
  },
  productSectionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'green'
  },
  productList: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Allow products to wrap to the next line
    justifyContent: 'space-between',
  },
  productContainer: {
  alignItems:'center',
  marginRight:10,
  },
  productImage: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
  },
  productName: {
    fontSize: 16,
    marginTop: 5,
  },
  productPrice: {
    fontSize: 14,
    color: 'gray',
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
