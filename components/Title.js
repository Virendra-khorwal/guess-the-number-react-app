import { StyleSheet, Text } from "react-native"
import Color from "../constants/Color"

const Title = ({children}) => {
    return <Text style={styles.title}>{children}</Text>
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold',
        color: Color.primary,
        borderWidth: 2,
        borderColor: Color.primary,
        padding: 12,
        borderRadius: 4
    }
})

export default Title