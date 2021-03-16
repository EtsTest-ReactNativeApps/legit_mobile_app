import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import styles from './styles'
import StyledButton from '../StyledButton/StyledButton'


const CarItem = (props) => {

    const { name, tagline, TaglineCTA, image } = props;
    return (
        <View style={styles.carContainer}> 
        <ImageBackground source= {image}   
        style={styles.image}/>

        <View style={styles.titles}>
        <Text style={styles.title} >{name}</Text> 
        <Text style={styles.subtitle}> {tagline} 
        <Text style={styles.TaglineCTA}>
            {TaglineCTA}
        </Text>
        </Text>
        </View>

        <View style={styles.buttonsContainer}> 
        <StyledButton type='primary' content={"Custom Order"} onPress={() => console.warn('Custom Order was clicked')} />
        <StyledButton type='secondary' content={"Existing Inventory"} onPress={() => console.warn('Existing Inventory was clicked')} />
        </View>
       </View>
    )
}

export default CarItem;
