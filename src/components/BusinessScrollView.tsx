import React from 'react'
import { StyleSheet, View, Text, FlatList} from 'react-native';
import IndividualBusiness from './IndividualBusiness';


const createList = (name, review_count, rating, image_url) =>{
    return (
        <IndividualBusiness name={name} review_count={review_count} rating={rating} image_url={image_url}/>
    )

}

const BusinessScrollView = ({ title, results }) => {

    return (
        <View style={{
            borderBottomColor: '#DDDDDD',
            borderBottomWidth: 1,
            paddingBottom: 10
          }}>
            <Text style={styles.title}>{title}</Text>

            <FlatList  showsHorizontalScrollIndicator={false} horizontal data={results} keyExtractor={(results)=>results.id} renderItem={({ item })=>{return createList(item.name,item.review_count,item.rating,item.image_url)}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft:15,
        marginTop:20,
        marginBottom:10
    }
})

export default BusinessScrollView