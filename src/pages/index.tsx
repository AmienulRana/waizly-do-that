import Image from "next/image";
import { Inter, Open_Sans, Poppins } from "next/font/google";
import { Navbar } from "@/components/elements";
import { AddTodoBox } from "@/components/pages/home";
import Tabs from "@/components/elements/Tabs";
import { useReducer, useState } from "react";
import { tabsTodo } from "@/constant";
import TodoLists from "@/components/pages/home/TodoLists";
import reducer from "@/reducers/todoReducers";
import TodoContext from "@/context/TodoContext";

const inter = Poppins({ weight: "500", subsets: ["latin"] });

type tabs = "All" | "Completed" | "Pending";

export default function Home() {
  const [tabActive, setTabActive] = useState<tabs>("All");

  const [todoItems, dispatch] = useReducer(reducer, []);
  return (
    <TodoContext.Provider value={{ todoItems, dispatch }}>
      <section
        className={`px-32 py-[2em] max-w-[1200px] mx-auto ${inter.className}`}
      >
        <Navbar />
        <main className="sticky bg-[#121212] flex flex-col gap-[1em] z-[2] left-0 top-0">
          <AddTodoBox />
          <Tabs
            labels={tabsTodo}
            classNameWrapper="grid grid-cols-3"
            onChangeTabs={(value) => setTabActive(value)}
          />

          <TodoLists filterBy={tabActive} todoList={todoItems} />
        </main>
      </section>
    </TodoContext.Provider>
  );
}
