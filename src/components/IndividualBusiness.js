import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native';


const IndividualBusiness = ({name, review_count, rating, image_url}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={{uri: image_url}}></Image>
            <Text style={{fontWeight:'bold'}}>{name}</Text>
            <Text style={{color:'#969696'}}>{rating} stars, {review_count} Reviewers</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 15
    },
    img:{
        width:250,
        height:120,
        borderRadius:10
    }
})

export default IndividualBusiness