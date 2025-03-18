import Button from "@/app/components/common/Button/Button";
import React from "react";
import { View, Text } from "react-native";
import * as Progress from 'react-native-progress';


const DailyTracker = () => {
  return (
    <View className="bg-purple-700 rounded-[40px] px-4 flex-row mt-6 justify-around items-center py-9">
      <View className="w-[215px] self-start p-3">
        <Text className="text-white pb-6">You Have 2 Group Tasks That Are Almost Complete</Text>
        <Button title="View Groups" btnStyle="bg-white text-purple-700 p-3 rounded-lg text-center flex-1 flex-row items-center w-full h-[40px]"/>
      </View>

      <View className="flex-2 self-center">
        <Progress.Circle size={85} progress={0.6} showsText unfilledColor="#0073e6" color="white" borderColor="#6b46c1" />
      </View>
    </View>
  );
};

export default DailyTracker;
