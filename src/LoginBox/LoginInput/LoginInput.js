import { View,TextInput, StyleSheet } from 'react-native';
import LoginImputPassword from "./LoginInputPassword.js"
import LoginButton from "../LoginButton/LoginButton.js"
const LoginInput = ({activeField}) => {
 

  return (
    <View style={styles.containerInput}> 
   {activeField === "Email" && (<View> 
    <TextInput
      style={[styles.input]}
      placeholder="E-mail"
      color = "white"
      placeholderTextColor="white"
    />
    </View>)}


{activeField === "Celular" && (
  <View> 
    <TextInput
      style={[styles.input]}
      placeholder="Telefone"
      color = "white"
      placeholderTextColor="white"
      keyboardType="numeric"
    />
    </View>
)}



    <View style={styles.PasswordInput}> 
    <LoginImputPassword/>
    </View>

  
    </View>
  );

 
};

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#FFFFFF',
    paddingBottom: 2,
    width:370,
    paddingTop:8,
    paddingBottom:18  ,
  },
  containerInput: {
   marginTop:"8%",
   flexDirection:"column",
   alignItems:"center",
   justifyContent:"space-between"
  }, PasswordInput:{
   marginTop:"10%"
  }
});

export default LoginInput;
