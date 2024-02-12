import { useTodoContext } from "@/context/TodoContext";
import { TodoItem } from "@/types";
import { SetStateAction } from "react";

interface ITodoListSearch {
    data: TodoItem[];
    setData: React.Dispatch<SetStateAction<TodoItem[]>>;
}

export default function TodoListSearch({data, setData}: ITodoListSearch) {
  const { dispatch } = useTodoContext();

  const searchTodoItem = (name: string) => {

    if (name === "")  setData(data);
  
    const filteredItems = data.filter((todo) =>
      todo.todo?.toLowerCase().includes(name.toLowerCase())
    );  
    setData(filteredItems);
  }
  return (
    <div className="flex justify-end">
      <input
        autoFocus
        type="text"
        className="w-full bg-mediumgray mt-5  border-2 px-4 py-2 rounded-md border-zinc-700 outline text-darkwhite outline-zinc-800"
        placeholder="Search todo name"
        onChange={(e) => searchTodoItem(e.target.value)}
      />
    </div>
  );
}
