import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import colors from '../config/colors';

function ViewImageScreen(props) {
    return (

        <View style={styles.container}>
            <View style={styles.closeIcon} />
            <View style={styles.deleteIcon} />
            <Image
                style={styles.image} 
                source={require('../assets/chair.jpg')} 
            />
        </View> 
    );
}

const styles = StyleSheet.create({
    
    closeIcon:{
        width:50,
        height: 50,
        backgroundColor: colors.primary,
        position: 'absolute',
        top:80,
        left:30
    },
    container:{
        flex: 1,
        backgroundColor: colors.black,

    },
    deleteIcon:{
        width:50,
        height: 50,
        backgroundColor: colors.secondary,
        position: 'absolute',
        top:80,
        right:30
    },
    image:{
        resizeMode: 'contain',
        width: '100%',
        height: '100%',

    },
})

export default ViewImageScreen;