import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    TouchableOpacity
} from "react-native";
import Theme from "../Theme";
import HeaderWithIcons from "../../components/HeaderWithIcons";
import Space from "../../components/Space";
import GratitudeCard from "../../components/GratitudeCard";
import { gratitudeList } from "../../Data";
import { Ionicons } from '@expo/vector-icons';

function Accomplishments({navigation}){
    return (
      <SafeAreaView style={styles.container}>
        <HeaderWithIcons title={"Tools"} />
        <View style={styles.body}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.welcome}>Accomplishments</Text>
            <Space space={25} />
            {gratitudeList.map((item, index) => {
              return (
                <GratitudeCard
                  key={index}
                  listTitle={item.listTitle}
                  date={item.date}
                  fav={item.fav}
                />
              );
            })}
          </ScrollView>
          <TouchableOpacity
            onPress={() => navigation.navigate("AddAccomp")}
            style={styles.addBtn}
          >
            <Ionicons name="ios-add-sharp" size={35} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );}
export default Accomplishments;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:Theme.backgroundColor
    },
    body:{
        flex:7,
        paddingHorizontal:20
    },
    welcome:{
        fontSize:45,
        fontFamily:Theme.PFRegular,
    },
    addBtn:{
        height:65,
        width:65,
        borderRadius:100,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor:Theme.secondaryColor,
        position:'absolute',
        bottom:15,
        right:25
    }
});