import React, { useState } from "react";
import { 
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
} from "react-native";

import Space from "../../components/Space";
import HeaderWithIcons from "../../components/HeaderWithIcons";
import Theme from "../Theme";
import KcalBar from "../../components/KcalBar";
import DeleteModal from "../../components/DeleteModal";
import FullButton from "../../components/FullButton";
import TimeSetter from "../../components/TimeSetter";


function DietLog({navigation}){
    const [modalVisible, setModalVisible] = useState(false);
    return (
      <SafeAreaView style={styles.container}>
        <HeaderWithIcons
          handlePressTwo={() => setModalVisible(true)}
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

          </ScrollView>
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
  
});