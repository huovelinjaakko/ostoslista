import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function App() {

  const [list, setList] = useState([]);
  const [item, setItem] = useState("");

  const itemAdded = () => {
    setList([...list, item])
  }

  const listClear = () => {
    setList([])
  }

  return (
    <View style={styles.container}>
    <TextInput style={styles.input} onChangeText={item => setItem(item)} value={item} />
    <View style={styles.space} />
    <View style={styles.button}>
      <Button onPress={itemAdded} title="Add" />
      <Button onPress={listClear} title="Clear" />
    </View>
    <View style={styles.space} />
    <Text style={{ fontWeight: 'bold', color: 'blue' }}>Shopping list</Text>
    <FlatList style={styles.list}
      data={list}
      renderItem={({ item }) =>
        <Text>{item}</Text>
      }
    />
    <StatusBar style="auto" />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 100,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  input: {
    marginTop: 5,
    marginBottom: 5,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1 
  },
  button: {
    flexDirection: 'row',
    margin: 20,
  },
  space: {
    width: 20,
    height: 20
  },
});
