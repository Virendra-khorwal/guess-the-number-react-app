import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert, FlatList } from "react-native";
import Title from '../components/Title';
import NumberContainer from '../components/NumberContainer';
import Color from '../constants/Color';
import PrimaryButton from '../components/PrimaryButton';
import { Ionicons } from '@expo/vector-icons'

const generateRandomNumber = (min, max, exclude) => {
    const randomNum = Math.floor(Math.random() * (max - min)) + min;

    if (randomNum === exclude) {
        return generateRandomNumber(min, max, exclude);
    }

    return randomNum;
}

let minBoundary = 1;
let maxBoundary = 100

const GameScreen = ({ userNumber, onGameOver, onRounds }) => {
    const initialGuess = generateRandomNumber(1, 100, userNumber)
    const [currGuess, setCurrGuess] = useState(initialGuess)
    const [botGuesses, setBotGuesses] = useState([])

    useEffect(() => {
        setBotGuesses((prevGuess) => [...prevGuess, currGuess])
        if (userNumber === currGuess) {
            onGameOver();
            maxBoundary = 100;
            minBoundary = 1;
        }
    }, [currGuess, userNumber, onGameOver])

    const nextGuessHandler = (direction) => {
        onRounds()
        if ((direction === 'lower' && currGuess < userNumber) || direction === 'higher' && currGuess > userNumber) {
            Alert.alert("Don't lie!🚨", "You know this is wrong... 🚩⛔❌", [{ text: 'Sorry', style: 'cancel' }])
            return
        }
        if (direction === 'lower') {
            maxBoundary = currGuess;
        }
        else if (direction === 'higher') {
            minBoundary = currGuess + 1
        }
        const newRandom = generateRandomNumber(minBoundary, maxBoundary, currGuess);
        setCurrGuess(newRandom);

    }

    return <View style={styles.screen}>
        <Title >Opponent's Guess</Title>
        <NumberContainer>{currGuess}</NumberContainer>
        <View style={styles.viewContainer}>
            <Text style={styles.textContainer}>Higher or Lower</Text>
            <View style={styles.buttonContainer}>
                <PrimaryButton onPress={() => nextGuessHandler('higher')}>
                    <Ionicons name='add' size={20} />
                </PrimaryButton>
                <PrimaryButton onPress={() => nextGuessHandler('lower')}>
                    <Ionicons name='remove' size={20} />
                </PrimaryButton>
            </View>
        </View>
        <FlatList style={styles.listContainer} data={botGuesses} renderItem={(item) =>
            <Title style={styles.titleContainer} >{item.item}</Title>
        } />

    </View>
}

const styles = StyleSheet.create({
    screen: {
        padding: 24,
        paddingVertical: 40,
        flex: 1
    },
    viewContainer: {
        backgroundColor: Color.primary,
        padding: 24,
        borderRadius: 4,
    },
    listContainer: {
        marginTop: 20,
        paddingHorizontal: 10
    },
    textContainer: {
        color: Color.accent500,
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'open-sans'
    },
    buttonContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
    },
    titleContainer: {
        color: Color.accent500,
        borderColor: Color.accent500
    }

})

export default GameScreen;