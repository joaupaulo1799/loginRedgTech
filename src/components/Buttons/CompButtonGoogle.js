import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const GoogleButton = () => {
    return (
      <View style={styles.GoogleButton}>
      <TouchableOpacity style={styles.button}>
        <Icon name="google" size={24} color="white" style={styles.icon} />
        <Text style={styles.buttonText}>Entrar com o Google</Text>
      </TouchableOpacity>
      </View>

    );
  };
  
  const styles = StyleSheet.create({
    GoogleButton:{
      
      height:"100%",
      backgroundColor:"#405BA1"
    },
    button: {
      marginTop:"5%",
      marginRight:"9%",
      flexDirection: 'row',
      backgroundColor: '#405BA1',
      borderRadius: 8,
      padding: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontFamily:"Roboto500",
      marginLeft: 8,
    },
    icon: {
      marginRight: 8,
    },
  });

  export default GoogleButton 