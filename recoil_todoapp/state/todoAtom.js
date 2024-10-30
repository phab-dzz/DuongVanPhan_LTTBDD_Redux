import { atom } from 'recoil';

export const todoState = atom({
  key: 'todoState',
  default: [],
});
export const addTodo = (todos, newTodo) => {
  return [...todos, newTodo];
};