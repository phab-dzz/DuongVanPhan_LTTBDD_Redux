// App.js
import React from 'react';
import { RecoilRoot } from 'recoil';
import { SafeAreaView, StyleSheet } from 'react-native';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <RecoilRoot>
      <SafeAreaView style={styles.container}>
        <TodoList />
      </SafeAreaView>
    </RecoilRoot>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default App;
