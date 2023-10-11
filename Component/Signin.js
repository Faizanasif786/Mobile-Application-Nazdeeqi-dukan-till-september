import { View, TextInput, StyleSheet, Text, TouchableOpacity,Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Signin() {
  const navigation = useNavigation();

  const handleSignUpPress = () => {
    navigation.navigate('Home');
  };
  const handleNotHaveAccount =()=>{
    navigation.navigate('SignUp')
  }
     return (
          <>
          <View style={styles.Logo}>
            <Text>Nazdeeqi Dukan</Text>
          </View>
               <View style={styles.SigninFrom}>
                <Text style={styles.SigninText}>Sign In</Text>
                    <TextInput style={styles.input} placeholder="Enter Your Email" />
                    <TextInput style={styles.input} placeholder="Password" />
                    <View style={styles.buttons}>
        <TouchableOpacity style={styles.buttonContainer} onPress={handleSignUpPress}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer} >
          <Text style={styles.buttonText} onPress={handleNotHaveAccount}>Not Have Account?</Text>
        </TouchableOpacity>
        </View>
               </View>
          </>
     );
}

const styles = StyleSheet.create({
    Logo:{
       fontSize:20,
        marginBottom: 20,
        color:'green'
        
    }
    ,
    SigninText:{
        textAlign:'center',
        marginBottom: 20,
        color:'green'
    },
     SigninFrom: {
        backgroundColor:'white',
        padding:30,
        shadowColor: 'gray',
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.1)', // Add a subtle border
        shadowColor: 'rgba(0, 0, 0, 0.3)', // Adjust the shadow color and opacity
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5, // Android shadow
      },  
   
     input: {
        width: 250,
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius:10,
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
