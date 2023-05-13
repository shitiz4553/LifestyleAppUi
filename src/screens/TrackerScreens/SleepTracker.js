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
import SleepTrackBar from "../../../components/TrackBar";
import DeleteModal from "../../../components/DeleteModal";
import FullButton from "../../../components/FullButton";
import TimeSetter from "../../../components/TimeSetter";


function SleepTracker({navigation}){
    const [modalVisible, setModalVisible] = useState(false);
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
              <Text style={styles.maintext}>Sleep Tracker</Text>
            </TouchableOpacity>

            <Space space={15} />

            <SleepTrackBar hours={4} minutes={55} />

            <TimeSetter label="From" />
            <Space space={25} />
            <TimeSetter label="To" />
          </ScrollView>
          <FullButton label={"Record Time"} color={Theme.greenColor} />
          <Space space={15} />
        </View>

        <DeleteModal
          modalTitle={"Delete Record"}
          modalMessage={"Current Record will be permanently deleted. Confirm to proceed"}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          color={Theme.greenColor}
        />


      </SafeAreaView>
    );}
export default SleepTracker;

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