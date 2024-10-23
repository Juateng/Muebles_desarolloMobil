// rsf
import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';
import colors from '../config/colors';
import AppText from '../components/AppText';

function WelcomeScreen({texto}) {
    return (
        <ImageBackground
            style={styles.background}
            source={require('../assets/background.jpg')}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo-red.png')} />
                <AppText texto={texto}></AppText>
            </View>
            <View style={styles.loginButton}/>
            <View style={styles.registerButton}/>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    logo:{
        width: 100,
        height: 100
    },
    logoContainer:{
        position: 'absolute',
        top: 120,
        alignItems: 'center',

    },
    loginButton:{
        width: '100%',
        height: 70,
        backgroundColor: colors.primary
    },
    registerButton:{
        width: '100%',
        height: 70,
        backgroundColor: colors.secondary
    }

})

export default WelcomeScreen; 