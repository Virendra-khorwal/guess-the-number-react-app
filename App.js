
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import { useState } from 'react';
import Color from './constants/Color';

export default function App() {

  const [pickedNumber, setPickedNumber] = useState();

  const onPickedHumberHandler = (enteredNumber) => {
    setPickedNumber(enteredNumber)
  }

  let screens = <StartGameScreen onPicked={onPickedHumberHandler} />

  if (pickedNumber) screens = <GameScreen />

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
