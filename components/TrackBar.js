import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Theme from '../src/Theme';
import Space from './Space';
import LineBar from './LineBar';

const TrackBar = ({ hours,minutes,maxvalue ,color}) => {
    const totalMinutes = hours * 60 + minutes;
    const maxMinutes = maxvalue ? maxvalue * 60 : 8 * 60;
    const percentage = (totalMinutes / maxMinutes) * 100;
  
  return (
    <View>
      <View style={[Theme.align, { justifyContent: "space-between" }]}>
        <Text style={styles.values}>0h</Text>
        <Text style={styles.values}>{maxvalue ? maxvalue : 8}h</Text>
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
              {hours}
            </Text>{" "}
            hours
          </Text>
          <Text style={[styles.label, { marginLeft: 25 }]}>
            <Text
              style={[
                styles.number,
                { color: color ? color : Theme.greenColor },
              ]}
            >
              {minutes}
            </Text>{" "}
            minutes
          </Text>
        </View>
      </View>
      <LineBar margin={25} />
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

export default TrackBar;
