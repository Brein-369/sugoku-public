import React, { Component } from 'react'
import { Text, View, TextInput, Button} from 'react-native'

export default function Home(props) {
    function goToGame(){
        props.navigation.navigate('Game')
    }
    return (
        <View>
            <Text> Home </Text>
            <Button
            title="Submit and Play!"
            onPress={goToGame}
            >
            </Button>
        </View>
    )
}
