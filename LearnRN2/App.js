/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput } from 'react-native';

let widthOfMargin = Dimensions.get('window').width * 0.05;

const App: () => Node = () => {
  return (
    <View style={styles.contianer}>
      <TextInput style={styles.textInputStyle} placeholder={'请输入手机号'} />
      <Text style={styles.textPromptStyle}>
        您输入的手机号：
      </Text>
      <TextInput style={styles.textInputStyle} placeholder={'请输入密码'} secureTextEntry={true} />
      <Text style={styles.bigTextPromptStyle}>确定</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 80
  },
  textInputStyle: {
    margin: widthOfMargin,
    backgroundColor: 'gray',
    fontSize: 20
  },
  textPromptStyle: {
    margin: widthOfMargin,
    fontSize: 20
  },
  bigTextPromptStyle: {
    margin: widthOfMargin,
    backgroundColor: 'gray',
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
    padding: 10
  }
});

export default App;
