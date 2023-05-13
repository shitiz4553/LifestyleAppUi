import React, { useState } from "react";
import { 
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
} from "react-native";

import Space from "../../../components/Space";
import HeaderWithIcons from "../../../components/HeaderWithIcons";
import Theme from "../../Theme";

function FoodTracker({navigation}){

    return (
      <SafeAreaView style={styles.container}>
        <HeaderWithIcons
          handlePressTwo={() => setModalVisible(true)}
          iconTwo={"trash"}
          iconOne="pencil"
          title={"Habit Tracker"}
        />
        <View style={styles.body}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <TouchableOpacity>
              <Text style={styles.maintext}>Habit Tracker</Text>
            </TouchableOpacity>

            <Space space={15} />

          
          </ScrollView>
        </View>


      </SafeAreaView>
    );}
export default FoodTracker;

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
  
});