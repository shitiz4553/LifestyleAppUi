import React, { useEffect, useState } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Dimensions
} from "react-native";
import Theme from "../src/Theme";
import Lottie from "lottie-react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons,FontAwesome5 } from '@expo/vector-icons';


const windowHeight = Dimensions.get('window').height;


function WaterView(){
    const [waterLevel,setWaterLevel] = useState(-122)
    const [totalGlasses,setTotalGlasses] = useState(8)
    const [drankGlasses,setDrankGlasses] = useState(0)
    const oneGlass = 250
    const calculateMltr = totalGlasses * oneGlass
    const calculateltr = calculateMltr / 1000


    const handleAddLevel = () => {
      if (drankGlasses < totalGlasses) {
        setDrankGlasses(drankGlasses + 1);
      }
      const lvl = waterLevel
      if(lvl < -10){
        setWaterLevel(waterLevel + 20)
      }
    }


    const handleRemoveLevel = () => {
      if (drankGlasses > 0) {  
      setDrankGlasses(drankGlasses - 1);
      }
      const lvl = waterLevel
      if(lvl > -122){
       setWaterLevel(waterLevel - 20)
      }
    }

    return (
      <View style={styles.container}>
        <View style={styles.lineSpread}>
          <View>
            <View style={styles.lineWrapper}>
              <View style={Theme.align}>
                <View style={styles.line}></View>
                <Text style={styles.label}>{totalGlasses} glasses</Text>
              </View>
              <View style={Theme.align}>
                <Text style={styles.label}>{calculateltr} L</Text>
                <View style={styles.line}></View>
              </View>
            </View>
          </View>
          <View style={styles.lineWrapper}>
            <View style={styles.line}></View>
            <View style={styles.line}></View>
          </View>
          <View style={styles.lineWrapper}>
            <View style={styles.line}></View>
            <View style={styles.line}></View>
          </View>
          <View style={styles.lineWrapper}>
            <View style={styles.line}></View>
            <View style={styles.line}></View>
          </View>
          <View style={styles.lineWrapper}>
            <View style={styles.line}></View>
            <View style={styles.line}></View>
          </View>
          <View style={styles.lineWrapper}>
            <View style={styles.line}></View>
            <View style={styles.line}></View>
          </View>
          <View style={styles.lineWrapper}>
            <View style={styles.line}></View>
            <View style={styles.line}></View>
          </View>
          <View style={styles.lineWrapper}>
            <View style={styles.line}></View>
            <View style={styles.line}></View>
          </View>
          <View style={styles.lineWrapper}>
            <View style={styles.line}></View>
            <View style={styles.line}></View>
          </View>
          <View style={styles.lineWrapper}>
            <View style={styles.line}></View>
            <View style={styles.line}></View>
          </View>
          <View style={styles.lineWrapper}>
            <View style={styles.line}></View>
            <View style={styles.line}></View>
          </View>
        </View>

        <Lottie
          style={[
            styles.water,
            {
              bottom: waterLevel,
              height:windowHeight / 1.2
            },
          ]}
          source={require("../assets/waves.json")}
          autoPlay
          loop
        />

        <View style={styles.InfoWrapper}>
          <Text style={styles.info}><Text style={styles.bignum}>{drankGlasses}</Text> / 8</Text>
          <Text style={styles.info}>Glasses</Text>
        </View>

        <View style={styles.buttonWrapper}>
          <TouchableOpacity onPress={()=>handleRemoveLevel()} style={styles.btn}>
          <FontAwesome5 name="minus" size={17} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>handleAddLevel()} style={styles.btn}>
          <Ionicons name="add" size={35} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    );
}
export default WaterView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
  },
  lineWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  line: {
    backgroundColor: Theme.lightTextcolor,
    height: 1,
    width: 15,
  },
  lineSpread: {
    flex: 1,
    justifyContent: "space-around",
  },
  label: {
    fontFamily: Theme.MulishRegular,
    color: Theme.lightTextcolor,
    marginHorizontal: 10,
    fontSize: 16,
  },
  water: {
    width: "100%",
    bottom: 0,
    zIndex: -1,
    position: "absolute",
  },
  InfoWrapper: {
    position: "absolute",
    top: "30%",
    alignSelf: "center",
  },
  info: {
    fontFamily: Theme.MulishRegular,
    marginHorizontal: 10,
    fontSize: 22,
    textAlign:'center'
  },
  bignum: {
    fontFamily: Theme.MulishBold,
    marginHorizontal: 10,
    fontSize: 55,
    textAlign:'center',
    color:'#98A6DA'
  },
  buttonWrapper:{
    width: "100%",
    alignItems:'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal:35,
    position:'absolute',
    zIndex:2,
    bottom:'8%'
  },
  btn:{
    height:56,
    width:56,
    justifyContent: 'center',
    alignItems:'center',
    borderRadius:100,
    backgroundColor:'#98A6DA'
  }
});