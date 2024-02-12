import useJoinModal from "@/hooks/useModalEdit";
import Modal from "./Modal";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { TodoItem } from "@/types";

interface IEditModalProps {
  todoItem?: TodoItem;
  onRename: (newName: string) => void;
}

export default function ModalEditTodo({ todoItem, onRename }: IEditModalProps) {
  const { isOpen, onClose } = useJoinModal();
  const [newName, setNewName] = useState(todoItem?.todo ?? "");

  useEffect(() => {
    setNewName(todoItem?.todo!);
  }, [todoItem])

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col items-center">
        <p className="text-2xl mb-5">Edit Todo</p>

        <p className="text-sm italic text-gray-400 w-full mt-2">
          Edit Item &quot;{todoItem?.todo}&quot;
        </p>

        <input
          autoFocus
          type="text"
          className="w-full mt-5 outline-2 outline-primary border-2 px-4 py-2 rounded-md border-primary"
          placeholder="New name"
          value={newName}
          onChange={(e) => setNewName(e.currentTarget.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onRename(newName);
            }
          }}
        />

        <p className="text-sm italic w-full mt-2">
          *press Enter for submit data
        </p>
      </div>
    </Modal>
  );
}
