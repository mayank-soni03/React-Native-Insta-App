import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ChevronLeftIcon, } from 'react-native-heroicons/solid'
import {QuestionMarkCircleIcon}from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'

const Contact = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: '#deb887', }}>
      <View style={styles.Touchable} >
        <TouchableOpacity onPress={() => navigation.goBack()} >
          <ChevronLeftIcon style={{marginLeft:8}} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Text}><Text style={{ color: 'red' }}>A</Text>pp Name</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <QuestionMarkCircleIcon style={{ marginRight: 10, }} />
        </TouchableOpacity>
      </View>

      <Text style={{
        textAlign: 'center',
        marginTop: 20,
        fontSize: 30, color: 'black'
      }}>Account Recovery
      </Text>
      <View style={styles.View}>

        <TextInput placeholder='User Id' style={styles.TextInput}></TextInput>
        <TextInput placeholder='Phone No.' style={styles.TextInput}></TextInput>
        <TextInput placeholder='OTP' style={styles.TextInput}></TextInput>
        <TextInput placeholder='New Password' secureTextEntry='false' style={styles.TextInput}></TextInput>
        <TouchableOpacity style={styles.Touchable2}>
          <Text style={styles.TouchableText}>Change Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  View: {
    width: 330, height: 500,
    borderRadius: 5,
    marginTop: 40, marginLeft: 15,
    backgroundColor: 'white'
  },
  TextInput: {
    fontSize: 20,
    padding:10,
    width: 280, height: 60,
    borderWidth: 2, borderColor: 'brown',
    borderRadius: 10, marginTop: 48,
    backgroundColor: 'white',
    alignSelf: 'center'
  },
  Touchable: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: 'white',
    width: '100%', height: 60,
    backgroundColor: '#F8CE58',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  Text: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '600',
    letterSpacing: 1,
  },
  Touchable2: {
    fontSize: 20,
    width: 220, height: 40,
    borderWidth: 2, borderColor: 'brown',
    borderRadius: 10, marginTop: 18,
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

export default Contact

