import {
    TodoItem,
    TodoId,
    ReducerAction,
    BaseTodoItem,
    AddAction,
    RemoveAction,
  } from '@/types';
  
  function addTodoItem(state: TodoItem[], partialTodoItem: AddAction['payload']) {
    const id = Date.now().toString();
    const todoItem = { ...partialTodoItem, id };
  
    const updatedTodoItemsList = [ todoItem, ...state ];
    return updatedTodoItemsList;
  }
  
 
  
  export default function reducer(
    state: TodoItem[],
    action: ReducerAction,
  ) {
    switch (action.type) {
      case 'add':
        const todoItem = action.payload;
        return addTodoItem(state, todoItem);
  
      default:
        return state;
    }
  }
  