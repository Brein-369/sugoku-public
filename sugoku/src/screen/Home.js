import React, { Component, useState, useEffect } from 'react'
import { ImageBackground, Image,Text, View, TextInput, Button, StyleSheet, Dimensions} from 'react-native'
import {useFocusEffect} from '@react-navigation/native'

export default function Home(props) {
    const [choosenLevel, setChoosenLevel] =useState('easy')
    const [playerName, setPlayerName] = useState('')
    // const windowWidth = Dimensions.get('window').width;
    // const windowHeight = Dimensions.get('window').height;
    useFocusEffect(
        React.useCallback(() => {
            console.log("usefocus effect<<<");
            setPlayerName('')
        }, [])
      );
    function goToGame(){
        setPlayerName('')
        props.navigation.navigate('Game', {
            name: playerName,
            level: choosenLevel
        })
    }
    function setLevel(level){
        setChoosenLevel(level)
    }
    return (
        <View style={styles.container} >
            {/* <ImageBackground source={{ uri: "https://imgur.com/eb941aff-60c1-40f0-aa5e-6f05ba6e84ea" }} style={{ width: windowWidth, height: windowHeight }}/> */}
            <Image source={{ uri: "https://i.imgur.com/pv68lmb.png" }} style={{ width: 150, height: 150 }} />
            {/* <Text style={styles.title}> Welcome to Sugoku </Text> */}
            <View>
                <TextInput
                    style={styles.playerInput}
                    placeholder="Insert Name"
                    value={playerName}
                    onChangeText={text => setPlayerName(text)}
                ></TextInput>
                <Text style={styles.playerNameInput}>
                    Choosen Level: 
                </Text>
                <Text style={styles.levelText}>
                    -{`${choosenLevel[0].toUpperCase()+choosenLevel.slice(1)}`}-
                </Text>
            </View>
            <View style={styles.btnRow}>
                <Button
                    title="Easy"
                    color= '#0c9400'
                    onPress={()=> setLevel('easy')}
                    >
                </Button>
                <Button
                    title="Medium"
                    color= '#c2a500'
                    onPress={()=> setLevel('medium')}
                    >
                </Button>
                <Button
                    title="Hard"
                    color= '#b00000'
                    onPress={()=> setLevel('hard')}
                    >
                </Button>
                <Button
                    title="Random"
                    color= 'black'
                    onPress={()=> setLevel('random')}
                    >
                </Button>
            </View>
            <View style={styles.submitBtn}>
                {
                    choosenLevel && playerName ?
                    <Button
                    title="Submit and Play !"
                    onPress={goToGame}
                    >
                    </Button>
                    :
                    <Button
                    disabled
                    title="Input Name First !"
                    onPress={goToGame}
                    >
                    </Button>
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent: 'space-around',
        backgroundColor: '#ebf4fa'
        // alignItems:'center'
    },
    title:{
        fontSize:30,
        fontWeight: "bold"
        // textAlign:'center'
    },
    playerNameInput:{
        fontSize:20,
        textAlign:'center',
        fontWeight: "bold"
    },
    playerInput:{
        fontSize:20,
        textAlign:'center',
        borderBottomWidth:1
    },
    levelText:{
        fontSize :20,
        textAlign:'center'
    },
    btnRow:{
        justifyContent: 'space-around',
        flexDirection: 'column',
    },
    submitBtn:{
        // flexDirection:'row',
        width: 200,
    }
})
