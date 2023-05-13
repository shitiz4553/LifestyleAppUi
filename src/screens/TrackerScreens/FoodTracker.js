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
import FoodClicker from "../../../components/FoodClicker";
import FullButton from "../../../components/FullButton";

function FoodTracker({navigation}){

    return (
      <SafeAreaView style={styles.container}>
        <HeaderWithIcons iconOne="pencil" title={"Habit Tracker"} />
        <View style={styles.body}>
          <Text style={styles.maintext}>Food Tracker</Text>

          <ScrollView showsVerticalScrollIndicator={false}>
            <Space space={25} />
            <View style={styles.container1}>
              <View style={styles.dateWrapper}></View>
              <View style={styles.moodWrapper}>
                <View style={styles.moods}>
                  <Text style={styles.label}>B</Text>
                </View>
                <View style={styles.moods}>
                  <Text style={styles.label}>MS</Text>
                </View>
                <View style={styles.moods}>
                  <Text style={styles.label}>L</Text>
                </View>
                <View style={styles.moods}>
                  <Text style={styles.label}>AS</Text>
                </View>
                <View style={styles.moods}>
                  <Text style={styles.label}>ES</Text>
                </View>
                <View style={styles.moods}>
                  <Text style={styles.label}>D</Text>
                </View>
              </View>
            </View>
            {dates.map((item, index) => {
              return <FoodClicker date={item.date} key={index} />;
            })}
          </ScrollView>
          <Space space={25} />
          <FullButton
            handlePress={() => navigation.navigate("DietLog")}
            color={Theme.orangeColor}
            label={"View Diet Log"}
          />
        </View>
      </SafeAreaView>
    );}
export default FoodTracker;

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
    width: "16%",
    alignItems: "center",
  },
  label: {
    fontFamily: Theme.MulishBold,
    fontSize: 15,
    color: "#7F7F7F",
  },
});