import React from 'react'
import { View, Text,StyleSheet} from 'react-native'
import MCI from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import Logo from './Logo'



const Header = (props) => {
    return (
        <View style={{...styles.container,elevation: props.scene.route.name != 'Login' ? 5 : 0,}}>
            <Logo />

            {props.scene.route.name != 'Login' && (  <View>
                <MCI name="account" size={25} color="white" />
            </View>)}
          
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 40,
        width: '100%',
        backgroundColor: '#419ff1',
        display: 'flex',
        flexDirection: 'row',
        paddingRight: 10,
    },
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

export default Header
