import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    Platform,
    TouchableOpacity,
    Image
} from "react-native";
import Theme from "../src/Theme";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import assets from "../assets/assets";

function HeaderWithIcons({title,handlePressOne,handlePressTwo,iconOne,iconTwo,hasDots,handlePressDots}){
    const navigation = useNavigation()
    return (
      <View style={styles.container}>
        <View style={Theme.align}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back-outline" size={28} color="#7F7F7F" />
          </TouchableOpacity>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={Theme.align}>
          {hasDots ? (
            <TouchableOpacity onPress={handlePressDots}>
              <Image source={assets.colordots} style={styles.dots} />
            </TouchableOpacity>
          ) : (
            <>
              <TouchableOpacity onPress={handlePressOne}>
                <Ionicons name={iconOne} size={25} color="#1B0C38" />
              </TouchableOpacity>
              <TouchableOpacity
                style={{ marginLeft: 15 }}
                onPress={handlePressTwo}
              >
                <Ionicons name={iconTwo} size={25} color={Theme.orangeColor} />
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    );}
export default HeaderWithIcons;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal:20,
        paddingTop:Platform.OS ==='android' ? 25 : 0,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    title:{
        fontFamily:Theme.MulishBold,
        marginLeft:10,
        color:'#7F7F7F',
        fontSize:20
    },
    dots:{
        height:27,
        width:27,
        resizeMode:'contain'
    }
});