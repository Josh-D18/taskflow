import { GestureResponderEvent, View} from "react-native";
import Button from "../../common/Button/Button";
import { useState } from "react";
import DisplayChat from "./ui/DisplayChat/DisplayChat";


const ChatNavigation = () => {
    const [chatBtnOne, setChatBtnOne] = useState<boolean>(false);
    const [chatBtnTwo, setChatBtnTwo] = useState<boolean>(false);

    const handleClick = (event: GestureResponderEvent): void =>  {
        event.persist();
        console.log(event.target)
    }

    return (
        <View>
            <View className="flex-1 flex-row justify-evenly mb-[130px]">
                <Button title="Chat" btnStyle={`w-[150px] h-[60px] bg-[#6c38d4] px-4 pt-6 text-white text-center ${!chatBtnOne ? 'bg-black' : ''}`} clickFn={handleClick}></Button>
                <Button title="Groups" btnStyle={`w-[150px] h-[60px] bg-[#2b34c1] px-4 pt-6 text-white text-center ${chatBtnTwo ? 'bg-black' : ''}`} clickFn={handleClick}></Button>
            </View>

            <View className="mx-4">
                <DisplayChat isGroup={chatBtnOne} isDirect={chatBtnTwo} />
            </View>
        </View>
    )
}

export default ChatNavigation;