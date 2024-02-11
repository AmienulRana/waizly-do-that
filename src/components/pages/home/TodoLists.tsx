import React, { useState } from "react";
// import TodoListItem from '@/components/pages/home/TodoListItem/TodoListItem';
// import TodoListEmptyState from './TodoListEmptyState';
import { useTodoContext } from "@/context/TodoContext";
import { TodoItem } from "@/types";
import TodoListItem from "./TodoListItem";

interface TodoListProps {
  todoList: TodoItem[];
  filterBy: "All" | "Pending" | "Completed";
}

function TodoList({ todoList, filterBy }: TodoListProps) {
  const [editTodoItem, setEditTodoItem] = useState<TodoItem | undefined>(
    undefined
  );
  const { dispatch } = useTodoContext();

  const filteredTodoList = todoList.filter((todoItem) => {
    switch (filterBy) {
      case "Pending":
        return !todoItem.complete;

      case "Completed":
        return todoItem.complete;

      default:
        return true;
    }
  });

  const onRename = (newName: string) => {
    if (editTodoItem === undefined) return;

    dispatch({
      type: "edit",
      payload: {
        id: editTodoItem.id,
        todo: newName,
      },
    });
    setEditTodoItem(undefined);
  };
  return (
    <>
      <ul className="p-0">
        {filteredTodoList.map((todoItem) => (
          <TodoListItem
            key={todoItem.id}
            todoItem={todoItem}
            onEdit={() => setEditTodoItem(todoItem)}
            onDelete={() => {
              dispatch({
                type: "remove",
                payload: todoItem.id,
              });
            }}
            onToggleCompletion={() => {
              dispatch({
                type: "toggleCompletion",
                payload: todoItem.id,
              });
            }}
          />
        ))}
      </ul>
    </>
  );
}

export default TodoList;
