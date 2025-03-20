import { GestureResponderEvent, View} from "react-native";
import Button from "../../common/Button/Button";
import { useState } from "react";
import DisplayChat from "./ui/DisplayChat/DisplayChat";


const ChatNavigation = () => {
    const [messageType, setMessageType] = useState<boolean>(false);

    const handleClick = (event: GestureResponderEvent): void =>  {
        event.persist();
        setMessageType(!messageType)
    }

    return (
        <View>
            <View className="flex-1 flex-row justify-evenly mb-[130px]">
                <Button title="Chat" btnStyle={`w-[150px] h-[60px] bg-[#6c38d4] px-4 py-5 text-white text-center ${!messageType ? 'bg-black' : ''}`} clickFn={handleClick}></Button>
                <Button title="Groups" btnStyle={`w-[150px] h-[60px] bg-[#2b34c1] px-4 py-5 text-white text-center ${messageType ? 'bg-black' : ''}`} clickFn={handleClick}></Button>
            </View>

            <View className="mx-4">
                <DisplayChat isGroup={messageType} />
            </View>
        </View>
    )
}

export default ChatNavigation;