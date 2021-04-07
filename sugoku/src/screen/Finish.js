import React, { Component, useEffect, useState } from 'react'
import { Text, View, Button, StyleSheet, ScrollView} from 'react-native'
import {addLeaderboard,setSolvedCondition} from '../../store/actions'
import {useSelector, useDispatch} from 'react-redux'
// import AppLoading from 'expo-app-loading';
// import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';


export default function  Finish({route, navigation}) {
    // const [leaderboard, setLeaderboard] = useState([])
    const dispatch = useDispatch()
    const leaderboard = useSelector(state => state.leaderboard)
    const thisPlayer = {
        name: route.params.name,
        level: route.params.level,
        autoSolve: route.params.autoSolve,
        failByTimer: route.params.failByTimer
    }

    useEffect(() => {
        dispatch(addLeaderboard(thisPlayer))
    }, [])

    function goToHome(){
        navigation.navigate('Home')
    }
    // let [fontsLoaded] = useFonts({
    //     Inter_900Black,
    //   });
    
    // if (!fontsLoaded) {
    // return <AppLoading />;
    // }
    return (
        <View style={styles.container}>
            <View >
                <Text style={styles.title}>Game Over !</Text>
                <Text>Thank you for playing, {route.params.name}</Text>
            </View>
            <View style={styles.btn}>
                <Button onPress={goToHome} title='Back to Home'> </Button>
            </View>
            <View style={styles.table}>
                <Text style={styles.leaderboard}>---Leaderboards---</Text>

                    {
                        leaderboard.map((data, index)=>{
                            return <View style={styles.oneRow} key={index}>
                                <Text>{`${index+1}.`} {data.name} | Level : {data.level} | {data.autoSolve ? "finish auto solve" : "finish manually"} | {data.failByTimer ? "fail" : "success"}</Text>
                            </View>
                        })
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
        backgroundColor:'#ebf4fa'
    },
    btn:{
        // flexDirection:'row',
        width: 200,
        alignItems:'center',
        justifyContent: 'center',
    },
    title:{
        fontSize:30,
        alignItems:'center',
        // fontFamily: 'Inter_900Black' ,
        fontWeight: "bold"
    },
    leaderboard:{
        fontSize:20,
        textAlign:'center',
        // fontFamily: 'Inter_900Black' ,
        fontWeight: "500"
    },
    table:{
        textAlign:'center'
    },
    oneRow:{
        // width: 300,
        height : 30,
        // alignItems: 'center',
        flexDirection: 'row'
      },
})