import { View, Text, StyleSheet} from 'react-native'
import { Image } from 'expo-image'
import Ionicons from '@expo/vector-icons/Ionicons'

export default function Header(){
    return (
        <View style={styles.header}>
            <View style={styles.user}>
                <Image 
                    style={styles.avatar}
                    source={require('../assets/Ricardologo.jpg')} //Local
                    //source="https://avatars.githubusercontent.com/u/4259630?v=4"
                />
                <Text style={styles.name}>Ricardo Oliveira</Text>
            </View>
            <Ionicons style={styles.menu} name="menu" size={24} color="black" />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#686888",
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
    },
    user: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    name: {
        fontWeight: '600',
        fontSize: 18,
        textTransform: "uppercase",
        color: "#ffff"
    },
    menu: {
        padding: 10
    }
})