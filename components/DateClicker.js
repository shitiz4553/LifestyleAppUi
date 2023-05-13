import React, { useState } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import Theme from "../src/Theme";

function DateClicker({date}){
    const [sleep,setSleep] = useState(false);
    const [excercise,setExcercise] = useState(false);
    const [food,setFood] = useState(false);
    const [water,setWater] = useState(false);

    return (
      <View style={styles.container}>
        <View style={styles.dateWrapper}>
          <Text style={styles.label}>{date}</Text>
        </View>
        <View style={styles.moodWrapper}>
          <TouchableOpacity
            onPress={() => setSleep(!sleep)}
            style={[
              styles.moods,
              { backgroundColor: sleep ? "#98DAAA" : "#e8e8e8" },
            ]}
          ></TouchableOpacity>
          <TouchableOpacity
            onPress={() => setExcercise(!excercise)}
            style={[
              styles.moods,
              { backgroundColor: excercise ? "#9471AA" : "#e8e8e8" },
            ]}
          ></TouchableOpacity>
          <TouchableOpacity
            onPress={() => setFood(!food)}
            style={[
              styles.moods,
              { backgroundColor: food ? "#FF6B6B" : "#e8e8e8" },
            ]}
          ></TouchableOpacity>
          <TouchableOpacity
            onPress={() => setWater(!water)}
            style={[
              styles.moods,
              { backgroundColor: water ? "#98A6DA" : "#e8e8e8" },
            ]}
          ></TouchableOpacity>
        </View>
      </View>
    );}
export default DateClicker;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom:6
  },
  dateWrapper: {
    width: "15%",
    height: 55,
    backgroundColor: "#e8e8e8",
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 5,
  },
  moodWrapper: {
    width: "80%",
    flexDirection:'row',
    justifyContent:'space-between'
  },
  moods: {
    width: "24%",
    height: 55,
    backgroundColor: "#e8e8e8",
    borderRadius: 5,
  },
  label:{
    fontFamily:Theme.MulishBold,
    fontSize:20,
    color:"#7F7F7F"
  }
});