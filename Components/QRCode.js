'use strict';

import React, { Component, useState, useEffect } from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    TouchableOpacity,
    Linking
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';


export default class ScanScreen extends Component{

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            isLoading: true
        };
    }

    onSuccess = e => {
        fetch("https://world.openfoodfacts.org/api/v0/product/" + e.data + ".json")
            .then((response) => response.json())
            .then((json) => {
                if(json.product.generic_name_fr !== "") {
                    console.log(json.product.generic_name_fr);
                    this.setState({ data: json.product.generic_name_fr });
                }
            })
            .catch(err => console.error('An error occureddd', err)
        );
    };

    render() {
        const { data } = this.state;
        return (
            <QRCodeScanner
                onRead={this.onSuccess}
                flashMode={RNCamera.Constants.FlashMode.off}
                cameraStyle={{width:250}}
                topContent={
                    <Text style={styles.centerText}>
                        Go to{' '}
                        <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
                        your computer and scan the QR code.
                    </Text>
                }
                bottomContent={
                    <TouchableOpacity style={styles.buttonTouchable}>
                        <Text style={styles.buttonText}>OK. Got it!</Text>
                        <Text style={styles.buttonText}>{data}</Text>
                    </TouchableOpacity>
                }
                reactivateTimeout={2000}
                reactivate={true}
            />
        );
    }
}


const styles = StyleSheet.create({
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777'
    },
    textBold: {
        fontWeight: '500',
        color: '#000'
    },
    buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)'
    },
    buttonTouchable: {
        padding: 16
    }
});
