import React from 'react'
import { Image } from 'react-native';
import { View, Text, StyleSheet } from 'react-native'
import { Card, CardAction, CardButton } from 'react-native-cards';
import { IMAGE_URL } from '../../utils/api';




const Candidates = ({candidate,vote}) => {
    
    return (
        <Card>
            <View style={styles.container}>
                <View style={styles.body}>
                    <View style={styles.imageContainer}>
                        <Image style={{ width: '100%', height: '80%' }} source={{ uri: `${IMAGE_URL}/${candidate.photo}` }} />
                        <Text style={styles.textBlue}>{`${candidate.student.f_name} ${candidate.student.l_name}`}</Text>
                    </View>
                    <View style={styles.bio}>
                        <Text style={styles.textBlack}>
                            {candidate.biography}
                        </Text>
                    </View>
                </View>
                <CardAction>
                    {!candidate.ispublished ? <CardButton
                        onPress={() => vote(candidate.id)}
                        title="Vote"
                        color="#1287ed"
                        size="small"
                    /> : <CardButton
                    title={`${candidate.votes} Votes `}
                    color="#ed1249"
                    size="small"
                /> }
                    
                </CardAction>

            </View>
        </Card>
    )
}



const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        flexWrap: 'wrap',
        padding: 2,
    },
    textBlue: {
        fontSize: 10,
        color: '#000000',
        fontFamily: 'Roboto-Regular',
        marginTop: 7,
    },
    textBlack: {
        fontSize: 10,
        color: '#000000',
        fontFamily: 'Roboto-Regular',
        marginTop: 3,
    },
    body: {
        height: 130,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
    },
    imageContainer: {
        height: '100%',
        width: "30%",
    },
    bio: {
        height: '100%',
        width: '70%',
        paddingLeft: 5,
        paddingRight: 5,
    }
});
export default Candidates
