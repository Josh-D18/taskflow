import { RefObject } from "react";
import { TouchableOpacity, View, Text, GestureResponderEvent } from "react-native";
import { ButtonProps } from "react-native";

interface IButton extends ButtonProps {
  btnStyle?: string | undefined;
  clickFn?:  ((event: GestureResponderEvent) => void) | undefined
  textRef?: React.RefObject<Text> | undefined
}

type CustomButton = Partial<IButton>;

const Button: React.FC<CustomButton> = ({  btnStyle, title, clickFn, textRef, ...rest }) => {
  return (
    <TouchableOpacity {...rest} onPress={clickFn}>
        <Text ref={textRef} className={btnStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
