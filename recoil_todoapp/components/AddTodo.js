
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useRecoilState } from 'recoil';
import { todoState, addTodo } from '../state/todoAtom';
import { addTodo as apiAddTodo } from '../api/api';

const AddTodo = () => {
  const [todos, setTodos] = useRecoilState(todoState);
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = async () => {
    if (!inputValue) return;

    const newTodo = { title: inputValue, completed: false };


    const addedTodo = await apiAddTodo(newTodo);
    

    setTodos(addTodo(todos, addedTodo));
    setInputValue(''); 
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nhập Todo mới"
        value={inputValue}
        onChangeText={setInputValue}
      />
      <Button title="Thêm Todo" onPress={handleAddTodo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginRight: 10,
  },
});

export default AddTodo;
