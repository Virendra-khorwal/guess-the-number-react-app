import { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import Color from "../constants/Color";
import Title from '../components/Title'

const { View, TextInput, StyleSheet, Alert, Text, useWindowDimensions } = require("react-native");

const StartGameScreen = ({ onPicked }) => {
    const [enteredNumber, setEnteredNumber] = useState('');
    const { width, height} = useWindowDimensions(); // whenever orientation changes it update the height and width.

    const resetInputHandler = () => {
        setEnteredNumber('')
    }

    const confirmHandler = () => {
        const chosenNumber = parseInt(enteredNumber)
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid Number', 'Enter a valid number between 0 to 99', [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]);
            return
        }

        onPicked(chosenNumber)
    }

    const marginTopDistance = height < 400 ? 30 : 100; 


    return (
        <View style={[styles.screenContainer, {marginTop: marginTopDistance}]}>
            <Title>Guess the Number</Title>
            <View style={styles.inputContainer} >
                <Text style={styles.textContainer}>Enter the number</Text>
                <TextInput style={styles.numberInput} maxLength={2} keyboardType='number-pad' value={enteredNumber} onChangeText={(enteredNumber) => setEnteredNumber(enteredNumber)} />
                <View style={styles.buttonsContainer}>
                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                    <PrimaryButton onPress={confirmHandler} >Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        marginTop: 100,
        marginHorizontal: 30,
    },
    inputContainer: {
        padding: 16,
        marginTop: 30,
        backgroundColor: Color.primary,
        
        borderRadius: 4,
        elevation: 6,
        alignItems: 'center',
    },
    textContainer: {
        color: Color.accent500,
        fontSize: 20,
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
    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 10,

    }
})

export default StartGameScreen;
