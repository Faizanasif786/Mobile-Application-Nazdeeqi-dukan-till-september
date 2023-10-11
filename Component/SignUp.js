import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';




export default function SignUp() {
  const navigation = useNavigation();

  const handleSignInPress = () => {
    navigation.navigate('SignIn');
  };
  return (
    <>
      <View style={styles.Logo}>
        <Text>My E-Commerce App</Text>
      </View>
      <View style={styles.SigninUpFrom}>
        <Text style={styles.SigninUpText}>Sign Up</Text>
        <TextInput style={styles.input} placeholder="Enter Your Name" />
        <TextInput style={styles.input} placeholder="Enter Your Email" />
        <TextInput style={styles.input} placeholder="Password" />
        <View style={styles.buttons}>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer} onPress={handleSignInPress}>
          <Text style={styles.buttonText}>Already Have Account?</Text>
        </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  Logo: {
    fontSize: 20,
    marginBottom: 20,
    color: 'green',
  },
  SigninUpText: {
    textAlign: 'center',
    marginBottom: 20,
    color: 'green',
  },
  SigninUpFrom: {
    backgroundColor: 'white',
    padding: 30,
    shadowColor: 'gray',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    width: 250,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    width:'auto',
    backgroundColor: 'green', // Customize button color
    borderRadius: 2,
    alignItems: 'center',
    paddingVertical: 10,
    padding:10,
  },
  buttonText: {
    color: 'white',
    fontSize: 12,
  },
  buttons:{
    flexDirection:'row',
    margin:'auto',
    textAlign:'center',
    justifyContent:'space-evenly',
    alignItems:'center',

  }
});
