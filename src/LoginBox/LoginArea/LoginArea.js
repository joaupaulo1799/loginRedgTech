import React, { useState } from 'react';
import { View,Text,StyleSheet } from "react-native";
import CustomButton from  '../../components/Buttons/CompButton'
import CustomButtonTop from  '../../components/Buttons/CompButtonTop'
import ImageBox from "../BoxImage/BoxImage";
import LoginButton from "../LoginButton/LoginButton.js"
import LoginInput from "../LoginInput/LoginInput.js"
import CompButtonRegister from "../../components/Buttons/CompButtonRegister.js"
import ForgotPasswordLink from "../../components/ForgetPassowrd";
import GoogleButton from "../../components/Buttons/CompButtonGoogle.js"
const LoginArea = () => {

    const [activeField, setActiveField] = useState('Email');

    const handlePressEmail = () => {
      setActiveField('Email');
    };
  
    const handlePressCelular = () => {
      setActiveField('Celular');
    };

   return( 
   <View style={style.containerFull}>
  <CustomButtonTop 
  title="Registrar-se"
  onPress={onPress = 
() => console.log("Se registre")}/>
 <ImageBox/> 
 <LoginButton
  onPressEmail={handlePressEmail}
  onPressCelular={handlePressCelular}
      />
      <LoginInput activeField={activeField} />
 <CompButtonRegister/>
<ForgotPasswordLink/>
<GoogleButton/>
 </View>
)
};

const style = StyleSheet.create({

    containerFull:{
        display:"flex",
        backgroundColor:"#405BA1",
        height:"100%",
        maxHeight:"100%"
        },
    ContainerMidle:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
    }
});

export default LoginArea