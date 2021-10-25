import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
const LoginScreen = () => {

    return(
        <View style={styles.container}>
            <Image style={styles.img} source={require('../../assets/bigsignup_logo.png')}></Image>
            <Image style={styles.grad} source={require('../../assets/grad.png')}></Image>
            
            <View style={styles.container2}>
                <TouchableOpacity style={styles.signupBtn}>
                    <Text style={styles.signupText}>Sign Up</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.loginBtn} >
                <Text>Log In</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    
    container: {
        alignItems: 'center',
        backgroundColor: '#6d5faa',
        height: '100vh',
        minHeight: '100vh',
    },
    container2 :{
        alignItems: 'center',

        height: '100%',
        minHeight: '100%',
        width: '100%',
        backgroundColor: 'white',
    },
    img :{
        height:180,
        width:180,
        marginTop: 110,
        
    }, 
    grad:{
        width: '100%'
    },
    signupBtn: {
        alignItems: 'center',
        backgroundColor: '#6d5faa',
        borderColor: 'white',
        borderStyle: 'solid',
        borderWidth:1,
        borderRadius: 30,
        marginTop: 45,
        marginBottom: 20,
        minWidth: '78%',
        padding: 20,
        width: '70%',
    }, 
    signupText:{
        color:'white'
    },
    loginBtn: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 30,
        marginBottom: 22,
        minWidth: '78%',
        padding: 20,
        width: '70%',
    }
});

export default LoginScreen;

