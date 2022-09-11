import PrimaryButton from "../components/PrimaryButton";

const { View, TextInput, StyleSheet } = require("react-native");

const StartGameScreen = () => {
    return (
        <View style={styles.inputContainer} >
            <TextInput style={styles.numberInput} maxLength={2} keyboardType='number-pad' />
            <View style={styles.buttonsContainer}>
                <PrimaryButton title="Reset" />
                <PrimaryButton title="Confirm" />
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        padding: 16,
        marginTop: 100,
        backgroundColor: '#736CED',
        marginHorizontal: 30,
        borderRadius: 4,
        elevation: 6,
        alignItems: 'center',
    },
    numberInput: {
        width: 50,
        height: 40,
        borderBottomWidth: 2,
        borderBottomColor: '#FEF9FF',
        color: '#FEF9FF',
        fontSize: 20,
        textAlign: 'center'

    },
    buttonsContainer : {
        flexDirection: 'row',
        marginTop: 10,
    }
})

export default StartGameScreen;
