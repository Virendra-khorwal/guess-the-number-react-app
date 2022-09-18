import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import Color from "../constants/Color";

const GameOverScreen = ({ rounds, userNumber, onRestartGame }) => {
  return (
  <ScrollView>
    <View style={styles.screen}>
      <Title>Game Over</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.textContainer}>
        Your phone needed <Text style={styles.highlight}>{rounds}</Text> rounds
        to guess <Text style={styles.highlight}>{userNumber}</Text>
      </Text>
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={onRestartGame}>
          Start From Beginning
        </PrimaryButton>
      </View>
    </View>
  </ScrollView>);
};

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  screen: {
    marginTop: 100,
    padding: 20,
    flex: 1,
    alignItems: "center",
  },
  imageContainer: {
    height: deviceWidth < 380 ? 150 : 300,
    width: deviceWidth < 380 ? 150 : 300,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    fontFamily: "open-sans",
    fontSize: 26,
    color: Color.accent500,
    textAlign: "center",
  },
  highlight: {
    fontFamily: "open-sans-bold",
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default GameOverScreen;
