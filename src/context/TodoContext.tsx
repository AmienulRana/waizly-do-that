import { createContext, Dispatch, useContext } from 'react';
import { TodoItem, ReducerAction } from '@/types';

interface TodoContextShape {
  todoItems: TodoItem[];
  dispatch: Dispatch<ReducerAction>;
}

const TodoContext = createContext<TodoContextShape>({
  todoItems: [],
  dispatch: () => {}
});


export const useTodoContext = () => {
    const context = useContext(TodoContext);
    if (!context) {
      throw new Error(
        "useTodoContext must be used within a TodoProvider"
      );
    }
    return context;
  };

export default TodoContext;
