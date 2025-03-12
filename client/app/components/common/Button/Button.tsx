import { TouchableOpacity, View, Text, StyleProp, ViewStyle } from "react-native"

interface IButton {
    content: string,
    btnStyle?: StyleProp<ViewStyle> | undefined
}

export const Button = (props: IButton) => {
    const {content, btnStyle} = props;
    return (
        <TouchableOpacity onPress={() => {/* do this */}}>
            <View style={btnStyle}
            >
                <Text>{content}</Text>
            </View>
        </TouchableOpacity>
        )
}