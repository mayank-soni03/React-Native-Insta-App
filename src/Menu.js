import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Menu = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.menuView} >
            <TouchableOpacity style={styles.Touchable}
            onPress={() => navigation.navigate('Home')} >
                <Text style={styles.Text} >Home</Text>
            </TouchableOpacity>

            {/* <TouchableOpacity style={styles.Touchable}
            onPress={() => navigation.navigate('Student')} >
                <Text style={styles.Text} >Student</Text>
            </TouchableOpacity> */}

            <TouchableOpacity style={styles.Touchable}
            onPress={() => navigation.navigate('')} >
                <Text style={styles.Text} >About Us</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.Touchable}
            onPress={() => navigation.navigate('')} >
                <Text style={styles.Text} >Contact Us</Text>
            </TouchableOpacity>
            
        </View>
    );
};

const styles = StyleSheet.create({
    menuView:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        
    },
    Text:{
        fontWeight:600,
        color:'white'
    },
})

export default Menu;