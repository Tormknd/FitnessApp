import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import {SearchBar, Card, Text, Button} from '@rneui/themed';
import AddNewFood from './AddNewFood'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export let foods = [
    {
        name: 'Chocolat',
        '100g': {
            glucide: 30,
            lipide: 20,
            proteine: 7
        },
    },
    {
        name: 'Oeuf',
        '100g': {
            glucide: 30,
            lipide: 20,
            proteine: 7
        },
    },
    {
        name: 'Farine',
        '100g': {
            glucide: 30,
            lipide: 20,
            proteine: 7
        },
    },
];

function HandleClick({navigation}) {
    return (
      <AddNewFood navigation={navigation} />
    );
}

type CardsComponentsProps = {};

const Cards: React.FunctionComponent<CardsComponentsProps> = ({ navigation, route }) => {

    return (
            <ScrollView>
                <View style={styles.container}>
                    <Card>
                        <Card.Title>CARD WITH DIVIDER</Card.Title>
                        <Card.Divider/>
                        {foods.map((u, i) => {
                            return (
                                <View key={i} style={styles.user}>
                                    <Text style={styles.name}>{u.name}</Text>
                                    <Text style={styles.name}>{u['100g'].glucide}</Text>
                                    <Text style={styles.name}>{u['100g'].lipide}</Text>
                                    <Text style={styles.name}>{u['100g'].proteine}</Text>
                                </View>
                            );
                        })}
                        <Card.Divider/>
                        <Button title="Ajouter un Aliment" type="outline"
                                onPress={() => {
                                    navigation.navigate('AddFood', { lol:foods })
                                }}/>
                    </Card>
                    <Card>
                        <Card.Title>CARD WITH DIVIDER</Card.Title>
                        <Card.Divider/>
                        {foods.map((u, i) => {
                            return (
                                <View key={i} style={styles.user}>
                                    <Text style={styles.name}>{u.name}</Text>
                                    <Text style={styles.name}>{u['100g'].glucide}</Text>
                                    <Text style={styles.name}>{u['100g'].lipide}</Text>
                                    <Text style={styles.name}>{u['100g'].proteine}</Text>
                                </View>
                            );
                        })}
                    </Card>
                    <Card>
                        <Card.Title>CARD WITH DIVIDER</Card.Title>
                        <Card.Divider/>
                        {foods.map((u, i) => {
                            return (
                                <View key={i} style={styles.user}>
                                    <Text style={styles.name}>{u.name}</Text>
                                    <Text style={styles.name}>{u['100g'].glucide}</Text>
                                    <Text style={styles.name}>{u['100g'].lipide}</Text>
                                    <Text style={styles.name}>{u['100g'].proteine}</Text>
                                </View>
                            );
                        })}
                    </Card>
                </View>
            </ScrollView>
    );
};

const Stack = createNativeStackNavigator();

function JournalComponent() {

    return (
            <Stack.Navigator>
                <Stack.Screen options={{headerShown: false}} name="Journal" component={Cards} />
            </Stack.Navigator>
    )
}

export default JournalComponent;


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    fonts: {
        marginBottom: 8,
    },
    user: {
        flexDirection: 'row',
        marginBottom: 6,
    },
    image: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    name: {
        fontSize: 16,
        marginTop: 5,
    },
});
