import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import {SearchBar, Card, Text, Button} from '@rneui/themed';
import AddNewFood from './AddNewFood'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


let foods = [
    {
        name: 'Chocolat',
        '100g': {
            glucide: 30,
            lipide: 20,
            proteine: 7
        },
    },
    {
        name: 'Chocolat1',
        '100g': {
            glucide: 30,
            lipide: 20,
            proteine: 7
        },
    },
    {
        name: 'Chocolat2',
        '100g': {
            glucide: 30,
            lipide: 20,
            proteine: 7
        },
    },
];

function handleClick({navigation}) {
    return (
      navigation.navigate(AddNewFood)
    );
}

type CardsComponentsProps = {};

const Cards: React.FunctionComponent<CardsComponentsProps> = ({navigation}) => {

    const [search, setSearch] = React.useState("");

    const updateSearch = (search) => {
        setSearch(search);
    };

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
                        <Button title="Ajouter un Aliment" type="outline" onPress={() => navigation.navigate('AddFood')}/>
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
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName="Journal">
                <Stack.Screen name="Journal" component={Cards} />
                <Stack.Screen name="AddFood" component={AddNewFood} />
            </Stack.Navigator>
        </NavigationContainer>
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
