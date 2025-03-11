import Entypo from '@expo/vector-icons/Entypo';
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export const DailyTracker = () => {

    return (
        <View style={styles.container}>
            <Text>Your Today's Task Is Almost Done</Text> 
            <Entypo name="dots-three-horizontal" size={24} style={styles.icon} color="black" />
            {/* Progress Wheel */}
            <Button title='View Task' />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 15,
    },
    icon : {

    },

    btn: {

    },

  });
  