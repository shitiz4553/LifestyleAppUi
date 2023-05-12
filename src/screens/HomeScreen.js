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
import QuoteOfDay from "../../components/QuoteOfDay";
import Space from "../../components/Space";
import TodoItem from "../../components/TodoItem";
import { todos } from "../../Data";

function HomeScreen({navigation}){
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
            <Text style={styles.welcome}>Welcome Back, Zobiah Adil!</Text>
            <Space space={25} />
            <QuoteOfDay
              quote={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi."
              }
            />
            <Space space={25} />

            <View style={styles.titleHolder}>
              <Text style={styles.todo}>To-do List</Text>
              <TouchableOpacity>
                <Text style={styles.edit}>Edit</Text>
              </TouchableOpacity>
            </View>
            <Space space={15} />

            {todos.map((item, index) => {
              return (
                <TodoItem
                  key={index}
                  done={item.done}
                  label={item.todoTitle}
                  fav={item.fav}
                />
              );
            })}
          </ScrollView>
        </View>
      </SafeAreaView>
    );}
export default HomeScreen;

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
    titleHolder:{
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    todo:{
        fontFamily:Theme.MulishBold,
        fontSize:17
    },
    edit:{
        fontFamily:Theme.MulishBold,
        fontSize:16,
        color:"#BDBDD7"
    }
});