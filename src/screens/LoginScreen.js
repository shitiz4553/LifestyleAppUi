import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Image,
    TouchableOpacity,
} from "react-native";
import Theme from "../Theme";
import assets from "../../assets/assets";
import FullButton from "../../components/FullButton";
import InputBox from '../../components/InputBox'
import Space from '../../components/Space'
import { MaterialIcons } from '@expo/vector-icons';

function LoginScreen({navigation}){
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Image source={assets.logoline} style={styles.logo} />
          <Text style={styles.title}>Sign In</Text>
        </View>
        <View style={styles.body}>
          <InputBox placeholder={"Email"} leftIcon="mail" />
          <Space space={55} />
          <InputBox
            secureTextEntry={true}
            placeholder={"Password"}
            leftIcon="lock-closed"
          />
        </View>
        <View style={styles.footer}>
          <TouchableOpacity>
            <Text style={styles.forgot}>Forgot your password ?</Text>
          </TouchableOpacity>
          <FullButton 
          handlePress={()=>navigation.navigate('MainRoute')}
          label={"Sign In"} color={Theme.primaryColor} />
        </View>
      </SafeAreaView>
    );}
export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:Theme.backgroundColor
    },
    header:{
        flex:1,
        alignItems:'center',
        paddingTop:5,
        justifyContent:'center'
    },
    body:{
        flex:1.5,
        paddingHorizontal:25,
        justifyContent:'center',
    },
    footer:{
        flex:1,
        paddingHorizontal:20,
        justifyContent:'flex-end',
        paddingBottom:25
    },
    logo:{
        height:120,
        width:190,
        resizeMode:'contain'
    },
    title:{
        fontSize:35,
        fontFamily:Theme.PFRegular,
    },
    forgot:{
        fontFamily:Theme.MulishRegular,
        color:Theme.primaryColor,
        paddingBottom:15,
        textAlign:'center',
        fontSize:16
    },
    halfWrapper:{
        width:'100%',
        height:'50%'
    }
});