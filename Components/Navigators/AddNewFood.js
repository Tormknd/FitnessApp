import React from 'react';
import {SearchBar} from "@rneui/themed";
import {Text, View, StyleSheet} from "react-native";
import {useNavigation, useRoute} from '@react-navigation/native';
import {useState} from "react";
import Journal, {foods} from "./Journal";

type SearchBarComponentProps = {};


const SearchFood: React.FunctionComponent<SearchBarComponentProps> = ({props}) => {
    const [search, setSearch] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [data, setData] = useState([props.route.params.lol]);

    const updateSearch = (search) => {
        setSearch(search);
        if (search) {
            const newData = []
            for(var i = 0; i < data[0].length; i++) {
                if(data[0][i].name.toLowerCase().includes(search.toLowerCase())) {
                    newData.push(data[0][i].name)
                }
            }
            setFilteredData(newData)
        } else {
            setFilteredData("");
        }

    };

    return (
        <View style={styles.view}>
            <SearchBar
                round={true}
                lightTheme={true}
                placeholder="Type Here..."
                onChangeText={updateSearch}
                value={search}
            />
            <Text>
                {filteredData}
            </Text>
        </View>

    );
};

const styles = StyleSheet.create({
    view: {
        margin: 10,
    },
});

function AddNewFood(props) {

    return (
            <SearchFood props={props} />

    )
}

export default AddNewFood;

