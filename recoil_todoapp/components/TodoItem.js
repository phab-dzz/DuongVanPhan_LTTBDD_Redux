// src/components/TodoItem.js
import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';

const TodoItem = ({ todo }) => {
  return (
     
        <TouchableOpacity 
        style={{borderWidth:1,borderRadius:10,height:35, overflow: 'hidden',flexWrap:'wrap',alignItems:'center'}}
         >
         <Text style={{textAlign:'center'}}>{todo.title}</Text>
        </TouchableOpacity>
         
        
    
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default TodoItem;
