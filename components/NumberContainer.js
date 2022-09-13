import { StyleSheet, Text, View } from "react-native";
import Color from "../constants/Color";

const NumberContainer = ({ children }) => {
    return <View style={styles.container}>
        <Text style={styles.text}>
            {children}
        </Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.primary,
        padding: 20,
        borderRadius: 4,
        marginVertical: 10
    },
    text: {
        textAlign: 'center',
        color: Color.accent500,
        fontSize: 20,
    },
})

export default NumberContainer;