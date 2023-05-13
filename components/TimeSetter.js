import React, { useState } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform
} from "react-native";
import Theme from "../src/Theme";

function TimeSetter({label}){

    const [hour1, setHour1] = useState('');
    const [hour2, setHour2] = useState('');
    const [minute1, setMinute1] = useState('');
    const [minute2, setMinute2] = useState('');
    const [isAM, setIsAM] = useState(true);

    const handleHour1Change = (text) => {
        if (/^\d{0,1}$/.test(text)) {
          setHour1(text);
          if (text.length === 1) {
            hour2Input.focus();
          }
        }
      };



  const handleHour2Change = (text) => {
    if (/^\d{0,1}$/.test(text)) {
      setHour2(text);
      if (text.length === 1) {
        minute1Input.focus();
      }
    }
  };

  const handleMinute1Change = (text) => {
    if (/^\d{0,1}$/.test(text)) {
      setMinute1(text);
      if (text.length === 1) {
        minute2Input.focus();
      }
    }
  };

  const handleMinute2Change = (text) => {
    if (/^\d{0,1}$/.test(text)) {
      setMinute2(text);
    }
  };

  const toggleAMPM = () => {
    setIsAM(!isAM);
  };


    return (
      <KeyboardAvoidingView  style={{flex:1}}>

        <Text style={styles.label}>{label}</Text>
        <View style={[Theme.align,{justifyContent:'center'}]}>
          <TextInput
            style={styles.input}
            maxLength={1}
            keyboardType="number-pad"
            value={hour1}
            onChangeText={handleHour1Change}
            placeholder="0"
          />
          <TextInput
            style={styles.input}
            maxLength={1}
            placeholder="0"
            keyboardType="number-pad"
            value={hour2}
            onChangeText={handleHour2Change}
            ref={(input) => {
              hour2Input = input;
            }}
          />
          <Text style={styles.colon}>:</Text>
          <TextInput
            style={styles.input}
            maxLength={1}
            placeholder="0"
            keyboardType="number-pad"
            value={minute1}
            onChangeText={handleMinute1Change}
            ref={(input) => {
              minute1Input = input;
            }}
          />
          <TextInput
            style={styles.input}
            maxLength={1}
            placeholder="0"
            keyboardType="number-pad"
            value={minute2}
            onChangeText={handleMinute2Change}
            ref={(input) => {
              minute2Input = input;
            }}
          />

          <TouchableOpacity style={styles.input} onPress={toggleAMPM}>
            <Text style={styles.ampm}>{isAM ? "AM" : "PM"}</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );}
export default TimeSetter;

const styles = StyleSheet.create({

  label:{
    fontSize:16,
    fontFamily:Theme.MulishRegular,
    color:Theme.lightTextcolor,
    marginBottom:10
  },
  input: {
    height: 55,
    width: 45,
    borderRadius: 5,
    textAlign: 'center',
    marginHorizontal: 5,
    fontSize: 25,
    fontFamily:Theme.MulishBold,
    backgroundColor:'#f7f7f7',
    justifyContent:'center',
    alignItems:'center'
  },
  colon: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  ampm: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily:Theme.MulishBold
  },
});