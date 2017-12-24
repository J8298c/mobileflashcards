import React from 'react';
import { Text, View } from 'react-native';

const HomePage = () => {
    return (
        <View style={styles.homePageContainer}>
            <Text style={styles.homePageFont}>
                Mobile Flash Cards
            </Text>
        </View>
    )
}

const styles = {
    homePageContainer: {
        flex: 1,
    },
    homePageFont: {
        fontSize: 20,
        textAlign: 'center'
    }
}

export default HomePage;