import { View, Text, Image, TouchableOpacity, GestureResponderEvent } from "react-native";

interface IChatBox{
    content: string;
    username: string;
    avatar: string;
}

const ChatBox = (props: IChatBox) => {
    const {content, username, avatar} = props;

    const handleClick = (event: GestureResponderEvent): void => {
        console.log("Click")
    }

    return (
        <TouchableOpacity onPress={handleClick} className="mb-6">
          <View className="flex-1 flex-row">  
                <Image source={{uri: avatar}} className="w-[60px] bg-black h-[60px] rounded-full" />
                
                <View className="mb-6 ml-1 inline-block w-[200px] ml-4">
                    <Text className="text-[15px] font-semibold pb-1">{username}</Text>
                    <Text className="text-[13px] line-clamp-1">{content}</Text>
                </View>
                
                <Text className="text-[9px] ml-3">31 mins ago</Text>
            </View>    
        </TouchableOpacity>
    )
}

export default ChatBox;