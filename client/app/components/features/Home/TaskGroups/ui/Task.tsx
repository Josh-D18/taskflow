import {  View, Text, Image, TouchableOpacity  } from "react-native"
import * as Progress from 'react-native-progress';

interface ITask {
    title: string;
    amountOfTasks: number;
    completionPercentage: number;
}

const Task = (props: ITask) => {
    const { title, amountOfTasks, completionPercentage} = props;
    const onPress = () => {}
    
    return (
        <TouchableOpacity onPress={onPress}>
            <View className="flex bg-white mb-5 rounded-[15px] p-5 flex-row w-full items-center justify-evenly h-[115px]">
                <Image
                    source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
                    style={{ width: 45, height: 45, borderRadius: 999 }}
                />
                
                <View className="self-center mt-2 w-[170px]">
                    <Text className="text-wrap px-2 text-[14px] pb-2">{title}</Text>
                    <Text className="text-wrap px-2 text-[12px]">{amountOfTasks} Tasks</Text>
                </View>
                <Progress.Circle size={50} progress={completionPercentage} showsText borderColor="white"/>
            </View>
        </TouchableOpacity>
    )
}

export default Task;