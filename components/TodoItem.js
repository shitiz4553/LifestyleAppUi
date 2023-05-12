import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import Theme from "../src/Theme";
import { Ionicons } from '@expo/vector-icons';
function TodoItem({done,fav,label}){
    return (
      <TouchableOpacity style={styles.container}>
       <View style={{flexDirection:'row',alignItems:'center'}}>
       {done ? (
          <View style={styles.square} />
        ) : (
          <View style={styles.strokesqsuare} />
        )}
        <Text style={[styles.label, { textDecorationLine: done ? "line-through"  : 'none'}]}>
          {label}
        </Text>
       </View>
        {
            fav ?
            <Ionicons name="star" size={22} color="#FFD56B" />
            :
            null

        }
      </TouchableOpacity>
    );}
export default TodoItem;

const styles = StyleSheet.create({
    container: {
       borderRadius:8,
       backgroundColor:Theme.containerGrey,
       padding:10,
       flexDirection:'row',
       alignItems:'center',
       paddingVertical:15,
       justifyContent:'space-between',
       marginBottom:10
    },
    square:{
        height:19,
        width:19,
        marginHorizontal:5,
        backgroundColor:'#1B0C38'
    },
    strokesqsuare:{
        height:19,
        width:19,
        marginHorizontal:5,
        borderWidth:1,
        borderColor:'#1B0C38'
    },
    label:{
        fontFamily:Theme.MulishRegular,
        marginLeft:5,
        fontSize:16
    }
});