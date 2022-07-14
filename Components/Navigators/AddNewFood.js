import {SearchBar} from "@rneui/themed";
import {Text, View, StyleSheet } from "react-native";
import {useState} from "react";



type SearchBarComponentProps = {};

const AddFood: React.FunctionComponent<SearchBarComponentProps> = () => {
    const [search, setSearch] = useState("");

    const updateSearch = (search) => {
        setSearch(search);
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
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        margin: 10,
    },
});

export default AddFood;
