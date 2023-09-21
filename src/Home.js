import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Menu from './Menu';
import { ChatBubbleOvalLeftEllipsisIcon, ChevronLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import FlatList1 from '../FlatList';


const Home = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#011D45' }} showsVerticalScrollIndicator={false}>
      <View>

        <View style={styles.Touchable} >
          <TouchableOpacity onPress={() => navigation.goBack()} >
            <ChevronLeftIcon style={{marginLeft:8}} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.Text}><Text style={{ color: 'red' }}>A</Text>pp Name</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <ChatBubbleOvalLeftEllipsisIcon style={{ marginRight: 10, }} />
          </TouchableOpacity>
        </View>

        {/* Status Bar */}
        <View style={{ width: '100%', height: 80 }} >
          <FlatList1 />
        </View>

        {/* Id name */}
        <Text style={{ fontSize: 20, color: 'white', marginTop: '40px', marginLeft: 2 }}>Id name</Text>
        <View style={styles.View}>
          <Text style={{ textAlign: 'center', color: 'black', fontSize: 40 }}>
            Image Area
          </Text>
        </View>

        <Text style={{ fontSize: 20, color: 'white', marginTop: '40px', marginLeft: 2 }}>Id name</Text>
        <View style={styles.View}>
          <Text style={{ textAlign: 'center', color: 'black', fontSize: 40 }}>
            Image Area
          </Text>
        </View>

        <Text style={{ fontSize: 20, color: 'white', marginTop: '40px', marginLeft: 2 }}>Id name</Text>
        <View style={styles.View}>
          <Text style={{ textAlign: 'center', color: 'black', fontSize: 40 }}>
            Image Area
          </Text>
        </View>

        <View style={{ bottom: 0, }}>
          <View style={styles.LineStyle} ></View>
          <Menu />
          <View style={styles.LineStyle2} ></View>
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
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
  View: {
    marginTop: '5px', 
    justifyContent: 'center', 
    borderWidth: 2, 
    borderColor: 'transparent',
    borderRadius: 10, width: '90%', 
    height: '30%', marginLeft: 18, 
    backgroundColor: 'white'
  },
  LineStyle: {
    marginBottom: 2,
    borderWidth: 1,
    borderColor: 'grey',
    marginTop: '100px',
  },
  LineStyle2: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'grey',
    marginTop: 0.5
  },
})

export default Home
