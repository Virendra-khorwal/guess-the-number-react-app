import { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import Color from "../constants/Color";

const { View, TextInput, StyleSheet, Alert } = require("react-native");

const StartGameScreen = ({onPicked}) => {
    const [enteredNumber, setEnteredNumber] = useState('');

    const resetInputHandler = () => {
        setEnteredNumber('')
    }

    const confirmHandler = () => {
        const chosenNumber = parseInt(enteredNumber)
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber >99){
            Alert.alert('Invalid Number', 'Enter a valid number between 0 to 99', [{text: 'Okay', style:'destructive', onPress: resetInputHandler}] );
            return
        }

        onPicked(chosenNumber)
    }


    return (
        <View style={styles.inputContainer} >
            <TextInput style={styles.numberInput} maxLength={2} keyboardType='number-pad' value={enteredNumber} onChangeText={(enteredNumber) => setEnteredNumber(enteredNumber)} />
            <View style={styles.buttonsContainer}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                <PrimaryButton onPress={confirmHandler} >Confirm</PrimaryButton>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        padding: 16,
        marginTop: 100,
        backgroundColor: Color.primary,
        marginHorizontal: 30,
        borderRadius: 4,
        elevation: 6,
        alignItems: 'center',
    },
    numberInput: {
        width: 50,
        height: 40,
        borderBottomWidth: 2,
        borderBottomColor: Color.accent500,
        color: Color.accent500,
        fontSize: 20,
        textAlign: 'center'

    },
    buttonsContainer : {
        flexDirection: 'row',
        marginTop: 10,

    }
})

export default StartGameScreen;
