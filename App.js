import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import LoginArea from './src/LoginBox/LoginArea/LoginArea';
import { useFonts } from 'expo-font';
import { Roboto_400Regular, Roboto_700Bold,Roboto_500Medium } from '@expo-google-fonts/roboto';

export default function App() {
  
  const [fontsLoaded] = useFonts({
    "RobotoRegular":Roboto_400Regular,
    "RobotoBold":Roboto_700Bold,
    "Roboto500":Roboto_500Medium
  });

  if (!fontsLoaded) {
    return <View/>;
  }
  
  return (
    <SafeAreaView>
       <LoginArea/>
    </SafeAreaView>
  
  );
}


