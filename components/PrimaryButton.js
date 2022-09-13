import { Pressable, StyleSheet, Text, View } from "react-native";
import Color from "../constants/Color";

const PrimaryButton = ({ children, onPress }) => {
  return (
    <View style={styles.buttonOuterContainer} >
      <Pressable style={styles.buttonInnerContainer} android_ripple={{ color: Color.accent700 }} onPress={onPress} >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 8,
    overflow: 'hidden',
    backgroundColor: Color.accent500,
    borderRadius: 4,
  },
  buttonInnerContainer: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  buttonText: {
    fontSize: 18,
    color: Color.primary,
    textAlign: 'center',
    fontFamily: 'open-sans',
  }
})

export default PrimaryButton;