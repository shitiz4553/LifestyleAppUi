import React, { useState } from "react";
import { 
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
} from "react-native";

import { Ionicons } from '@expo/vector-icons';
import Space from "../../components/Space";
import HeaderWithIcons from "../../components/HeaderWithIcons";
import Theme from "../Theme";
import KcalBar from "../../components/KcalBar";
import DeleteModal from "../../components/DeleteModal";
import FullButton from "../../components/FullButton";
import TimeSetter from "../../components/TimeSetter";
import DietLogBar from "../../components/DietLogBar";
import { foodLog } from "../../Data";
import KcalTarget from "../../components/KcalTarget";


function DietLog({navigation}){
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    return (
      <SafeAreaView style={styles.container}>
        <HeaderWithIcons
          handlePressTwo={() => setModalVisible(true)}
          handlePressOne={() => setModalVisible2(true)}
          iconTwo={"trash"}
          iconOne="pencil"
          title={"Food Tracker"}
        />
        <View style={styles.body}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <TouchableOpacity>
              <Text style={styles.maintext}>Diet Log</Text>
            </TouchableOpacity>

            <Space space={15} />

            <KcalBar color={Theme.orangeColor} value={1235} maxVal={2500} />

            <View style={styles.logWrapper}>
              <View style={styles.leftFlex}>
                <Text style={styles.label}>Food</Text>
              </View>
              <View style={styles.centerFlex}>
                <Text style={styles.label}>Calories</Text>
              </View>
              <View style={styles.rightFlex}>
                <Text style={styles.label}>Protien</Text>
              </View>
            </View>

            {foodLog.map((item, index) => {
              return (
                <DietLogBar
                  calories={item.calories}
                  protien={item.protien}
                  key={index}
                  label={item.food}
                  sublabel={item.type}
                />
              );
            })}
          </ScrollView>
          <TouchableOpacity
            onPress={() => navigation.navigate("AddDietLog")}
            style={styles.addBtn}
          >
            <Ionicons name="ios-add-sharp" size={35} color="white" />
          </TouchableOpacity>
        </View>

        <DeleteModal
          modalTitle={"Delete Record"}
          modalMessage={
            "Current Record will be permanently deleted. Confirm to proceed"
          }
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          color={Theme.greenColor}
        />

        <KcalTarget
          modalTitle={"Edit Daily Target"}
          modalVisible={modalVisible2}
          setModalVisible={setModalVisible2}
          color={Theme.orangeColor}
        />


      </SafeAreaView>
    );}
export default DietLog;

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
    logWrapper:{
      width:'100%',
      height:45,
      marginTop:25,
      flexDirection:'row',
      alignItems:'center',
      overflow:'hidden'
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
      fontSize:15,
      fontFamily:Theme.MulishBold,
      color:Theme.lightTextcolor
    },
    addBtn:{
        height:65,
        width:65,
        borderRadius:100,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor:Theme.orangeColor,
        position:'absolute',
        bottom:15,
        right:25
    }
});