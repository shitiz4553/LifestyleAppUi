import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import Theme from "../src/Theme";
import { Ionicons } from '@expo/vector-icons';

function GratitudeCard({listTitle,date,fav}){
    return (
      <TouchableOpacity style={styles.container}>
        <Text style={styles.title}>{date}</Text>
        <Text numberOfLines={1} style={styles.subtitle}>
          {listTitle}
        </Text>
        <View style={styles.star}>
          {fav ? <Ionicons name="star" size={24} color="#FFD56B" /> : null}
        </View>
      </TouchableOpacity>
    );}
export default GratitudeCard;

const styles = StyleSheet.create({
    container: {
       backgroundColor:Theme.containerGrey,
       borderRadius:8,
       padding:15,
       marginBottom:10
    },
    title:{
        fontSize:17,
        fontFamily:Theme.MulishBold
    },
    subtitle:{
        fontSize:17,
        fontFamily:Theme.MulishRegular,
        marginTop:10,
    },
    star:{
        position:'absolute',
        right:10,
        top:10
    }
});