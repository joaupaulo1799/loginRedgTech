import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const LoginButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Fazer Login</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop:"8%",
    marginLeft:"9%",
    backgroundColor: '#405BA1',
    borderRadius: 40,
    padding: 12,
    shadowColor: 'gray',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    borderWidth: 1,
    width:"80%",
    borderColor: 'white',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontFamily:"Roboto500",
    textAlign: 'center',
  },
});

export default LoginButton;
