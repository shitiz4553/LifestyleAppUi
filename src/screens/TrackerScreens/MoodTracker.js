import React, { useState } from "react";
import { 
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
} from "react-native";

import Space from "../../../components/Space";
import HeaderWithIcons from "../../../components/HeaderWithIcons";
import Theme from "../../Theme";
import { dates, moodColorChart } from "../../../Data";
import DateClicker from "../../../components/DateClicker";
import InfoPopup from "../../../components/InfoPopup";

function MoodTracker({navigation}){
  const [modalVisible2, setModalVisible2] = useState(false);
    return (
      <SafeAreaView style={styles.container}>
        <HeaderWithIcons
          iconOne="pencil"
          title={"Habit Tracker"}
          hasDots={true}
          handlePressDots={()=>setModalVisible2(true)}
        />
        <View style={styles.body}>
          <Text style={styles.maintext}>Mood Tracker</Text>

          <ScrollView showsVerticalScrollIndicator={false}>
            <Space space={25} />
            <View style={styles.container1}>
              <View style={styles.dateWrapper}></View>
              <View style={styles.moodWrapper}>
                <View style={styles.moods}><Text style={styles.label}>Bad</Text></View>
                <View style={styles.moods}><Text style={styles.label}>Neutral</Text></View>
                <View style={styles.moods}><Text style={styles.label}>Happy</Text></View>
                <View style={styles.moods}><Text style={styles.label}>Excellent</Text></View>
              </View>
            </View>
            {dates.map((item, index) => {
              return <DateClicker date={item.date} key={index} />;
            })}
          </ScrollView>
        </View>

        <InfoPopup
          modalTitle={"Mood Color Chart"}
          modalVisible={modalVisible2}
          setModalVisible={setModalVisible2}
          data={moodColorChart}
        />

      </SafeAreaView>
    );}
export default MoodTracker;

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
  dateWrapper: {
    width: "15%",
    height: 5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  container1: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  moodWrapper: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  moods: {
    width: "24%",
    alignItems: "center",
  },
  label: {
    fontFamily: Theme.MulishBold,
    fontSize: 15,
    color: "#7F7F7F",
  },
});