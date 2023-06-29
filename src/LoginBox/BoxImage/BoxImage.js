import React from "react";
import { View,StyleSheet,Image,Text } from "react-native";
import Image1 from '../../components/Buttons/RedgtechIcon.js'

const ImageBox = () => {

return (<View style={style.PositionImage}>
    <Image1/>
</View>)

};

const style = StyleSheet.create({
    DefinitionImage:{
        width:"40%",
        height:"50%"
    },
    PositionImage:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#405BA1",
        marginTop:"15%"

    }
});


export default ImageBox;