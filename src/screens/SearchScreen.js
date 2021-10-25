import React, { useState } from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import BusinessScrollView from '../components/BusinessScrollView';


const SearchScreen = () => {
    const [query,setQuery] = useState("");
    const [results, getResult] = useResults([])

    const filterResults = (price) =>{
        return results.filter(business => price === business.price)
    }

    return (
    <View style={{ flex: 1}}>
            <SearchBar 
                query={query} 
                onChangeText={(text)=>{setQuery(text)}}
                onSubmit={()=>{getResult(query)}}
            />
            <ScrollView>
                <BusinessScrollView results={filterResults('$')} title="Cost Effective" businesses={results}/>
                <BusinessScrollView results={filterResults('$$')} title="Bit Pricier" businesses={results}/>
                <BusinessScrollView results={filterResults('$$$')} title="Big Spender!" businesses={results}/>
                <BusinessScrollView results={filterResults('$$$$')} title="Rich" businesses={results}/>
            </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({

})

export default SearchScreen