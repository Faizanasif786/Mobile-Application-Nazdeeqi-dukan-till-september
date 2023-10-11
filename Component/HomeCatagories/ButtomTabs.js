import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function ButtomTabs({ cartCount }) {
  const navigation = useNavigation();

  const handlesHelpPage = () => {
    navigation.navigate('Help');
  };
  const handlesWishListPage = () => {
    navigation.navigate('About');
  };
  const handlesBasketPage = () => {
    navigation.navigate('Cart');
  };
  const handlesHomePage = ()=>{
    navigation.navigate('Home');
  }
  return (
    <View style={styles.navbar}>
      <View style={styles.Nav}>
        <TouchableOpacity onPress={handlesHomePage}>
          <Icon name="home" size={30} color="green" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handlesWishListPage}>
          <Icon name="information-circle" size={30} color="green" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handlesHelpPage}>
          <Icon name="help-circle" size={30} color="green" />
        </TouchableOpacity>
        <View style={styles.basketIcon}>
          <TouchableOpacity onPress={handlesBasketPage}>
            <Icon name="basket" size={30} color="green" />
            {cartCount > 0 && (
              <View style={styles.cartCountContainer}>
                <Text style={styles.cartCountText}>{cartCount}</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cartCountContainer: {
    position: 'absolute',
    top: -8,
    right: -8,
    backgroundColor: 'red', // Change this to your desired color
    borderRadius: 10,
    paddingHorizontal: 5,
    height: 20,
    minWidth: 20,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1, // Ensure the cart counter is rendered above other elements
  },
  cartCountText: {
    color: 'white', // Change this to your desired text color
    fontSize: 12,
    fontWeight: 'bold',
  },
  navbar: {
    backgroundColor: 'white',
    height: 60,
    justifyContent: 'center',
  },
  Nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
