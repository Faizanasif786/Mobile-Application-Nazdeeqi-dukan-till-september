import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import React from 'react';

const images = [
  { id: '1', source: require('./Images/1.jpeg') },
  { id: '2', source: require('./Images/1.jpeg') },
  { id: '3', source: require('./Images/1.jpeg') },

];

export default function Promotion() {
  const renderItem = ({ item }) => (
    <Image source={item.source} style={styles.image} />
  );

  return (
    <View >
      <Text style={styles.promotionText}>Promotion</Text>
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        pagingEnabled
      />
    </View>
  );
}

const styles = StyleSheet.create({

  promotionText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    width: 200,
    height: 50,
    resizeMode: 'cover', // Adjust the resizeMode based on your image's aspect ratio
    marginHorizontal: 10,
  },
});
