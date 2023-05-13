import React, { useState } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import Theme from "../src/Theme";

function FoodClicker({date}){
    const [one,setOne] = useState(false);
    const [two,setTwo] = useState(false);
    const [three,setThree] = useState(false);
    const [four,setFour] = useState(false);
    const [five,setFive] = useState(false);
    const [six,setSix] = useState(false);

    return (
      <View style={styles.container}>
        <View style={styles.dateWrapper}>
          <Text style={styles.label}>{date}</Text>
        </View>
        <View style={styles.moodWrapper}>
          <TouchableOpacity
            onPress={() => setOne(!one)}
            style={[
              styles.moods,
              { backgroundColor: one ? "#FF6B6B" : "#e8e8e8" },
            ]}
          ></TouchableOpacity>
          <TouchableOpacity
            onPress={() => setTwo(!two)}
            style={[
              styles.moods,
              { backgroundColor: two ? "#FF6B6B" : "#e8e8e8" },
            ]}
          ></TouchableOpacity>
          <TouchableOpacity
            onPress={() => setThree(!three)}
            style={[
              styles.moods,
              { backgroundColor: three ? "#FF6B6B" : "#e8e8e8" },
            ]}
          ></TouchableOpacity>
          <TouchableOpacity
            onPress={() => setFour(!four)}
            style={[
              styles.moods,
              { backgroundColor: four ? "#FF6B6B" : "#e8e8e8" },
            ]}
          ></TouchableOpacity>
          <TouchableOpacity
            onPress={() => setFive(!five)}
            style={[
              styles.moods,
              { backgroundColor: five ? "#FF6B6B" : "#e8e8e8" },
            ]}
          ></TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSix(!six)}
            style={[
              styles.moods,
              { backgroundColor: six ? "#FF6B6B" : "#e8e8e8" },
            ]}
          ></TouchableOpacity>
        </View>
      </View>
    );}
export default FoodClicker;

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
    width: "16%",
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