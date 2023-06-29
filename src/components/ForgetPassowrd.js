import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const ForgotPasswordLink = () => {
  const handlePress = () => {
    // Lógica para lidar com o clique no link "Esqueceu a senha?"
    console.log('Link "Esqueceu a senha?" clicado');
  };

  return (
    <View style={styles.ContainerForgert}>
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.linkText}>Esqueceu a senha?</Text>
    </TouchableOpacity>
    </View>

  );
};

const styles = StyleSheet.create({
  linkText: {
    marginTop:"6%",
    marginLeft:"29%",
    color: '#FFFFFF',
    fontSize:20,
    fontFamily:"Roboto500"
  },ContainerForgert:{

  },
});

export default ForgotPasswordLink;
