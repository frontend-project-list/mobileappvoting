import React from 'react'
import { View, Text,StyleSheet} from 'react-native'
import MCI from 'react-native-vector-icons/MaterialCommunityIcons'

const Logo = () => {
    return (
        <View style={styles.logoWrapper}>
        <MCI name="vote" size={30} color="white" />
        <Text style={styles.logoText}>Vote</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    logoWrapper:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 3,
    },
    logoText:{
        fontSize: 20,
        color: '#fff',
        fontFamily: 'Playball-Regular',
    }
});

export default Logo
