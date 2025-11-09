import { create } from "zustand";

const usePrintStore = create((set) => ({
  printFunction: null,
  setPrintFunction: (printFn) => set({ printFunction: printFn }),
}));

export default usePrintStore;
