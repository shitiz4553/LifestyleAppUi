import 'react-native-gesture-handler';
import { ActivityIndicator,View } from "react-native";
import MainRoute from "./route/MainRoute";
import { useFonts } from 'expo-font';

export default function App() {

  let [fontsLoaded] = useFonts({
    PFBlack: require('./assets/PlayfairDisplay-ExtraBold.ttf'),
    PFRegular: require('./assets/PlayfairDisplay-Regular.ttf'),
    PFSemi: require('./assets/PlayfairDisplay-SemiBold.ttf'),
    MulishBlack: require('./assets/Mulish-Black.ttf'),
    MulishBold: require('./assets/Mulish-Bold.ttf'),
    MulishRegular: require('./assets/Mulish-Medium.ttf'),
  });


  if (!fontsLoaded) {
    return (
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <ActivityIndicator color={'black'} size={'large'}/>
      </View>
    );
  } 

  else {
    return (
      <MainRoute/>
    );
  }
}


