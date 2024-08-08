import { View, Text, StyleSheet } from "react-native";

export default function Content(){
    return (
        <View style={styles.content}>
            <Text>Header OK</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 5,
        backgroundColor: "blue",
        justifyContent: 'center',
        alignItems: 'center'
    }
})