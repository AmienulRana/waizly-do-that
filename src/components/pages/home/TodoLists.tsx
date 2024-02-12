import React, { useEffect, useMemo, useReducer, useState } from "react";
// import TodoListItem from '@/components/pages/home/TodoListItem/TodoListItem';
// import TodoListEmptyState from './TodoListEmptyState';
import { useTodoContext } from "@/context/TodoContext";
import { TodoItem } from "@/types";
import TodoListItem from "./TodoListItem";
import TodoListEmpty from "./TodoListEmpty";
import ModalEditTodo from "@/components/elements/modal/ModalEditTodo";
import useEditModal from "@/hooks/useModalEdit";
import Tabs from "@/components/elements/Tabs";
import reducer from "@/reducers/todoReducers";
import { tabsTodo } from "@/constant";
import TodoListSearch from "./TodoListSearch";

type tabs = "All" | "Completed" | "Pending";

interface TodoListProps {
  todoList: TodoItem[];
}

function TodoList({ todoList }: TodoListProps) {
  const [editTodoItem, setEditTodoItem] = useState<TodoItem | undefined>(
    undefined
  );

  const { dispatch } = useTodoContext();
  const { onClose: onCloseModal, onOpen: openModal } = useEditModal();

  const [tabActive, setTabActive] = useState<tabs>("All");

  const [data, setData] = useState(todoList);

  const filteredTodoList = data.filter((todoItem) => {
    switch (tabActive) {
      case "Pending":
        return !todoItem.complete;

      case "Completed":
        return todoItem.complete;

      default:
        return true;
    }
  });

  useEffect(() => {
    setData(todoList);
  }, [todoList]);

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
  };

  return (
    <>
      <Tabs
        labels={tabsTodo}
        classNameWrapper="grid grid-cols-3"
        onChangeTabs={(value) => setTabActive(value)}
      />
      <TodoListSearch setData={setData} data={todoList} />

      {filteredTodoList?.length === 0 ? (
        <TodoListEmpty filterOption={tabActive} />
      ) : (
        <ul className="p-0">
          {filteredTodoList.map((todoItem: TodoItem) => (
            <TodoListItem
              key={todoItem.id}
              todoItem={todoItem}
              onEdit={() => handleEditTodoItem(todoItem)}
              onDelete={() =>
                dispatch({ type: "remove", payload: todoItem.id })
              }
              onToggleCompletion={() =>
                dispatch({ type: "toggleCompletion", payload: todoItem.id })
              }
            />
          ))}
        </ul>
      )}

      <ModalEditTodo onRename={onRename} todoItem={editTodoItem} />
    </>
  );
}

export default TodoList;
