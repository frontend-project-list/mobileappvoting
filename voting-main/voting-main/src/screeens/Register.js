
import React, { Fragment, useRef } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons'
import { useDispatch, useSelector } from 'react-redux';
import OverLay from '../components/Modal/OverLay';
import { candidateRegister } from '../redux/actions/user';
import Toast from 'react-native-toast-message';
import DocumentPicker from 'react-native-document-picker'
import BottomSheet from 'react-native-raw-bottom-sheet';
import { ScrollView } from 'react-native-gesture-handler';


const Login = ({ navigation }) => {
    const [modalVisible, setModalVisible] = React.useState(false);
    const [bio, setBio] = React.useState(null);
    const [image, setImage] = React.useState(null);
    const [position, setPosition] = React.useState(false);
    const [positionName, setPositionName] = React.useState('Select Position');
    const allPositions = useSelector(state => state.positions);
    console.log(allPositions);
    const dispatch = useDispatch()

    const loginHandler = async () => {
        setModalVisible(true);
        try {
            if(!bio || !image || !position){
                throw new Error('Please fill all the fields')
            }

            const formData = new FormData();
            formData.append('positionId', position);
            formData.append('biography', bio);
            formData.append('img', image);
            await candidateRegister(formData)(dispatch);
            Toast.show({
                type: 'success',
                text1: 'Registered!',
                text2: ``
            });
            setModalVisible(false);

        } catch (error) {
            Toast.show({
                type: 'error',
                text1: 'Registration  Failed',
                text2: `${error}`
            });
            setModalVisible(false);
            console.log(error, "kkk");
        }


    }
    const bottomSheetRef = useRef();

    const getAllPositions = (e) => {
        bottomSheetRef.current.open();
    }

    const selectFile = async () => {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.images],
            })
            console.log(res[0]);
            setImage(res[0]);
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <Fragment>
            <OverLay visible={modalVisible} />
            <LinearGradient colors={['#419ff1', '#1287ed']} style={styles.linearGradient}>

                <BottomSheet
                    ref={bottomSheetRef}
                    height={300}
                    openDuration={50}
                    customStyles={{
                        container: {
                            justifyContent: "center",
                            alignItems: "center"
                        }
                    }}
                >
                    <ScrollView style={{padding:10}}>
                        {allPositions.map((item, index) => {
                            return (
                                <TouchableOpacity style={{height:40}} key={index} onPress={() => {
                                    setPosition(item.id);
                                    setPositionName(item.name);
                                    bottomSheetRef.current.close();
                                }}>
                                <Text style={styles.btnText}>{item.name}</Text>
                                </TouchableOpacity>
                            )
                        })}
                    </ScrollView>
                </BottomSheet>


                {/*  */}
                <Text style={styles.title}>Register</Text>
                <View style={styles.loginWrapper}>
                    <View style={styles.inputControl}>
                        <Text style={styles.text}>Position</Text>
                        <View style={{ ...styles.control, height: 40 }} onPress={getAllPositions}>
                            <MCI name="trophy-award" size={23} color="#fff" style={styles.emailIcon} />
                            <TouchableOpacity onPress={getAllPositions} style={styles.input} title='ok'>
                                <Text style={{ ...styles.text, marginTop: 7 }}>{positionName}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.inputControl}>
                        <Text style={styles.text}>Bio</Text>
                        <View style={{ ...styles.control, height: 140 }}>
                            <MCI name="card-account-details-star-outline" size={23} color="#fff" style={styles.emailIcon} />
                            <TextInput multiline onChangeText={(val) => setBio(val)} placeholderTextColor="#fff" placeholder='Biography' style={{ ...styles.input, height: 140 }} />
                        </View>
                    </View>
                    <View style={styles.inputControl}>
                        <TouchableOpacity style={styles.Button} onPress={selectFile}>
                            <Text style={styles.btnText}>  <MCI name="camera" size={23} color="#1287ed" style={styles.emailIcon} /></Text>
                        </TouchableOpacity>
                    </View>


                    <View style={styles.inputControl}>
                        <TouchableOpacity style={styles.Button} onPress={loginHandler}>
                            <Text style={styles.btnText}> REGISTER</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </LinearGradient>
        </Fragment>
    )
}


var styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginWrapper: {
        width: '90%',
        height: '60%',
    },
    input: {
        width: '87%',
        color: '#fff',
        height: "100%",
        paddingLeft: 9,
        fontFamily: "Quicksand-Medium"

    },
    control: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#419ff1',
        borderRadius: 5,
        elevation: 0.7,
        color: '#fff',
        shadowOffset: { width: 10, height: 20 },
        shadowColor: '#fff',
        marginTop: 5,
    },
    emailIcon: {

    },
    inputControl: {
        width: '100%',
        marginTop: 17,
    },
    text: {
        color: '#fff',
        fontFamily: "Quicksand-Medium",
        fontSize: 14,
    },
    Button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 5,
        elevation: 2,
        color: '#fff',
        shadowOffset: { width: 10, height: 20 },
        shadowColor: '#419ff1',
        marginTop: 3,
    },
    btnText: {
        color: '#419ff1',
        fontFamily: "Quicksand-Bold"
    },
    title: {
        fontSize: 16,
        fontFamily: 'Quicksand-Bold',
        color: '#fff'
    },
    forgot: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 8
    }
});

export default Login

