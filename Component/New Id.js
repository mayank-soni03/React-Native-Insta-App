import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ChevronLeftIcon, } from 'react-native-heroicons/solid'
import {QuestionMarkCircleIcon}from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'

const About = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1}}>
      <ImageBackground style={{width:'100%', height:'100%'}} source={require('./Image/bgImage.png')} >
        <View style={styles.Touchable} >
          <TouchableOpacity onPress={() => navigation.goBack()} >
            <ChevronLeftIcon />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.Text}><Text style={{ color: 'red' }}>A</Text>pp Name</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <QuestionMarkCircleIcon style={{ marginRight: 4, }} />
          </TouchableOpacity>
        </View>

      <View style={styles.View}>
      <Text style={{
        textAlign: 'center',
        marginTop: 20,
        fontSize: 30, color: 'black'
      }}>New Account
      </Text>

        <TextInput placeholder='New User Id' style={styles.TextInput}></TextInput>
        <TextInput placeholder='Phone No.' style={styles.TextInput}></TextInput>
        <TextInput placeholder='OTP' style={styles.TextInput}></TextInput>
        <TextInput placeholder='Password' secureTextEntry='false' style={styles.TextInput}></TextInput>
        <TextInput placeholder='Confirm Password' secureTextEntry='false' style={styles.TextInput}></TextInput>
        <TouchableOpacity style={styles.Touchable2}>
          <Text style={styles.TouchableText}>Create Account</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    </View>
  )
}
const styles = StyleSheet.create({
  Touchable: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: 'white',
    width: '100%', height: 60,
    backgroundColor: 'rgba(255,255,255,0.4)',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  Text: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '600',
    letterSpacing: 1,
  },
  View: {
    width: 330, height: 550,
    borderRadius: 5,
    marginTop: 100, marginLeft: 15,
    backgroundColor: 'rgba(255,255,255,0.6)'
  },
  TextInput: {
    fontSize: 20,
    padding:10,
    width: 280, height: 60,
    borderWidth: 2, borderColor: 'brown',
    borderRadius: 10, marginTop: 25,
    backgroundColor: 'white',
    alignSelf: 'center'
  },
  Touchable2: {
    fontSize: 20,
    width: 220, height: 40,
    borderWidth: 2, borderColor: 'brown',
    borderRadius: 10, marginTop: 19,
    backgroundColor: '#0047AB',
    alignSelf: 'center'
  },
  TouchableText: {
    alignSelf: 'center',
    marginTop: 3, fontSize: 20,
    letterSpacing: 1,
    fontWeight: 400,
    color: 'white'
  },
})

export default About

