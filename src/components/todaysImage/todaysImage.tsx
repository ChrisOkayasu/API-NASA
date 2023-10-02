import React, { FC } from "react";
import { View, Text, StyleSheet, Image, Button} from "react-native";
import { PostImage } from "../../types"

const todaysImage: FC<PostImage> = ({date, title, url}) => {

    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.image} source={{uri: url}} />
            </View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{date}</Text>
            <View style={styles.buttonContainer}>
                <Button title="View"/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#2c449d',
        marginVertical: 16,
        marginHorizontal: 24,
        borderRadius: 32,
        padding: 16,
    },

    image: {
        width: '100%',
        height: 180,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 32,
    },

    title:{
        color: '#fff',
        fontSize: 20,
        marginVertical: 12,
        fontWeight: 'bold',
    },

    date:{
        color: '#fff',
        fontSize: 16,

    },

    buttonContainer: {
        alignItems: 'flex-end',
        marginTop: 16,
        
    }
})

export default todaysImage;