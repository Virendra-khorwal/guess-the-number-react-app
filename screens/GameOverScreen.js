import { View, Text, Image, StyleSheet } from "react-native"
import Title from '../components/Title'

const GameOverScreen = () => {
    return <View style={styles.screen}>
        <Title>Game Over</Title>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('../assets/images/success.png')} />
        </View>
    </View>
}

const styles = StyleSheet.create({
    screen: {
        marginTop: 100,
        padding: 20,
        flex:1,
        alignItems: 'center',
    },
    imageContainer: {
        height: 300,
        width:300,
    },
    image: {
        width: '100%',
        height:'100%',
    }
})

export default GameOverScreen;