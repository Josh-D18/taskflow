import { TouchableOpacity, View, Text, GestureResponderEvent } from "react-native";
import { ButtonProps } from "react-native";

interface IButton extends ButtonProps {
  btnStyle?: string;
  clickFn?:  ((event: GestureResponderEvent) => void) | undefined
}

type CustomButton = Partial<IButton>;

const Button: React.FC<CustomButton> = ({  btnStyle, title, clickFn, ...rest }) => {
  return (
    <TouchableOpacity {...rest} onPress={clickFn}>
        <Text className={btnStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
