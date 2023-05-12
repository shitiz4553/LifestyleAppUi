import React, { useState } from "react";
import { 
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Modal
} from "react-native";
import Theme from "../Theme";
import HeaderWithIcons from "../../components/HeaderWithIcons";
import Space from "../../components/Space";
import { Ionicons } from '@expo/vector-icons';
import FullButton from "../../components/FullButton";
import FullButtonStroke from "../../components/FullButtonStroke";

function AddGratitude({navigation}){
    const [modalVisible, setModalVisible] = useState(false);
    return (
      <SafeAreaView style={styles.container}>
        <HeaderWithIcons
          handlePressTwo={() => setModalVisible(true)}
          iconTwo={"trash"}
          title={"Gratitude List"}
        />
        <View style={styles.body}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={[Theme.align, { justifyContent: "space-between" }]}>
              <TouchableOpacity>
                <Text style={styles.maintext}>Pick Date</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons name="star" size={24} color="#FFD56B" />
              </TouchableOpacity>
            </View>
            <Space space={25} />
            <TextInput
              style={styles.input}
              placeholder="Type your details here"
              multiline={true}
            />
          </ScrollView>
          <FullButton
            handlePress={() => navigation.goBack()}
            color={Theme.primaryColor}
            label={"Save"}
          />
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Delete Entry</Text>
              <Text style={styles.modalSubText}>
                Current entry will be permanently deleted. Confirm to proceed
              </Text>
              <View style={[Theme.align,{justifyContent:'space-between',width:'100%'}]}>
                <View style={{ width: "48%" }}>
                  <FullButtonStroke color={Theme.primaryColor} label={"Confirm"} />
                </View>
                <View style={{ width: "48%" }}>
                  <FullButton
                  handlePress={()=>setModalVisible(false)}
                  color={Theme.primaryColor} label={"Cancel"} />
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    );}
export default AddGratitude;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:Theme.backgroundColor
    },
    body:{
        flex:7,
        paddingHorizontal:20,
        paddingBottom:10
    },
    maintext:{
        fontSize:45,
        fontFamily:Theme.PFRegular,
        color:Theme.secondaryColor
    },
    input:{
        fontFamily:Theme.MulishBold,
        fontSize:18
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'rgba(0,0,0,0.5)'
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width:350
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontFamily:Theme.MulishBold,
        fontSize:22
      },
      modalSubText:{
        textAlign: 'center',
        fontFamily:Theme.MulishRegular,
        fontSize:16,
        marginBottom: 45,
      }
});