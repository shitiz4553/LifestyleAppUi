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
import { dates } from "../../../Data";
import DateClicker from "../../../components/DateClicker";

function HabitGrid({navigation}){

    return (
      <SafeAreaView style={styles.container}>
        <HeaderWithIcons
          iconOne="pencil"
          title={"Habit Tracker"}
          hasDots={true}
        />
        <View style={styles.body}>
          <Text style={styles.maintext}>Habit Tracker</Text>

          <ScrollView showsVerticalScrollIndicator={false}>
            <Space space={25} />
            <View style={styles.container1}>
              <View style={styles.dateWrapper}></View>
              <View style={styles.moodWrapper}>
                <View style={styles.moods}><Text style={styles.label}>Sleep</Text></View>
                <View style={styles.moods}><Text style={styles.label}>Exercise</Text></View>
                <View style={styles.moods}><Text style={styles.label}>Food</Text></View>
                <View style={styles.moods}><Text style={styles.label}>Water</Text></View>
              </View>
            </View>
            {dates.map((item, index) => {
              return <DateClicker date={item.date} key={index} />;
            })}
          </ScrollView>
        </View>
      </SafeAreaView>
    );}
export default HabitGrid;

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