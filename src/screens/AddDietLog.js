import React, { useState } from "react";
import { 
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform
} from "react-native";
import Space from "../../components/Space";
import HeaderWithIcons from "../../components/HeaderWithIcons";
import Theme from "../Theme";
import InputBox from "../../components/InputBox";
import FullButton from "../../components/FullButton";


function AddDietLog({navigation}){
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <SafeAreaView style={styles.container}>
          <HeaderWithIcons iconOne="pencil" title={"Diet Log"} />
          <View style={styles.body}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <TouchableOpacity>
                <Text style={styles.maintext}>Diet Log</Text>
              </TouchableOpacity>

              <Space space={15} />

              <InputBox placeholder={"Enter Food Name"} />
              <InputBox placeholder={"Food Type"} />
              <InputBox placeholder={"Calories(Kcal)"} />
              <InputBox placeholder={"Carbs(g)"} />
              <InputBox placeholder={"Protien(g)"} />
              <InputBox placeholder={"Fats(g)"} />
              <InputBox placeholder={"Sugar(g)"} />
            </ScrollView>
            <FullButton color={Theme.orangeColor} label={"Record Log"} />
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    );}
export default AddDietLog;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:Theme.backgroundColor
    },
    body:{
        flex:7,
        paddingHorizontal:20,
        paddingBottom:10
    },
    maintext:{
        fontSize:45,
        fontFamily:Theme.PFRegular,
        color:Theme.secondaryColor
    },
    input:{
        fontFamily:Theme.MulishBold,
        fontSize:18
    },
    logWrapper:{
      width:'100%',
      height:45,
      marginTop:25,
      flexDirection:'row',
      alignItems:'center',
      overflow:'hidden'
    },
    leftFlex:{
      height:'100%',
      width:'50%',
      paddingHorizontal:10,
      justifyContent:'center'
    },
    centerFlex:{
      flex:1,
      height:'100%',
      width:'25%',
      alignItems:'center',
      justifyContent:'center'
    },
    rightFlex:{
      flex:1,
      height:'100%',
      width:'25%',
      justifyContent:'center',
      alignItems:'center',
    },
    label:{
      fontSize:15,
      fontFamily:Theme.MulishBold,
      color:Theme.lightTextcolor
    },
    addBtn:{
        height:65,
        width:65,
        borderRadius:100,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor:Theme.orangeColor,
        position:'absolute',
        bottom:15,
        right:25
    }
});