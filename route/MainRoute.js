import * as React from 'react';
import {StyleSheet,Platform,Text} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../src/screens/ProfileScreen'
import HomeScreen from '../src/screens/HomeScreen'
import ToolsScreen from '../src/screens/ToolsScreen'
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Theme from '../src/Theme';
import LoginScreen from '../src/screens/LoginScreen';
import GratitudeList from '../src/screens/GratitudeList';
import AddGratitude from '../src/screens/AddGratitude';
import HabbitTracker from '../src/screens/HabbitTracker';
import Accomplishments from '../src/screens/Accomplishments';
import AddAccomp from '../src/screens/AddAccomp';
import SleepTracker from '../src/screens/TrackerScreens/SleepTracker';
import HabitGrid from '../src/screens/TrackerScreens/HabitGrid';
import ExcerciseTracker from '../src/screens/TrackerScreens/ExcerciseTracker';
import WaterTracker from '../src/screens/TrackerScreens/WaterTracker';
import FoodTracker from '../src/screens/TrackerScreens/FoodTracker';
import DietLog from '../src/screens/DietLog';
import AddDietLog from '../src/screens/AddDietLog';
import MoodTracker from '../src/screens/TrackerScreens/MoodTracker';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const activeIconColor = Theme.primaryColor;
const inactiveIconColor = '#1B0C38';



export default function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerMode: "none" }}
          name="LoginScreen"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ headerMode: "none" }}
          name="MainRoute"
          component={MainRoute}
        />
        <Stack.Screen
          options={{ headerMode: "none" }}
          name="GratitudeList"
          component={GratitudeList}
        />
        <Stack.Screen
          options={{ headerMode: "none" }}
          name="AddGratitude"
          component={AddGratitude}
        />
        <Stack.Screen
          options={{ headerMode: "none" }}
          name="HabbitTracker"
          component={HabbitTracker}
        />
        <Stack.Screen
          options={{ headerMode: "none" }}
          name="Accomplishments"
          component={Accomplishments}
        />
        <Stack.Screen
          options={{ headerMode: "none" }}
          name="AddAccomp"
          component={AddAccomp}
        />
        <Stack.Screen
          options={{ headerMode: "none" }}
          name="SleepTracker"
          component={SleepTracker}
        />
        <Stack.Screen
          options={{ headerMode: "none" }}
          name="HabitGrid"
          component={HabitGrid}
        />
        <Stack.Screen
          options={{ headerMode: "none" }}
          name="ExcerciseTracker"
          component={ExcerciseTracker}
        />
        <Stack.Screen
          options={{ headerMode: "none" }}
          name="WaterTracker"
          component={WaterTracker}
        />
        <Stack.Screen
          options={{ headerMode: "none" }}
          name="FoodTracker"
          component={FoodTracker}
        />
        <Stack.Screen
          options={{ headerMode: "none" }}
          name="DietLog"
          component={DietLog}
        />
        <Stack.Screen
          options={{ headerMode: "none" }}
          name="AddDietLog"
          component={AddDietLog}
        />
        <Stack.Screen
          options={{ headerMode: "none" }}
          name="MoodTracker"
          component={MoodTracker}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


function MainRoute() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconSource;
            let iconColor;

            switch (route.name) {
              case "Home":
                iconSource = "home-sharp";
                break;
              case "Tools":
                iconSource = "md-document-text";
                break;
              case "Profile":
                iconSource = "person";
                break;
            }

            if (focused) {
              iconColor = activeIconColor;
            } else {
              iconColor = inactiveIconColor;
            }

            return <Ionicons name={iconSource} size={24} color={iconColor} />;
          },
          tabBarStyle: [styles.tabbarstyle],
          tabBarActiveTintColor: Theme.primaryColor,
          tabBarInactiveTintColor: "#1B0C38",
          tabBarLabelStyle:{
            fontSize:14,
            padding:0,
            margin:0,
            fontFamily:Theme.MulishRegular,
            marginBottom:Platform.OS=='android' ? 10 : 0
          }
        })}
      >
        <Tab.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{ headerShown: false }}
          name="Tools"
          component={ToolsScreen}
        />
        <Tab.Screen
          options={{ headerShown: false }}
          name="Profile"
          component={ProfileScreen}
        />
      </Tab.Navigator>
    );
}

const styles= StyleSheet.create({
    tabbarstyle:{
    height: Platform.OS === 'ios' ? 95 : 75, // set the height based on the platform
    borderTopWidth: 0.5, // add a border to the top of the tab bar
    borderTopColor: '#E0E0E0',
    backgroundColor: '#FFFFFF', // set a background color for the tab bar
    paddingVertical: Platform.OS === 'ios' ? 20 : 0 // add extra padding for iOS to account for the notch
    },
})