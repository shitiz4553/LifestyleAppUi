import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    TextInput,
    Image
} from "react-native";
import Theme from "../src/Theme";
import { Ionicons } from '@expo/vector-icons';

function InputBox({
  secureTextEntry,
  multiline,
  placeholder,
  leftIcon,
  keyboardType,
  maxLength,
  label,
  onChangeText,
  value,
}) {
  return (
    <View>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <View
        style={[
          styles.container,
          ,
          {
            height: multiline ? 80 : 50,
            alignItems: multiline ? "flex-start" : "center",
          },
        ]}
      >
        {leftIcon ? <Ionicons style={{marginRight:10}} name={leftIcon} size={24} color={Theme.primaryColor} /> : null}
        <TextInput
          secureTextEntry={secureTextEntry ? secureTextEntry : false}
          value={value}
          multiline={multiline ? multiline : false}
          onChangeText={onChangeText}
          maxLength={maxLength}
          keyboardType={keyboardType}
          placeholderTextColor={Theme.lightTextcolor}
          style={[styles.input]}
          placeholder={placeholder}
          autoCapitalize="none"
        />
      </View>
    </View>
  );
}
export default InputBox;

const styles = StyleSheet.create({
    container: {
       width:'100%',
       height:50,
       alignItems:'center',
       paddingHorizontal:15,
       flexDirection:'row',
       paddingVertical:8,
       borderBottomWidth:1,
       borderBottomColor:Theme.primaryColor
    },
    input:{
        width:'100%',
        fontSize:16,
        fontFamily:Theme.MulishRegular,
        color:'#fff',
    },
    img:{
        height:17,
        width:17,
        resizeMode:'contain',
        marginRight:15
    },
    label:{
        fontFamily:Theme.MulishRegular,
        marginBottom:10,
        fontSize:16,
        color:Theme.lightTextColor
    }
});