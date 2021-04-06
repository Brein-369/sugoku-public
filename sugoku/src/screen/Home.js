import React, { Component, useState } from 'react'
import { Text, View, TextInput, Button, StyleSheet} from 'react-native'

export default function Home(props) {
    const [choosenLevel, setChoosenLevel] =useState('easy')
    const [playerName, setPlayerName] = useState('')
    function goToGame(){
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
            <Text style={styles.title}> Welcome to Sugoku </Text>
            <View>
                <TextInput
                    style={styles.playerNameInput}
                    placeholder="Insert Name Here"
                    onChangeText={text => setPlayerName(text)}
                ></TextInput>
            </View>
            <View>
                <Text>
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
        // alignItems:'center'
    },
    title:{
        fontSize:30,
        // textAlign:'center'
    },
    playerNameInput:{
        fontSize:20,
        textAlign:'center'

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
