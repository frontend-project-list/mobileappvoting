import React from 'react'
import { TouchableOpacity, Text ,StyleSheet,View} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import Logo from '../common/Logo';





const Card = ({position,positionCandidates,positionId}) => {

    return (
        <TouchableOpacity style={styles.container} onPress={()=>positionCandidates(positionId)}>
              <LinearGradient colors={['#1287ed','#68b6ef','#419ff1']} style={styles.linearGradient}>
                <View style={styles.cardContent}>
                    <Logo/>
                    <Text style={styles.cardText}>
                        {position}
                    </Text>
                </View>
              </LinearGradient>
        </TouchableOpacity>
    )
}



const styles=StyleSheet.create({
    container:{
        height:80,
        width:'100%',
        marginTop:10,
    },
    linearGradient: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        elevation: 5,
      },
    cardbody:{
        height:'100%',
        width:'100%',
        backgroundColor:'#fff',
        borderRadius:10,
        elevation:5,
        borderWidth:1,
        borderColor:'#419ff1',
        borderStyle:'solid',
        elevation:5,
    },
    cardContent:{
        display:'flex',
        flexDirection:'row',
        width:'100%',
        padding:10,
        height:'100%',
        alignItems:'center',
    },
    cardText:{
        fontSize:15,
        color:'#fff',
        fontFamily:'Quicksand-Medium',
        marginLeft:20,
    }
})

export default Card

