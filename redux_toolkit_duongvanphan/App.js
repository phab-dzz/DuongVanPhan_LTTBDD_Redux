import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { SafeAreaView,TouchableOpacity,Text } from 'react-native';
import TodoList from './features/todos/TodoList';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1, padding: 20 }}>
        <TouchableOpacity style={{justifyContent:'center',alignItems:'center',backgroundColor:'lightgray',borderRadius:10,height:35,marginBottom:20}}>
    <Text> Danh sach Title </Text>
    </TouchableOpacity>
        <TodoList />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
