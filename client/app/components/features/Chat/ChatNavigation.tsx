import { GestureResponderEvent, View} from "react-native";
import Button from "../../common/Button/Button";
import { useRef, useState } from "react";
import DisplayChat from "./ui/DisplayChat/DisplayChat";


const ChatNavigation = () => {
    const [chatBtnOne, setChatBtnOne] = useState<boolean>(true);
    const [chatBtnTwo, setChatBtnTwo] = useState<boolean>(false);
    const [selectedTitle, setSelectedTitle] = useState<string>("Chat")

    const handleClick = (event: GestureResponderEvent, title: string): void =>  {
       event.persist() 
       
        if(title !== selectedTitle){
            setSelectedTitle(title)
        }

        if(title === "Chat"){
            setChatBtnOne(true);
            setChatBtnTwo(false);
        }  else if(title === "Groups"){
            setChatBtnOne(false);
            setChatBtnTwo(true);
        } 
        
    }

    return (
        <View>
            <View className="flex-1 flex-row justify-evenly mb-[130px]">
                <Button title="Chat" btnStyle={`w-[150px] h-[60px] bg-[#6c38d4] px-4 pt-6 text-white text-center ${chatBtnOne ? 'bg-black' : ''}`} clickFn={(event) => handleClick(event, "Chat")}></Button>
                <Button title="Groups" btnStyle={`w-[150px] h-[60px] bg-[#2b34c1] px-4 pt-6 text-white text-center ${chatBtnTwo ? 'bg-black' : ''}`} clickFn={(event) => handleClick(event, "Groups")}></Button>
            </View>

            <View className="mx-4">
                <DisplayChat isGroup={chatBtnOne} isDirect={chatBtnTwo} />
            </View>
        </View>
    )
}

export default ChatNavigation;