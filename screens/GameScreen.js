import {useState} from 'react';
import { View, Text, StyleSheet } from "react-native";
import Title from '../components/Title';
import NumberContainer from '../components/NumberContainer';
import PrimaryButton from '../components/PrimaryButton';

const generateRandomNumber = (min, max, exclude) => {
    const randomNum = Math.floor(Math.random() * (max - min)) + min;

    if (randomNum === exclude) {
        return generateRandomNumber(min, max, exclude);
    }
    return randomNum;
}

let minBoundary = 1;
let maxBoundary = 100

const GameScreen = ({userNumber}) => {
    const initialGuess = generateRandomNumber(minBoundary, maxBoundary, userNumber)
    const [currGuess, setCurrGuess] = useState(initialGuess)

    const nextGuessHandler = (direction) => {
        if(direction==='lower'){
            maxBoundary = currGuess;
        }
        else if (direction==='higher'){
            minBoundary = currGuess+1
        }
        const newRandom = generateRandomNumber(minBoundary, maxBoundary, currGuess);
        setCurrGuess(newRandom);
    }

    return <View style={styles.screen}>
        <Title>Opponent's Guess</Title>
        <NumberContainer>{currGuess}</NumberContainer>
        <View >
            <Text>
                Higher or lower
            </Text>
            <View style={styles.buttonContainer}>
                <PrimaryButton onPress={() => nextGuessHandler('higher')}>+</PrimaryButton>
                <PrimaryButton onPress={() => nextGuessHandler('lower')}>-</PrimaryButton>
            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    screen: {
        padding: 24,
        paddingVertical: 40,
        flex: 1
    },
    buttonContainer: {
        flex: 1,

    }


})

export default GameScreen;