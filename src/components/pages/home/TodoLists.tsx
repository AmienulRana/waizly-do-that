import React, { useState } from "react";
// import TodoListItem from '@/components/pages/home/TodoListItem/TodoListItem';
// import TodoListEmptyState from './TodoListEmptyState';
import { useTodoContext } from "@/context/TodoContext";
import { TodoItem } from "@/types";
import TodoListItem from "./TodoListItem";
import TodoListEmpty from "./TodoListEmpty";
import ModalEditTodo from "@/components/elements/modal/ModalEditTodo";
import useEditModal from "@/hooks/useModalEdit";

interface TodoListProps {
  todoList: TodoItem[];
  filterBy: "All" | "Pending" | "Completed";
}

function TodoList({ todoList, filterBy }: TodoListProps) {
  const [editTodoItem, setEditTodoItem] = useState<TodoItem | undefined>(
    undefined
  );

  const { dispatch } = useTodoContext();
  const { onClose: onCloseModal, onOpen: openModal } = useEditModal();

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
    onCloseModal();
  };

  const handleEditTodoItem = (todoItem: TodoItem) => {
    setEditTodoItem(todoItem);
    openModal();
  }

  if (filteredTodoList.length === 0) {
    return <TodoListEmpty filterOption={filterBy} />
  }
  return (
    <>
      <ul className="p-0">
        {filteredTodoList.map((todoItem) => (
          <TodoListItem
            key={todoItem.id}
            todoItem={todoItem}
            onEdit={() => handleEditTodoItem(todoItem)}
            onDelete={() => dispatch({ type: "remove", payload: todoItem.id})}
            onToggleCompletion={() => dispatch({ type: "toggleCompletion", payload: todoItem.id})}
          />
        ))}
      </ul>

      <ModalEditTodo onRename={onRename} todoItem={editTodoItem} />
    </>
  );
}

export default TodoList;
