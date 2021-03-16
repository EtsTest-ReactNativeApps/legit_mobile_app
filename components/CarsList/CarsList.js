import React from 'react'
import { View, FlatList } from 'react-native'
import styles from './styles'
import cars from './cars'
import CarItem from '../CarItem/CarItem'


const CarsList = (props) => {

        return (
            <View style={styles.container}>
                <FlatList 
                data={cars}
                renderItem={({item}) => <CarItem car={item} /> }
                />
            </View>
        )
}


export default CarsList;