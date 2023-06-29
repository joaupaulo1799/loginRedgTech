import React, { useState } from "react";
import {View,StyleSheet,Text,TouchableOpacity} from  'react-native'


const CustomButtonTop = ({ title, onPress }) => {
  
  

    return (

    <View style={styles.containerButton}> 
        <TouchableOpacity style={[styles.button,styles.borderbutton]}
        onPress={onPress}
        activeOpacity={0.3}
         >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
    </View>
    

  );
};

const styles = StyleSheet.create({
  containerButton:{
  flexDirection:"row-reverse",
  fontFamily:"RobotoRegular"
  },
  button: {
    marginTop:"5%",
    backgroundColor:"#405BA1",
    padding: 10,
    paddingLeft:10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily:"Roboto500",
    textAlign: 'center',
  }
});

export default CustomButtonTop;
