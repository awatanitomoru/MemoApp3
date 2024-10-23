import {
    Text, StyleSheet, TouchableOpacity,
    type ViewStyle
} from "react-native"

interface Props {
    children: JSX.Element
    style?: ViewStyle
    OnPress?: () => void
}

const CircleButton = (props: Props): JSX.Element => {
    const { children, style, OnPress } = props
    return (
        <TouchableOpacity style={[styles.circleButton, style]} onPress={OnPress}>
            <Text style={styles.circleButtonLavel}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    circleButton: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#76F8AC',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 40,
        bottom: 40,
        shadowColor: '#000000',
        shadowOpacity: 0.25,
        shadowRadius: 8,
        shadowOffset: {width: 0, height: 8},
        elevation: 8
    },
    circleButtonLavel: {
        color: '#000000',
        fontSize: 40,
        lineHeight: 48
    }
})

export default CircleButton
