import { View, Text, Image, TouchableOpacity, GestureResponderEvent } from "react-native";


interface INotification {
    id?: string, 
    title: string, 
    lastReceived: string, 
    icon: string,
    description: string
}

const DisplayNotification = (notification: INotification) => {
    const { title, lastReceived, icon, description} = notification
    return (
        <View className="flex-1 flex-row pb-5 justify-evenly">
            <Image source={{uri: icon}} className="w-[45px] bg-black h-[45px] rounded-full" />
            <View className="pt-3 pl-2 w-[250px]">
                <Text className="text-[13px]">{title}</Text>
                <Text className="">{description}</Text>
            </View>
            <Text className="text-[9px] pt-5">{lastReceived}</Text>
        </View>
    )
}

export default DisplayNotification