import { TouchableOpacity, View, Text, StyleProp, ViewStyle } from "react-native"

interface IButton {
    content: string,
    btnStyle?: string
}

const Button = (props: IButton) => {
    const {content, btnStyle} = props;
    return (
        <TouchableOpacity onPress={() => {/* do this */}}>
            <View className={btnStyle}
            >
                <Text>{content}</Text>
            </View>
        </TouchableOpacity>
        )
}
export default Button