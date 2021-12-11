import React from 'react'
import { View, Text } from 'react-native'
import Overlay from 'react-native-modal-overlay';
import Logo from '../common/Logo'
import * as Animatable from 'react-native-animatable';


const OverLay = ({visible}) => {
    return (
        <Overlay visible={visible} onClose={()=>alert}  childrenWrapperStyle={{backgroundColor: 'rgb(255, 255, 255,0.1)'}}  containerStyle={{backgroundColor: 'rgba(5, 40, 71,0.5)'}} >
            <Animatable.View animation={"bounce"} duration={2000} delay={100} iterationCount="infinite">
            <Logo />
            </Animatable.View>
        </Overlay>
    )
}

export default OverLay


