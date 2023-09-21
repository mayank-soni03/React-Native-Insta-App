import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import Menu from './Menu';
import { useNavigation } from '@react-navigation/native';

const LogIn = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.View}>
            <View style={styles.Touchable} >
                <Text style={styles.Text}><Text style={{ color: 'red' }}>A</Text>pp Name</Text>
            </View>
            <View >
                <Text style={{
                    color: 'white', textAlign: 'center', fontSize: 20, fontWeight: 600, marginTop: 15
                }}>Sign in to your account</Text>
            </View>
            <TextInput style={styles.TextInput} placeholder='User Id' ></TextInput>
            <TextInput style={styles.TextInput} placeholder='Password' secureTextEntry='false' >
            </TextInput>


            <TouchableOpacity
                onPress={() => navigation.navigate('Home')}>
                <Text style={styles.TextInput2}>LogIn</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('Contact')}>
                <Text style={styles.TextInput3}>Forget Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('About')}>
                <Text style={{
                    color: 'white', textAlign: 'center',alignSelf:'center',
                    fontWeight: '500', letterSpacing: 1, marginTop: 20
                }} >Create New Id</Text>
            </TouchableOpacity>

            <View>
                <View style={styles.LineStyle} ></View>
                <Menu />
                <View style={styles.LineStyle2} ></View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    View: {
        flex: 1,
        backgroundColor: '#011D45'
    },
    TextInput: {
        color: 'white',
        padding: 12,
        fontSize: 18,
        fontWeight: 600,
        borderRadius: 50,
        borderWidth: 2,
        marginTop: 50,
        width: 300,
        alignSelf:'center',
        borderColor: 'white',
        backgroundColor: '#001533'

    },
    TextInput2: {
        color: 'white',
        textAlign: 'center',
        padding: 10,
        fontSize: 18,
        fontWeight: 600,
        borderWidth: 2,
        marginTop: 40,
        width: 250,
        marginLeft: 50,
        borderColor: 'transparent',
        backgroundColor: '#001533'

    },
    TextInput3: {
        color: 'white',
        textAlign: 'center',
        padding: 6,
        fontSize: 12,
        fontWeight: 600,
        marginTop: 10,
        width: 250,
        marginLeft: 50,
        borderColor: 'transparent',

    },
    LineStyle: {
        marginBottom: 2,
        borderWidth: 1,
        borderColor: 'grey',
        marginTop: '230px',
    },
    LineStyle2: {
        marginBottom: 2,
        borderWidth: 1,
        borderColor: 'grey',
    },
    Touchable: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'white',
        width: '100%', height: 60,
        backgroundColor: '#F8CE58',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    Text: {
        alignSelf: 'center',
        fontSize: 30,
        fontWeight: '600',
        letterSpacing: 1,
    },
})

export default LogIn;