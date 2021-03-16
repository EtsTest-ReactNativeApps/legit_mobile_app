import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import styles from './styles'
import StyledButton from '../StyledButton/StyledButton'


const CarItem = (props) => {
    return (
        <View style={styles.carContainer}> 
        <ImageBackground source={require('../../assets/images/ModelX.jpeg')}  
        style={styles.image}/>

        <View style={styles.titles}>
        <Text style={styles.title} >Model X</Text> 
        <Text style={styles.subtitle}>Starting at $83,190</Text>
    
        </View>
    
        <StyledButton type='primary' content={"Custom Order"} onPress={() => console.warn('Custom Order was clicked')} />
        <StyledButton type='secondary' content={"Existing Inventory"} onPress={() => console.warn('Existing Inventory was clicked')} />
       </View>
    )
}

export default CarItem;
