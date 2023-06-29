import React, { useState } from "react";
import { View,Text,StyleSheet } from "react-native";
import CustomButton from  '../../components/Buttons/CompButton'


const LoginButton = ({ onPressEmail, onPressCelular }) => {

    const [activeField, setActiveField] = useState('Celular');

    const [isEmailActive, setIsEmailActive] = useState(false);
    const [isCelularActive, setIsCelularActive] = useState(false);
  
    const handlePressActivePhone =() => 
    {
      setActiveField("Email");
    };

    const handlePressActiveEmail =() => 
    {
      setActiveField("Celular");
    };


    const handlePressEmail = () => {
      setIsEmailActive(true);
      setIsCelularActive(false);
    };
  
    const handlePressCelular = () => {
      setIsEmailActive(false);
      setIsCelularActive(true);
    };

    return (
    <View style={style.containerButtons}>  
    <View style={style.buttonEmail}>
<CustomButton 
   title="Email"
   onPress={() => {
     handlePressEmail();
     onPressEmail();
     handlePressActiveEmail();
   }}
   isActive={activeField === "Celular"}/>
    </View>  
    
   
    <View style={style.buttonCelular}>
<CustomButton 
  
  title="Telefone"
          onPress={() => {
            handlePressCelular();
            onPressCelular();
            handlePressActivePhone();
          }}
          isActive={activeField === "Email"}/>
    </View> 
     
    </View> )
};

export default LoginButton;


const style = StyleSheet.create({

    containerButtons:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around"
    },
    buttonEmail:{
        marginTop:"3%",
        marginLeft:"10%"
    },
    buttonCelular:{
        marginTop:"3%",
        marginRight:"10%"
    }
});
