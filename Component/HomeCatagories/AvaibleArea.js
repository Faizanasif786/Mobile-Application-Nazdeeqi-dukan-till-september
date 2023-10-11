import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function AvaibleArea() {
  const navigation = useNavigation();

  const handleBal = () => {
    navigation.navigate('Baldia');
  };

  const handleLiy = () => {
    navigation.navigate('Liyari');
  };

  return (
    <>
      <View style={styles.areaText}>
        <Text>AvaibleArea</Text>
      </View>
      <View style={styles.AvaibleAreabtn}>
        <TouchableOpacity onPress={handleBal}>
          <Text style={styles.baldiabtn}>Baldia</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLiy}>
          <Text style={styles.Liyaribtn}>Liyari</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  areaText: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    fontSize: 20,
  },
  AvaibleAreabtn: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  baldiabtn: {
    backgroundColor: 'lightgreen',
    padding: 10,
    width: 150,
    textAlign: 'center',
    borderRadius: 20,
  },
  Liyaribtn: {
    backgroundColor: 'lightgreen',
    padding: 10,
    width: 150,
    textAlign: 'center',
    borderRadius: 20,
  },
});
