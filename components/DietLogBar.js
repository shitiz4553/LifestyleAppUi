import React from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import Theme from "../src/Theme";

function DietLogBar({label,sublabel,calories,protien}){
    return (
      <View style={styles.logWrapper}>
        <View style={styles.leftFlex}>
          <Text numberOfLines={1} style={styles.label}>
            {label}
          </Text>
          <Text numberOfLines={1} style={styles.sublabel}>
            {sublabel}
          </Text>
        </View>
        <View style={styles.centerFlex}>
          <Text numberOfLines={1} style={styles.label}>
            {calories}Kcal
          </Text>
        </View>
        <View style={styles.rightFlex}>
          <Text numberOfLines={1} style={styles.label}>
            {protien}g
          </Text>
        </View>
      </View>
    );}
export default DietLogBar;

const styles = StyleSheet.create({
    logWrapper:{
        backgroundColor:'#F7f7f7',
        width:'100%',
        height:55,
        marginBottom:5,
        flexDirection:'row',
        alignItems:'center',
        overflow:'hidden',
        borderRadius:10
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
        fontSize:16,
        fontFamily:Theme.MulishRegular,
        opacity:0.7
      },
      sublabel:{
        fontSize:12,
        fontFamily:Theme.MulishRegular,
        color:Theme.orangeColor,
        letterSpacing:0.2
      }
});