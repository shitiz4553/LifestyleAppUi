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
import TrackBar from "../../../components/TrackBar";
import { exercises } from "../../../Data";
import EditTimePopup from "../../../components/EditTimePopup";




function ExcerciseTracker({navigation}){

  const [modalVisible2, setModalVisible2] = useState(false);


    return (
      <SafeAreaView style={styles.container}>
        <HeaderWithIcons
          handlePressOne={() => setModalVisible2(true)}
          iconOne="pencil"
          title={"Habit Tracker"}
        />
        <View style={styles.body}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <TouchableOpacity>
              <Text style={styles.maintext}>Exercise Tracker</Text>
            </TouchableOpacity>

            <Space space={15} />

            <TrackBar color={"#9471AA"} maxvalue={3} hours={1} minutes={55} />

            <Text style={styles.label}>Add Excercise</Text>
            <View style={styles.wrapper}>
              {exercises.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    style={[styles.item, { backgroundColor: item.color }]}
                  >
                    <Text style={styles.itemLabel}>{item.label}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>

          <EditTimePopup
            modalTitle={"Edit Daily Target"}
            modalVisible={modalVisible2}
            setModalVisible={setModalVisible2}
            color={'#9471AA'}
          />
        </View>
      </SafeAreaView>
    );}
export default ExcerciseTracker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.backgroundColor,
  },
  body: {
    flex: 7,
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  maintext: {
    fontSize: 45,
    fontFamily: Theme.PFRegular,
    color: Theme.secondaryColor,
  },
  input: {
    fontFamily: Theme.MulishBold,
    fontSize: 18,
  },
  label: {
    fontFamily: Theme.MulishBold,
    fontSize: 16,
    marginBottom: 15,
  },
  item: {
    height: 120,
    borderRadius: 15,
    width: "30%",
    marginBottom: 8,
    marginLeft: 8,
    padding: 10,
    justifyContent: "flex-end",
  },
  itemLabel: {
    fontFamily: Theme.MulishBold,
    color: "#FFFFFF",
    fontSize: 16,
  },
  wrapper:{
    flexDirection:'row',
    flexWrap:'wrap',
  }
});