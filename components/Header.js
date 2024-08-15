import { View, Text, StyleSheet } from "react-native";
import { Image } from 'expo-image'

export default function Header(){
    return(
        <View style={styles.header}>
            <View style={styles.user}>
              <Image 
                style={styles.avatar} 
                source="https://images.jota.info/wp-content/uploads/2015/06/neymar-brazil-wallpaper-confederations-cup-2013.jpg" />
              <Text style={styles.name}>NJR</Text>
            </View>
            
        <Text>Menu</Text>
      </View>
    )
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    // backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15
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
    fontSize: 18
  }
})