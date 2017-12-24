import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const HomePage = (props) => {
    return (
        <View style={styles.homePageContainer}>
            <Text style={styles.homePageFont}>
                Mobile Flash Cards
            </Text>
            <TouchableOpacity 
            style={styles.buttonColor}
            onPress={props.onPress}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = {
    homePageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3E4555',
        
    },
    homePageFont: {
        fontSize: 35,
        color: '#85F589',
        marginBottom: 33
    },
    buttonColor: {
        backgroundColor: '#6D5589',
        alignItems: 'center',
        padding: 10,
        width: 100,
        borderRadius: 2
    },
    buttonText: {
        color: '#fcfcfc'
    }
}

export default HomePage;