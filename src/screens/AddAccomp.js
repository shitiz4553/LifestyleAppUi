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
import DeleteModal from "../../components/DeleteModal";

function AddAccomp({navigation}){
    const [modalVisible, setModalVisible] = useState(false);
    return (
      <SafeAreaView style={styles.container}>
        <HeaderWithIcons
          handlePressTwo={() => setModalVisible(true)}
          iconTwo={"trash"}
          title={"Accomplishments"}
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

        <DeleteModal
          modalTitle={"Delete Entry"}
          modalMessage={"Current Entry will be permanently deleted. Confirm to proceed"}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />

        
      </SafeAreaView>
    );}
export default AddAccomp;

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
  
});