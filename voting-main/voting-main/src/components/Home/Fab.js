import React from 'react'
import { FloatingAction } from "react-native-floating-action";
import Fontisto from 'react-native-vector-icons/Fontisto'
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'







const actions = [
    {
        text: "Register as Candidate",
        icon: <MCIcon name="card-account-details-star-outline" size={24} color="white" />,
        name: "candidate_register",
        position: 1
    }
]


const Fab = ({goToRegister}) => {

    const getClickedItem= () => {
        goToRegister();
    }

    return (

        <FloatingAction
            color="#1287ed"
            buttonSize={45}
            distanceToEdge={{ horizontal: 16, vertical: 16 }}
            actions={actions}
            onPressItem={name => {
                getClickedItem(name)
            }}
            floatingIcon={<Fontisto name="nav-icon-grid-a" size={15} color="#fff" />}
        />
    )
}


export default Fab;
