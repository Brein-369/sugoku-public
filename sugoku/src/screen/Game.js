import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import {useSelector, useDispatch} from 'react-redux'
import {setBoard, solveBoard, setSolvedCondition} from '../../store/actions'
import MiniBox from '../components/MiniBox'
// import RowContainer from '../components/RowContainer'

export default function Game({route, navigation}) {
    //   const [board, setBoard] = useState([])
  const originalBoard = useSelector(state=> state.board)
  const userBoard = useSelector(state=> state.userBoard)
  const [solved, setSolved] = useState(false)
  const dispatch = useDispatch()
  useEffect(()=>{
      console.log(route.params, '<< game use effect');
    dispatch(setBoard(route.params.level))
    dispatch(setSolvedCondition(false))
  },[])

  function validateSugoku(){
      console.log("masuk validate sugoku");
    const encodeBoard = (board) => board.reduce((result, row, i) => result + `%5B${encodeURIComponent(row)}%5D${i === board.length -1 ? '' : '%2C'}`, '')
    const encodeParams = (params) => 
      Object.keys(params)
      .map(key => key + '=' + `%5B${encodeBoard(params[key])}%5D`)
      .join('&')

    fetch('https://sugoku.herokuapp.com/validate', {
        method: 'POST',
        body: encodeParams({board:userBoard}),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      })
        .then(response => response.json())
        .then(response => {
            console.log(response,'<<<<< response validate');
            Alert.alert(`Sugoku status: ${response.status}`)
        })
        .catch(console.warn)
  }
  function solveSugoku(){
    const encodeBoard = (board) => board.reduce((result, row, i) => result + `%5B${encodeURIComponent(row)}%5D${i === board.length -1 ? '' : '%2C'}`, '')
    const encodeParams = (params) => 
      Object.keys(params)
      .map(key => key + '=' + `%5B${encodeBoard(params[key])}%5D`)
      .join('&');

    fetch('https://sugoku.herokuapp.com/solve', {
        method: 'POST',
        body: encodeParams({board:originalBoard}),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      })
        .then(response => response.json())
        .then(response => {
            dispatch(solveBoard(response.solution))
            dispatch(setSolvedCondition(true))
            setSolved(true)
            // setTimeout(() => {
            // }, 5000);
        })
        .catch(console.warn)
  }
  return (
    
    
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>SUGOKU !</Text>
        <Text >Difficulty: {route.params.level[0].toUpperCase()+route.params.level.slice(1)}</Text>
      </View>
      <View>
          <Text>Happy Playing, {route.params.name} !</Text>
      </View>
        
      <View style={styles.sudokuCont}>
        {
            solved?
            userBoard.map((row,iRow)=>{
                return <View style={styles.oneRow} key={iRow}>
                  {
                    // row
                    row.map((number,iCol)=>{
                      return <MiniBox number={number} fromBoard={true} style={styles.miniBox} key={iCol} row={iRow} col={iCol}>
                      </MiniBox>
                    })
                  }
                  </View>
              })
              :
              originalBoard.map((row,iRow)=>{
            return <View style={styles.oneRow} key={iRow}>
              {
                // row
                row.map((number,iCol)=>{
                  return <MiniBox number={number} fromBoard={true} style={styles.miniBox} key={iCol} row={iRow} col={iCol}>
                  </MiniBox>
                })
              }
              </View>
          })
        }
      </View>
      <View style={styles.gameBtn}>
        <Button
            onPress={validateSugoku}
            title="validate"
        >
        </Button>
        <Text>       </Text>
        <Button
            onPress={solveSugoku}
            title="Solve for me"
        >
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    // backgroundColor:'red',
    height: 500

  },
  header:{
    alignItems: 'center',
  },
  title:{
    fontSize: 30,
    // textAlign:'center',  
    // backgroundColor:'blue',
    // margin:30
  },  
  gameBtn:{
    flexDirection:'row',
  },
//   btn:{
//     marginHorizontal: 100
//   },
  sudokuCont: {
    // flex: 1, <<< bikin ga bisa space around di container...
    // margin: 30,
    // justifyContent: 'center',
    // alignItems: 'center',
    width: 300

  },
  oneRow:{
    width: 300,
    height : 30,
    // alignItems: 'center',
    borderWidth: 0,
    flexDirection: 'row'
  },
  // miniBox: {
  //   flex: 1,
  // }
});
