import React, { useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator,TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, selectAllTodos } from './todosSlice';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectAllTodos);
  const todoStatus = useSelector((state) => state.todos.status);

  useEffect(() => {
    if (todoStatus === 'idle') {
      dispatch(fetchTodos());
    }
  }, [todoStatus, dispatch]);

  if (todoStatus === 'loading') {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (todoStatus === 'failed') {
    return <Text>Error loading todos.</Text>;
  }

  return (
  
    
    <FlatList
      data={todos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View>
        <TouchableOpacity 
        style={{borderWidth:1,borderRadius:10,height:35, overflow: 'hidden',flexWrap:'wrap',alignItems:'center'}}
         >
         <Text >{item.title}</Text>
        </TouchableOpacity>
         
        </View>
        
      )}
       contentContainerStyle={{gap:10}}
    />
  );
};

export default TodoList;
