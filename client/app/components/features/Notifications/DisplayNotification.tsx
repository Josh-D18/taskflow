import { View, Text, Image, TouchableOpacity, GestureResponderEvent } from "react-native";


interface INotification {
    id?: string, 
    title: string, 
    lastReceived: string, 
    icon: string,
    group: string
}

const DisplayNotification = (notification: INotification) => {
    const { title, lastReceived, icon, group} = notification
    return (
        <View className="flex-1 flex-row">
            <Image source={{uri: icon}} className="w-[60px] bg-black h-[60px] rounded-full" />
            <View>
                <Text>{title}</Text>
                <Text>{group}</Text>
            </View>
            <Text>{lastReceived}</Text>
        </View>
    )
}

export default DisplayNotification