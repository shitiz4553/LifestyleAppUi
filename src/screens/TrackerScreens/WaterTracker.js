import React, { useState } from "react";
import { 
    View,
    Text,
    StyleSheet,
} from "react-native";


import HeaderWithIcons from "../../../components/HeaderWithIcons";
import Theme from "../../Theme";
import WaterView from "../../../components/Waterlevel";
import DeleteModal from "../../../components/DeleteModal";
import WaterGoal from "../../../components/WaterGoal";

function WaterTracker({navigation}){
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
    return (
      <View style={styles.container}>
        <HeaderWithIcons
          handlePressTwo={() => setModalVisible(true)}
          handlePressOne={() => setModalVisible2(true)}
          iconTwo={"trash"}
          iconOne="pencil"
          title={"Habit Tracker"}
        />
        <Text style={styles.maintext}>Water Tracker</Text>
        <View style={styles.body}>
          <WaterView />
        </View>

        <DeleteModal
          modalTitle={"Delete Record"}
          modalMessage={"Current Record will be permanently deleted. Confirm to proceed"}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          color={'#98A6DA'}
        />

        <WaterGoal
          modalTitle={"Daily Water Goal"}
          modalVisible={modalVisible2}
          setModalVisible={setModalVisible2}
          color={'#98A6DA'}
        />


  


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