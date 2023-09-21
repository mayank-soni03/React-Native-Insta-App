import React from "react";
import { StyleSheet, Text, FlatList, Image, View } from "react-native";

const FlatList1 = () => {
    const names = [
        {
            name: 'Id name',
            Image: require("./Images/circle image.png")
        },
        {
            name: 'Id name',
            Image: require("./Images/circle image.png")
        },
        {
            name: 'Id name',
            Image: require("./Images/circle image.png")
        },
        {
            name: 'Id name',
            Image: require("./Images/circle image.png")
        },
        {
            name: 'Id name',
            Image: require("./Images/circle image.png")
        },
        {
            name: 'Id name',
            Image: require("./Images/circle image.png")
        },

    ];

    return (
        <View style={styles.View}>
            <FlatList
                style={styles.container}
                data={names}
                renderItem={(element) => {
                    return (<View style={{ margin: 10, }}
                    >
                        <Image
                            resizeMode={'contain'}
                            source={element.item.Image}
                            style={{ height: 8, width: 8, padding: 30, }} />
                        <Text style={styles.Text1}>{element.item.name}</Text>
                    </View>);

                }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />

        </View>

    );


};

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        width: '100%'

    },
    Text1: {
        fontSize: 16,
        fontWeight: 400,
        marginTop: 2,
        marginLeft: 2,
        color: 'white'
    },
    View: {
        width: '100%'
    }
});


export default FlatList1;