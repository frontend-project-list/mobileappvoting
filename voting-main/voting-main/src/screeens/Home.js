import React, { useEffect, useState } from 'react'
import { ScrollView, Text, StyleSheet, View } from 'react-native'
import { useDispatch } from 'react-redux';
import Card from '../components/cards/Card';
import Fab from '../components/Home/Fab';
import OverLay from '../components/Modal/OverLay';
import { getAllPositions } from '../redux/actions/positions';




const Home = (props) => {
    const [data, setData] = useState({ loading: true, data: [] });
    const dispatch = useDispatch();

    useEffect(() => {
        if (data.loading) {
            const getPositons = async () => {
                const allPositions = await getAllPositions()(dispatch);
                setData({ loading: false, data: allPositions });
            }
            getPositons();
        }

    }, [data]);

    const viewCandidates = (id) => {
        props.navigation.navigate('Candidates',{
            id
        });
    }
    const goToRegister = ()=>{
        props.navigation.navigate('Register')
    }
    return (
        <View style={styles.container}>
            <OverLay visible={data.loading} />
            <ScrollView style={styles.main}>
                {data.data.map(({name,id}, index) => (<Card key={index} positionId={id} position={name} positionCandidates={viewCandidates} />))}
            </ScrollView>
            <Fab goToRegister={goToRegister} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    main: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
        padding: 10,
    }

});

export default Home
