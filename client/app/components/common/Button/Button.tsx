import { TouchableOpacity, View, Text } from "react-native";
import { ButtonProps } from "react-native";

interface IButton extends ButtonProps {
  btnStyle?: string;
}

type CustomButton = Partial<IButton>;

const Button: React.FC<CustomButton> = ({  btnStyle, title, ...rest }) => {
  return (
    <TouchableOpacity {...rest}>
        <Text className={btnStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
