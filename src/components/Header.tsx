import { Image, StyleSheet, View } from "react-native";

import logoImg from '../assets/logo.png';

export function Header() {
    
    return (
        <View style={styles.container}>
            <Image source={logoImg} />

      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      paddingVertical: 60,
      paddingHorizontal: 24,
      backgroundColor: '#0D0D0D',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row'
    }
});
  