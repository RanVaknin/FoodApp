import React, {useState} from 'react'
import { StyleSheet, View, TextInput, Text } from 'react-native';
import { Feather } from '@expo/vector-icons'

const SearchBar = ({query, onChangeText, onSubmit}) => {

    return (
        <View style={styles.container}>
            <View>
                <Feather style={styles.searchIcon} name="search" size={20} color={'#757575'}/>
            </View>
            <View style={styles.searchInput}>
                <TextInput 
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={onChangeText}
                    onEndEditing={onSubmit}
                    placeholder="Search" 
                    value={query}
                    clearTextOnFocus={true}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height:55,
        backgroundColor: '#DDDDDD',
        margin: 30,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    searchIcon: {
        marginLeft: 15
    },
    searchInput: {
        marginLeft: 15,
        flex:1
    }
})

export default SearchBar