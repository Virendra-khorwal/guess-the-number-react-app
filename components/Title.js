import { StyleSheet, Text } from "react-native"
import Color from "../constants/Color"

const Title = ({children, style}) => {
    return <Text style={{...styles.title, ...style
    }}>{children}</Text>
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        textAlign: 'center',
        fontFamily: 'open-sans-bold',
        color: Color.primary,
        borderWidth: 2,
        borderColor: Color.primary,
        padding: 12,
        borderRadius: 4,
        marginTop: 10,

    }
})

export default Title