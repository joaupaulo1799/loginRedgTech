import React, { useState } from "react";
import {View,StyleSheet,Text,TouchableOpacity} from  'react-native'


const CustomButton = ({ title, onPress, isActive }) => {
  
  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

    return (

    <View> 
        <TouchableOpacity 
         onPress={onPress} 
         style={[styles.button, isActive && styles.activeButton]}
         activeOpacity={0.8}
         >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
    </View>
    

  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#405BA1',
    padding: 10,
    paddingLeft: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Roboto500',
    textAlign: 'center',
  },
  activeButton: {
    borderBottomWidth: 3,
    borderBottomColor: '#FFFFFF',
    paddingBottom: 2,
  },
});

export default CustomButton;
