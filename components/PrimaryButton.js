import { Pressable, StyleSheet, Text, View } from "react-native";

const PrimaryButton = ({ title }) => {
  return (
    <View style={styles.buttonOuterContainer} >
          <Pressable style={styles.buttonInnerContainer} android_ripple={{ color: '#DDDBDD'}}>
        <Text style={styles.buttonText}>{title}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
    buttonOuterContainer: {
        margin: 8,
        overflow: 'hidden',
        backgroundColor: '#FEF9FF',
        borderRadius: 4,
    },
    buttonInnerContainer : {
        paddingVertical: 4,
        paddingHorizontal: 10,
    },
    buttonText : {
        fontSize: 16,
        color: '#736CED',
        textAlign: 'center',
    }
})

export default PrimaryButton;
