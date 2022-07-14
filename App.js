import { StatusBar } from 'expo-status-bar';
import {Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ScanScreen from './Components/QRCode';
import Home from './Components/Navigators/HomeNavigator';
import {RNCamera} from "react-native-camera";
import QRCodeScanner from "react-native-qrcode-scanner";
import {Component} from "react";



function HomeScreen() {
    return (
        <ScanScreen />
    );
}

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();

export default function App() {

    return (
        <Home />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
