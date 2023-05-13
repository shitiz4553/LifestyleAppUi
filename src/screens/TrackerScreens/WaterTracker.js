import React, { useState } from "react";
import { 
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from "react-native";

import Space from "../../../components/Space";
import HeaderWithIcons from "../../../components/HeaderWithIcons";
import Theme from "../../Theme";
import WaterView from "../../../components/Waterlevel";

function WaterTracker({navigation}){

    return (
      <View style={styles.container}>
        <HeaderWithIcons
          handlePressTwo={() => setModalVisible(true)}
          iconTwo={"trash"}
          iconOne="pencil"
          title={"Habit Tracker"}
        />
        <Text style={styles.maintext}>Water Tracker</Text>
        <View style={styles.body}>
          <WaterView />
        </View>
      </View>
    );}
export default WaterTracker;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:Theme.backgroundColor,
        paddingTop:35
    },
    body:{
        flex:7,
    },
    maintext:{
        fontSize:45,
        fontFamily:Theme.PFRegular,
        color:Theme.secondaryColor,
        marginLeft:25
    },
    input:{
        fontFamily:Theme.MulishBold,
        fontSize:18
    },
  
});