import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Image,
    ScrollView,
    Platform
} from "react-native";
import Theme from "../Theme";
import assets from '../../assets/assets'
import Space from "../../components/Space";

const habbits = [
    {
        title:'Sleep Tracker',
        color:'#98DAAA',
        navto:'SleepTracker'
    },
    {
        title:'Excerise Tracker',
        color:'#836FA9',
        navto:'ExcerciseTracker'
    },
    {
        title:'Food Tracker',
        color:'#FF6B6B',
    },
    {
        title:'Water Tracker',
        color:'#98A6DA',
        navto:'WaterTracker'
    },
    {
        title:'Habit Grid',
        color:'#5B5B9B',
        navto:'HabitGrid'
    },
]

function HabbitTracker({navigation}){
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.date}>Tuesday 13 June</Text>
          <TouchableOpacity>
            <Image source={assets.jar} style={styles.jar} />
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.welcome}>Habit Tracker</Text>
            <Space space={25} />
            <View style={styles.wrapper}>
              {habbits.map((item, index) => {
                return (
                  <TouchableOpacity
                  onPress={()=>navigation.navigate(item.navto)}
                    style={[styles.rounded,{backgroundColor: item.color}]}
                    key={index}>
                    <Text style={styles.title}>{item.title}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );}
export default HabbitTracker;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:Theme.backgroundColor
    },
    header:{
        flexDirection:'row',
        alignItems: 'center',
        flex:1,
        paddingHorizontal:20,
        justifyContent:'space-between',
        paddingTop:Platform.OS==='android' ? 25 : 0
    },
    body:{
        flex:7,
        paddingHorizontal:20
    },
    date:{
        fontFamily:Theme.MulishBold,
        fontSize:16,
        color:Theme.lightTextcolor
    },
    jar:{
        height:27,
        width:27,
        resizeMode:'contain'
    },
    welcome:{
        fontSize:45,
        fontFamily:Theme.PFRegular,
    },
    wrapper:{
        flexDirection:'row',
        flexWrap:'wrap'
    },
    rounded:{
        borderRadius:15,
        width:'47%',
        height:180,
        marginRight:10,
        marginBottom:10,
        padding:10,
        justifyContent:'flex-end'
    },
    title:{
        color:'#FFF',
        fontFamily:Theme.MulishBold,
        fontSize:15
    }
});