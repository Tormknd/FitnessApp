import * as React from 'react';
import { View, Button, Text, Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import JournalComponent from './Journal';



function DashBoard({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>DashBoard screen</Text>
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}

function Journal({ navigation }) {
    return (
            <JournalComponent />
    );
}

function Fil({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Fil screen</Text>
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}

function Settings({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings screen</Text>
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen
                name="DashBoard"
                component={DashBoard}
                options={{
                    headerTintColor: 'white',
                    headerStyle: { backgroundColor: 'tomato' },
                }}
            />
            <Tab.Screen
                name="Journal"
                component={Journal}
                options={{
                    headerTintColor: 'white',
                    headerStyle: { backgroundColor: 'tomato' },
                }}
            />
            <Tab.Screen
                name="Fil"
                component={Fil}
                options={{
                    headerTintColor: 'white',
                    headerStyle: { backgroundColor: 'tomato' },
                }}
            />
            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                    headerTintColor: 'white',
                    headerStyle: { backgroundColor: 'tomato' },
                }}
            />
        </Tab.Navigator>
    );
}

export default function HomeNavigator() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}
