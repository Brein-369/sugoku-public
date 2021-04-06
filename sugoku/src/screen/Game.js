import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import {Provider, useDispatch, useSelector} from 'react-redux'
// import store from '../store'
import {setBoard} from '../../store/actions'
import MiniBox from '../components/MiniBox'
import RowContainer from '../components/RowContainer'

export default function Game() {
  // const board = useSelector(state=> state.board)
  // const dispatch = useDispatch()
  const [board, setBoard] = useState([])
  useEffect(()=>{
    fetch('https://sugoku.herokuapp.com/board?difficulty=easy')
    .then(res=>res.json())
    .then(data=>{
      setBoard(data.board)
    })
  },[])

  function validateSugoku(){

  }


  return (
    // <Provider store={store}>

    // </Provider>
    
    <View style={styles.container}>
      <View >
        <Text style={styles.title}>SUGOKU !</Text>
        <Button
            onPress={validateSugoku}
            title="validate"
        >
        </Button>
      </View>
        
      <View style={styles.sudokuCont}>
        {
          board.map((row,iRow)=>{
            return <View style={styles.oneRow}>
              {
                // row
                row.map((number,iCol)=>{
                  return <MiniBox number={number} style={styles.miniBox}>
                  </MiniBox>
                })
              }
              </View>
          })
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 100,
    paddingBottom: 100
  },
  title:{
    fontSize: 50,
    textAlign:'center'

  },  
  sudokuCont: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 360

  },
  oneRow:{
    width: 300,
    height : 30,
    alignItems: 'center',
    borderWidth: 1,
    flexDirection: 'row'
  },
  // miniBox: {
  //   flex: 1,
  // }
});
