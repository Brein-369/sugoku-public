import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import {Provider, useDispatch, useSelector} from 'react-redux'
import {setUserBoard} from '../../store/actions'

export default function MiniBox(props) {
    const originalBoard = useSelector(state => state.board)
    const solved = useSelector(state=> state.solvedCondition)
    const dispatch = useDispatch()
    const {number, row, col} = props
    const [numberMiniBox, setnumberMiniBox]= useState(0)
    // useEffect(() => {
    //   if(props.fromBoard){
    //     setDariBoard(true)
    //   }
    // }, [])
    function setMiniBox(userNumber){
      // console.log(typeof userNumber);
      // console.log(typeof number);
      setnumberMiniBox(userNumber)
      dispatch(setUserBoard({row,col,userNumber}))
    }
  return (
        <View style={styles.miniBox}>
            {   
                
                solved?
                <TextInput editable={ originalBoard[row][col] == 0 ? true : false } style={styles.text} onChangeText={userNumber => setMiniBox(Number(userNumber))}>{number}</TextInput>
                // <Text style={styles.text}>{number}</Text>
                :
                number ?
                  numberMiniBox ?
                    <TextInput style={styles.input} maxLength={1} multiline={false} onChangeText={userNumber => setMiniBox(Number(userNumber))}
                    keyboardType = 'numeric' value={`${numberMiniBox}`}></TextInput>
                    :
                    <Text style={styles.text}>{number}</Text>
                  :    
                  numberMiniBox ?
                    <TextInput style={styles.input} maxLength={1} multiline={false}  onChangeText={userNumber => setMiniBox(Number(userNumber))}
                    keyboardType = 'numeric' value={`${numberMiniBox}`}></TextInput>
                    :
                    <TextInput style={styles.input} maxLength={1} multiline={false} onChangeText={userNumber => setMiniBox(Number(userNumber))}
                    keyboardType = 'numeric'></TextInput>
                




                // numberMiniBox ?
                //   number ?
                //     <TextInput style={styles.input} onChangeText={userNumber => setMiniBox(Number(userNumber))}
                //     keyboardType = 'numeric' value={`${numberMiniBox}`}></TextInput>
                //     :
                //     <TextInput style={styles.input} onChangeText={userNumber => setMiniBox(Number(userNumber))}
                //     keyboardType = 'numeric' value={'NaN'}></TextInput>
                // :    
                // number ?
                //   <Text style={styles.text}>{number}</Text>
                //   :
                //   <TextInput style={styles.input} onChangeText={userNumber => setMiniBox(Number(userNumber))}
                //   keyboardType = 'numeric'></TextInput>

                //ternary ini knp ga bisa..
                // <TextInput editable={number==0? true: false}>{number==0? "":number}</TextInput>

            }
        </View>
  );
}

const styles = StyleSheet.create({
  miniBox: {
    flex: 1,
    height:30,
    textAlign: "center",
    borderWidth: 1
  },
  text:{
    height:30,
    paddingTop: 5,
    textAlign:'center',
    // fontStyle:"italic",
    backgroundColor:'#e6e6e6'

  },
  input:{
    height:30,
    textAlign: "center",
  }
});
