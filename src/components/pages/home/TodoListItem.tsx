import React from "react";
import { motion } from "framer-motion";
import { EditIcon, TrashIcon } from "@iconicicons/react";
import styles from "./styles/todoListItems.module.css";
import { TodoItem } from "@/types";

interface TodoListItemProps {
  todoItem: TodoItem;
  onEdit: () => void;
  onDelete: () => void;
  onToggleCompletion: () => void;
}

function TodoListItem({
  todoItem,
  onDelete,
  onEdit,
  onToggleCompletion,
}: TodoListItemProps) {
  const todoListItemActions = [
    {
      title: "Edit Item",
      ariaLabel: `Edit Item "${todoItem.todo}"`,
      Icon: <EditIcon />,
      onClick: onEdit,
    },
    {
      title: "Delete Item",
      ariaLabel: `Delete Item "${todoItem.todo}"`,
      Icon: <TrashIcon />,
      onClick: onDelete,
    },
  ];

  return (
    <motion.li
      className={`relative flex flex-row items-center justify-between border gap-5 mt-5 pl-4 pr-2.5 py-2.5 rounded-lg border-solid border-[rgba(255,255,255,0.2)] ${styles["todo-list-item-root"]}`}
      data-completed={todoItem.complete}
      layout
      animate={{
        y: [30, 0],
        transition: {
          duration: 0.3,
          ease: "easeOut",
        },
      }}
    >
      <div className="absolute inset-0" onClick={onToggleCompletion} />

      <div className="flex flex-row items-center gap-[1em]">
        <input
          className={styles["input-check"]}
          type="checkbox"
          checked={todoItem.complete}
          id={`checkbox-${todoItem.id}`}
          title={`Mark item "${todoItem.todo}" as ${
            todoItem.complete ? "pending" : "completed"
          }`}
          onChange={onToggleCompletion}
        />

        <label
          className={styles["todo-list-item-label"]}
          htmlFor={`checkbox-${todoItem.id}`}
        >
          {todoItem.todo}
        </label>
      </div>

      <div className={'flex gap-2 z-10'}>
        {todoListItemActions.map(({onClick, ariaLabel, title, Icon}) => (
          <button
            className="h-10 w-10 bg-mediumgray text-white duration-300 flex items-center justify-center rounded-md border-0 focus-visible:shadow-[0_0_0_3px_rgba(255,255,255,0.3)] focus-visible:scale-110 hover:opacity-90 active:opacity-70"
            type="button"
            title={title}
            onClick={onClick}
            aria-label={ariaLabel}
            key={title}
          >
            {Icon}
          </button>
        ))}
      </div>
    </motion.li>
  );
}

export default TodoListItem;
