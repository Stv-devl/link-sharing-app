import { ModalState } from '@/types/types';
import { create } from 'zustand';

/**
 * Zustand store for managing modal state.
 * Provides state variables and actions to open and close the modal with specific content.
 * @interface ModalState
 * @property {boolean} isOpen - Indicates if the modal is open.
 * @property {string | null} content - The content to display in the modal.
 * @property {(content: string) => void} openModal - Function to open the modal with specified content.

 * @property {() => void} closeModal - Function to close the modal.
 */

const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  content: null,
  openModal: (content: string) => set({ isOpen: true, content }),
  closeModal: () => set({ isOpen: false, content: null }),
}));

export default useModalStore;
