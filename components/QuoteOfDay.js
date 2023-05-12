import React from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import Theme from "../src/Theme";
import { Ionicons } from '@expo/vector-icons';

function QuoteOfDay({quote}){
    return(
    <View style={styles.container}>
      <View style={styles.titlewrap}>
      <Ionicons name="star" size={24} color="#FFD56B" />
      <Text style={styles.title}>Quote Of the Day</Text>
      <Ionicons name="star" size={24} color="#FFD56B" />
      </View>
      <Text style={styles.quote}>
        " {quote} "
      </Text>
    </View>
    )}
export default QuoteOfDay;

const styles = StyleSheet.create({
    container: {
      width:'100%',
      borderRadius:15,
      backgroundColor:Theme.primaryColor,
      paddingVertical:8
    },
    titlewrap:{
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        paddingTop:10
    },
    title:{
        color:'#FFF',
        fontFamily:Theme.MulishBold,
        fontSize:17
    },
    quote:{
        fontFamily:Theme.MulishRegular,
        color:'#BDBDD7',
        fontSize:16,
        padding:15,
        textAlign:'center'
    }
});