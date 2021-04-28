import React, { Component, useState } from "react";
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import Constants from 'expo-constants';

import {Calculate} from "./Calculate";

export default function App() {

  const [num, setNum] = useState();

  const [a, setA] = useState();

  function sendNum(){
    setA(Calculate(num));
  }

  return (
    <View style={styles.container}> 
      <TextInput  style={styles.input}
       onChangeText={text => setNum(text)}
      />
      <Button onPress={() => sendNum()} 
      title="Подсчитать" />
      <Text>{a}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  input: {
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    fontSize: 20,
  }
});
