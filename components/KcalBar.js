import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Theme from '../src/Theme';
import Space from './Space';
import LineBar from './LineBar';

const KcalBar = ({value ,color,maxVal}) => {
    const max = maxVal ? maxVal : 1500;
    const percentage = (value / max) * 100;
  
  return (
    <View>
      <View style={[Theme.align, { justifyContent: "space-between" }]}>
        <Text style={styles.values}>0</Text>
        <Text style={styles.values}>{max}Kcal</Text>
      </View>
      <View style={styles.container}>
        <View
          style={[
            styles.progress,
            {
              width: `${percentage}%`,
              backgroundColor: color ? color : Theme.greenColor,
            },
          ]}
        />
      </View>
      <Space space={25} />
      <View style={{ alignItems: "center" }}>
        <Text style={styles.values}>Today</Text>
        <View style={Theme.align}>
          <Text style={styles.label}>
            <Text
              style={[
                styles.number,
                { color: color ? color : Theme.greenColor },
              ]}
            >
              {value}
            </Text>{" "}
            Calories
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 23,
    width: '100%',
    backgroundColor: '#f7f7f7',
    borderRadius: 100,
    overflow: 'hidden',
  },
  progress: {
    height: '100%',
    backgroundColor: Theme.greenColor,
  },
  label: {
    fontSize:16,
    fontFamily:Theme.MulishRegular,
  },
  values:{
    color:Theme.lightTextcolor,
    fontSize:16,
    fontFamily:Theme.MulishRegular,
    marginBottom:10
  },
  number:{
    color:Theme.greenColor,
    fontSize:45,
    fontFamily:Theme.MulishBold
  }
});

export default KcalBar;
