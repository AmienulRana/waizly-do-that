import { useTodoContext } from "@/context/TodoContext";
import { PlusIcon } from "@iconicicons/react";
import { useState } from "react";

export default function AddTodoBox() {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [todoText, setTodoText] = useState("");
  const { dispatch } = useTodoContext();

  const onSubmit = () => {
    if (todoText.trim().length === 0) return;
    dispatch({
      type: "add",
      payload: {
        todo: todoText,
        complete: false,
      },
    });
    setTodoText("");
  };

  return (
    <div
      className={`flex mt-10 items-center bg-[#181818] duration-300 ease-out gap-4 p-2 rounded-[0.5em] border-2 ${
        isInputFocused
          ? "border-[#2279db] shadow shadow-[#2279df]"
          : "border-zinc-700"
      }`}
    >
      <span
        className={`text-xl pl-4 ${
          isInputFocused ? "text-[#2279db]" : "text-zinc-700"
        }`}
      >
        &gt;
      </span>

      <input
        type="text"
        placeholder="What's on your mind..."
        className="grow text-white h-[2em] bg-transparent caret-[#2279db] border-0 outline-0"
        value={todoText}
        onFocus={() => setIsInputFocused(true)}
        onBlur={() => setIsInputFocused(false)}
        onChange={(e) => setTodoText(e.currentTarget.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onSubmit();
          }
        }}
      />

      <div className="h-14 w-14 bg-zinc-700 text-white duration-300 hover:opacity-90 active:opacity-70 rounded-[0.3rem]">
        <button
          className="w-full h-full flex items-center justify-center border-[none]"
          disabled={todoText.trim().length === 0}
          onClick={onSubmit}
        >
          <PlusIcon />
        </button>
      </div>
    </div>
  );
}
