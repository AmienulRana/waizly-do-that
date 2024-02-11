import { create } from 'zustand';

interface ModalEditStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useEditModal = create<ModalEditStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}));


export default useEditModal;