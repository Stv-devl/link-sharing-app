import { create } from 'zustand';

interface ModalState {
  isOpen: boolean;
  content: string | null;
  openModal: (content: string) => void;
  closeModal: () => void;
}

const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  content: null,
  openModal: (content: string) => set({ isOpen: true, content }),
  closeModal: () => set({ isOpen: false, content: null }),
}));

export default useModalStore;
