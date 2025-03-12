import { Button } from '@/app/components/common/Button/Button';
import Entypo from '@expo/vector-icons/Entypo';
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AnimatedCircularProgress } from 'react-native-circular-progress';

export const DailyTracker = () => {

    return (
        <View style={styles.container}>
            <View style={styles.infoContainer}>
                <Text style={styles.trackerText}>Your Today's Task Is Almost Done</Text> 
                <Entypo name="dots-three-horizontal" size={24} style={styles.icon} color="white" />
            </View>
            
            <View style={styles.progressContainer}>
                {/* Progress Wheel */}
                <AnimatedCircularProgress
                    size={80}
                    width={10}
                    fill={75}
                    tintColor="#0073e6"
                    onAnimationComplete={() => console.log('onAnimationComplete')}
                    backgroundColor="#3d5875" 
                />

                <Button content='View Task' btnStyle={styles.btn}></Button>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 15,
      backgroundColor: '#5928ed',
      borderRadius: 20,
      padding: 16
    },
    icon : {

    },

    btn: {
        color: '#5928ed',
        backgroundColor: '#fff',
        padding: 9,
        borderRadius: 10
    },
    progressContainer: {
        flex: 3,

    },
    infoContainer:{
        flex: 1,
        flexDirection: 'row'
    }, 
    trackerText: {
        width: 175,
        color: '#fff'
    }

  });
  