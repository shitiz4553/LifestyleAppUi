import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    Modal,
    TextInput
} from "react-native";
import FullButton from "./FullButton";
import FullButtonStroke from "./FullButtonStroke";
import Theme from "../src/Theme";

function WaterGoal({modalVisible,setModalVisible,modalTitle,modalMessage,color}){
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{modalTitle}</Text>
            <View
              style={[
                Theme.align,
                { justifyContent: "space-between", width: "100%",marginTop:15 },
              ]}
            >
              <Text style={styles.modalSubText}>Target</Text>
              <View style={Theme.align}>
                <View style={styles.input}>
                  <TextInput
                    placeholderTextColor={"#d7d7d7"}
                    style={styles.inputtext}
                    keyboardType="numeric"
                    maxLength={1}
                    placeholder="0"
                  />
                </View>
                <View style={styles.input}>
                  <TextInput
                    placeholderTextColor={"#d7d7d7"}
                    style={styles.inputtext}
                    keyboardType="numeric"
                    maxLength={1}
                    placeholder="0"
                  />
                </View>
                <View style={styles.input}>
                    <Text style={{fontFamily:Theme.MulishBold}}>Glasses</Text>
                </View>
              </View>
            </View>
            <View
              style={[
                Theme.align,
                {
                  justifyContent: "space-between",
                  width: "100%",
                  position: "absolute",
                  bottom: 35,
                },
              ]}
            >
              <View style={{ width: "48%" }}>
                <FullButtonStroke
                  color={color ? color : Theme.primaryColor}
                  label={"Confirm"}
                />
              </View>
              <View style={{ width: "48%" }}>
                <FullButton
                  handlePress={() => setModalVisible(false)}
                  color={color ? color : Theme.primaryColor}
                  label={"Cancel"}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    );}
export default WaterGoal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: 350,
    height:255
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontFamily: Theme.MulishBold,
    fontSize: 22,
  },
  modalSubText: {
    textAlign: "center",
    fontFamily: Theme.MulishRegular,
    fontSize: 16,
  },
  input:{
    height:35,
    backgroundColor:'#f7f7f7',
    borderRadius:5,
    marginRight:5,
    paddingHorizontal:8,
    alignItems:'center',
    justifyContent:'center'
  },
  inputtext:{
    fontSize:16,
    fontFamily:Theme.MulishBold,
    height:'100%',
    width:'100%'
  }
});