import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    Modal
} from "react-native";
import FullButton from "./FullButton";
import FullButtonStroke from "./FullButtonStroke";
import Theme from "../src/Theme";

function DeleteModal({modalVisible,setModalVisible,modalTitle,modalMessage,color}){
    return(
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
            <Text style={styles.modalSubText}>
              {modalMessage}
            </Text>
            <View style={[Theme.align,{justifyContent:'space-between',width:'100%'}]}>
              <View style={{ width: "48%" }}>
                <FullButtonStroke color={color ? color : Theme.primaryColor} label={"Confirm"} />
              </View>
              <View style={{ width: "48%" }}>
                <FullButton
                handlePress={()=>setModalVisible(false)}
                color={color ? color : Theme.primaryColor} label={"Cancel"} />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    )}
export default DeleteModal;

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
    marginBottom: 45,
  },
});