import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    Modal,
    TouchableOpacity
} from "react-native";
import Theme from "../src/Theme";
import { Entypo } from '@expo/vector-icons';


function InfoPopup({modalVisible,setModalVisible,modalTitle,data}){
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
            <View style={[Theme.align,{width:'100%',justifyContent:'space-between'}]}>
            <Text style={styles.modalText}>{modalTitle}</Text>
            <TouchableOpacity onPress={()=>setModalVisible(false)}>
            <Entypo name="cross" size={30} color="grey" />
            </TouchableOpacity>
            </View>

            <View style={styles.align}>
              {data.map((item,index) => {
              return (
                <View key={index} style={styles.halfItem}>
                  <View
                    style={{
                      height: 15,
                      width: 15,
                      borderRadius: 100,
                      backgroundColor: item.color,
                    }}
                  />
                  <Text style={styles.itemlabel}>{item.label}</Text>
                </View>
              );
                })}
            </View>

            
          </View>
        </View>
      </Modal>
    );}
export default InfoPopup;

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
    padding: 25,
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
    textAlign: "center",
    fontFamily: Theme.MulishBold,
    fontSize: 22,
  },
  align:{
    flexDirection:'row',
    flexWrap:'wrap',
  },
  halfItem:{
    width:'50%',
    flexDirection:'row',
    alignItems:'center',
    marginTop:25,
    paddingHorizontal:5,
  },
  itemlabel:{
    fontFamily:Theme.MulishRegular,
    marginLeft:5,
    fontSize:16
  }
});