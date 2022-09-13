
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import { useState,useEffect } from 'react';
import Color from './constants/Color';
import GameOverScreen from './screens/GameOverScreen';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading'

export default function App() {

  const [pickedNumber, setPickedNumber] = useState();
  const [gameOver, setGameOver] = useState(true);
  const [rounds, setRounds] = useState(0);
  const [fontLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })

  if(!fontLoaded){
    return <AppLoading />
  }

  const roundhandler = () =>{
    setRounds((prevValue) => prevValue + 1)
  }

  const gameOverHandler = () => {
    setGameOver(true);
  }
  const onPickedHumberHandler = (enteredNumber) => {
    setPickedNumber(enteredNumber)
    setGameOver(false)
  }

  const restartGameHandler = () => {
    setGameOver(false),
    setPickedNumber(null),
    setRounds(0)
  }

  let screens = <StartGameScreen onPicked={onPickedHumberHandler} />

  

  if (pickedNumber){
    screens = <GameScreen userNumber={pickedNumber} onGameOver={gameOverHandler} onRounds={roundhandler} />
  } 

  if (gameOver && pickedNumber) {
    screens = <GameOverScreen userNumber={pickedNumber} rounds={rounds} onRestartGame={restartGameHandler}/>
  } 

  return (
    <LinearGradient colors={[Color.gdColor1, Color.gdColor2]} style={styles.rootScreen} >
      <ImageBackground source={require('./assets/images/background.png')} style={styles.rootScreen} resizeMode='cover' imageStyle={styles.bgImage}>
        <SafeAreaView style={styles.rootScreen}>
          {screens}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  bgImage: {
    opacity: 0.4
  }
});
