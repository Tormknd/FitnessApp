import * as React from 'react';
import { View, Button, Text, Animated, StyleSheet } from 'react-native';
import { NavigationContainer, useNavigation, getFocusedRouteNameFromRoute  } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import JournalComponent, {foods} from './Journal';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import AddNewFood from "./AddNewFood";



function DashBoard() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>DashBoard screen</Text>
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}

function Journal({navigation}) {
    return (
            <JournalComponent naviation={navigation}/>
    );
}

function Fil() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Fil screen</Text>
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}

function Settings() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings screen</Text>
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}

const Tab = createBottomTabNavigator();

function MyTabs() {

    const navigation = useNavigation()

    return (
        <Tab.Navigator>
            <Tab.Screen
                name="DashBoard"
                component={DashBoard}
                options={styles.options}
            />
            <Tab.Screen
                name="Journal"
                component={JournalComponent}
                options={styles.options}
            />
            <Tab.Screen
                name="Fil"
                component={Fil}
                options={styles.options}
            />
            <Tab.Screen
                name="Settings"
                component={Settings}
                options={styles.options}
            />
        </Tab.Navigator>
    );
}

const Stack = createNativeStackNavigator()


export default function HomeNavigator() {
    return (
        <NavigationContainer >
            <Stack.Navigator>
                <Stack.Screen options={{headerShown: false}} name="Tab" component={MyTabs} />
                <Stack.Screen  options={styles.options} name="AddFood" component={AddNewFood} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const getTabBarStyle = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'DashBoard';
    let display = (routeName === 'Journal') ? 'none':'flex';
    return 'none'
}

const styles = StyleSheet.create({
    options: {
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },
    },
})
