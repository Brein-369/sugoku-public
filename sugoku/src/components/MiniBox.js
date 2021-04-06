import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import {Provider, useDispatch, useSelector} from 'react-redux'

export default function MiniBox(props) {
    const {number} = props
    console.log(number);
  return (
        <View style={styles.miniBox}>
            {
                number ?
                <Text style={styles.text}>{number}</Text>
                :
                <TextInput style={styles.input}></TextInput>
                
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
    paddingTop: 10
  },
  input:{
    height:30,
    textAlign: "center",
  }
});
